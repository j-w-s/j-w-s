# Vite + React + TypeScript Architecture Guide

Client-side routing, functional transformations, component composition - building data-driven applications with modern patterns.

## Project Structure

```
/
├── index.html                       # vite html entry
├── public/
│   └── vite.svg
├── src/
│   ├── main.ts                      # vite entry point, renders app
│   ├── router.ts                    # routing logic and useRouter hook
│   ├── style.css                    # global styles
│   ├── (pages)/
│   │   ├── home.tsx                 # pages
│   │   ├── .....
│   ├── components/                  # reusable components
│   │   ├── layout.tsx
│   │   ├── navbar.tsx
│   │   └── grid.tsx
│   ├── hooks/
│   │   └── ...
│   ├── lib/
│   │   └── canal.ts                 # canal query builder (api calls)
│   ├── types/
│   │   ├── ...            # domain models, others (e.g. body.ts, page.ts, params.ts)
│   └── constants/
│       └── routes.ts                # route definitions
├── package.json
└── tsconfig.json
```

## Architecture Patterns

BASE PAGE SETUP:
const Home = () => {
return;
}

export default Home;

### Data Flow Pattern

```
URL params → router → useApi hook → data
                ↓
         page component → transform → render
                ↓
         user interaction → URL update → refetch
```

## Core Patterns

### 1. main.ts - Entry Point

Vite entry point that renders the app.

```typescript
import { createRoot } from 'react-dom/client';
import { Router } from './router';
import './style.css';

createRoot(document.getElementById('app')!).render(<Router />);
```

**Key principles:**

- renders root router component
- imports global styles
- mounts to #app element in index.html

### 2. router.ts - Routing Logic

Central routing logic, navigation hook, and route renderer.

```typescript
import { useState, useEffect, createContext, useContext } from 'react';
import { routes } from './constants/routes';
import NotFoundPage from './pages/NotFound';

interface RouterContext {
  pathname: string;
  searchParams: URLSearchParams;
  navigate: (path: string, params?: Record<string, string>) => void;
  updateParams: (params: Record<string, string | null>) => void;
}

const RouterContext = createContext<RouterContext | null>(null);

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) throw new Error('useRouter must be used within Router');
  return context;
};

export const Router = () => {
  const [pathname, setPathname] = useState(window.location.pathname);
  const [searchParams, setSearchParams] = useState(
    new URLSearchParams(window.location.search)
  );

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname);
      setSearchParams(new URLSearchParams(window.location.search));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string, params?: Record<string, string>) => {
    const url = new URL(path, window.location.origin);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.set(key, value);
      });
    }
    window.history.pushState({}, '', url);
    setPathname(url.pathname);
    setSearchParams(url.searchParams);
  };

  const updateParams = (params: Record<string, string | null>) => {
    const newParams = new URLSearchParams(searchParams);
    Object.entries(params).forEach(([key, value]) => {
      if (value === null) {
        newParams.delete(key);
      } else {
        newParams.set(key, value);
      }
    });
    const url = `${pathname}?${newParams.toString()}`;
    window.history.pushState({}, '', url);
    setSearchParams(newParams);
  };

  const Component = routes[pathname] || NotFoundPage;

  return (
    <RouterContext.Provider value={{ pathname, searchParams, navigate, updateParams }}>
      <Component />
    </RouterContext.Provider>
  );
};
```

**Key principles:**

- single component manages all route state
- url is source of truth for navigation and filters
- browser back/forward handled automatically
- context provides router state to all components
- updateParams for filter changes without full navigation

### constants/routes.ts - Route Definitions

Centralized route configuration.

```typescript
// constants/routes.ts
import HomePage from '../pages/Home';
import DashboardPage from '../pages/Dashboard';
import ReportsPage from '../pages/Reports';

export const routes: Record<string, () => JSX.Element> = {
  '/': HomePage,
  '/dashboard': DashboardPage,
  '/reports': ReportsPage,
};
```

**Key principles:**

- single source of truth for all routes
- import page components
- export routes object for use in router

### 3. hooks/useApi.ts - Data Fetching Hook

Reusable hook for fetching and caching data.

```typescript
import { useState, useEffect } from 'react';

interface UseApiOptions<T> {
  skip?: boolean;
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
}

export const useApi = <T,>(
  fetchFn: () => Promise<T>,
  deps: any[] = [],
  options: UseApiOptions<T> = {}
) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(!options.skip);
  const [error, setError] = useState<Error | null>(null);

  const refetch = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchFn();
      setData(result);
      options.onSuccess?.(result);
    } catch (err) {
      const error = err instanceof Error ? err : new Error('unknown error');
      setError(error);
      options.onError?.(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!options.skip) {
      refetch();
    }
  }, deps);

  return { data, loading, error, refetch };
};

// specialized hook for canal queries
export const useCanalQuery = <T,>(
  queryFn: () => Promise<T>,
  deps: any[] = []
) => {
  return useApi(queryFn, deps);
};
```

**Key principles:**

- encapsulates loading, error, and data states
- automatic refetch on dependency changes
- manual refetch function for mutations
- optional skip for conditional fetching

### 4. Page Component Pattern

Pages fetch data, transform it functionally, and render.

```typescript
// pages/Dashboard.tsx
import { useRouter } from '../router';
import { useCanalQuery } from '../hooks/useApi';
import { query } from '../lib/canal';
import { Analytics, User } from '../types/analytics';
import DashboardGrid from '../components/DashboardGrid';
import DashboardFilters from '../components/DashboardFilters';

const Dashboard = () => {
  const { searchParams, updateParams } = useRouter();
  
  // extract url parameters
  const userId = searchParams.get('userId');
  const startDate = searchParams.get('startDate');
  const endDate = searchParams.get('endDate');
  const status = searchParams.get('status');
  const page = parseInt(searchParams.get('page') || '1');
  
  // build conditional query
  let analyticsQuery = query
    .analytics()
    .fields('key,metric,value,timestamp,userId')
    .page(page);
  
  if (userId) {
    analyticsQuery = analyticsQuery.where({ userId: parseInt(userId) });
  }
  if (startDate && endDate) {
    analyticsQuery = analyticsQuery.where({
      timestamp: { gte: startDate, lte: endDate }
    });
  }
  if (status) {
    analyticsQuery = analyticsQuery.where({ status });
  }
  
  // parallel data fetching
  const { data: analyticsData, loading: analyticsLoading } = useCanalQuery(
    () => analyticsQuery.all(),
    [userId, startDate, endDate, status, page]
  );
  
  const { data: users } = useCanalQuery(
    () => query
      .users()
      .fields('key,name,email,role')
      .where({ active: true })
      .allRecords(),
    []
  );
  
  // handle filter changes
  const handleFilterChange = (filters: Record<string, string | null>) => {
    updateParams({ ...filters, page: '1' });
  };
  
  const handlePageChange = (newPage: number) => {
    updateParams({ page: newPage.toString() });
  };
  
  if (analyticsLoading || !analyticsData || !users) {
    return <div>Loading...</div>;
  }
  
  // functional transformation pipeline
  const userMap = new Map(users.map(u => [u.key, u]));
  
  const enrichedAnalytics = analyticsData.data
    .filter(a => a.value > 0)
    .map(a => ({
      ...a,
      userName: userMap.get(a.userId)?.name ?? 'unknown',
      userRole: userMap.get(a.userId)?.role ?? 'unknown',
      computed: a.value * 1.1
    }))
    .sort((a, b) => b.timestamp.localeCompare(a.timestamp));
  
  return (
    <div>
      <h1>Dashboard</h1>
      <DashboardFilters
        onChange={handleFilterChange}
        currentFilters={{
          userId: userId || '',
          startDate: startDate || '',
          endDate: endDate || '',
          status: status || ''
        }}
      />
      <DashboardGrid
        data={enrichedAnalytics}
        page={analyticsData.page}
        pageSize={analyticsData.pageSize}
        pageCount={analyticsData.pageCount}
        totalCount={analyticsData.totalCount}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Dashboard;
```

**Key principles:**

- extract searchParams at the top
- build conditional queries based on params
- use useCanalQuery for automatic refetch on param changes
- transform data functionally before rendering
- all state changes go through url params

### 5. types/analytics.ts - Domain Models

Centralized type definitions for your domain.

```typescript
// types/analytics.ts
export interface Analytics {
  key: number;
  metric: string;
  value: number;
  timestamp: string;
  userId: number;
  status: 'active' | 'archived';
}

export interface User {
  key: number;
  name: string;
  email: string;
  role: string;
  active: boolean;
}

export interface Report {
  key: number;
  title: string;
  status: 'draft' | 'published' | 'archived';
  createdAt: string;
  authorId: number;
}

// view models when needed
export interface EnrichedAnalytics extends Analytics {
  userName: string;
  userRole: string;
  computed: number;
}
```

**Key principles:**

- domain interfaces match api response shapes
- form/view models extend domain models when needed
- keep types close to the domain they represent

### 6. lib/canal.ts - Query Builder

Canal query utilities for type-safe api calls.

```typescript
// lib/canal.ts
const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3000/api';

class CanalQuery<T> {
  private endpoint: string;
  private _fields: string[] = [];
  private _filters: Record<string, any> = {};
  private _search?: string;
  private _page?: number;
  private _pageSize?: number;
  private _sort?: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  fields(...fields: string[]): this {
    this._fields = fields;
    return this;
  }

  where(filters: Record<string, any>): this {
    this._filters = { ...this._filters, ...filters };
    return this;
  }

  search(term: string): this {
    this._search = term;
    return this;
  }

  page(page: number): this {
    this._page = page;
    return this;
  }

  pageSize(size: number): this {
    this._pageSize = size;
    return this;
  }

  sort(sortBy: string): this {
    this._sort = sortBy;
    return this;
  }

  async all(): Promise<{
    data: T[];
    page: number;
    pageSize: number;
    pageCount: number;
    totalCount: number;
  }> {
    const params = new URLSearchParams();
    
    if (this._fields.length > 0) {
      params.set('fields', this._fields.join(','));
    }
    if (this._search) {
      params.set('search', this._search);
    }
    if (this._page) {
      params.set('page', this._page.toString());
    }
    if (this._pageSize) {
      params.set('pageSize', this._pageSize.toString());
    }
    if (this._sort) {
      params.set('sort', this._sort);
    }
    
    Object.entries(this._filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        params.set(key, String(value));
      }
    });

    const response = await fetch(`${API_BASE}/${this.endpoint}?${params}`);
    if (!response.ok) {
      throw new Error(`api error: ${response.statusText}`);
    }
    return response.json();
  }

  async allRecords(): Promise<T[]> {
    const results: T[] = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      const response = await this.page(page).all();
      results.push(...response.data);
      hasMore = page < response.pageCount;
      page++;
    }

    return results;
  }

  async csv(): Promise<{ blob: Blob; filename: string }> {
    const params = new URLSearchParams();
    
    if (this._fields.length > 0) {
      params.set('fields', this._fields.join(','));
    }
    
    Object.entries(this._filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        params.set(key, String(value));
      }
    });

    const response = await fetch(`${API_BASE}/${this.endpoint}/export?${params}`);
    if (!response.ok) {
      throw new Error(`export error: ${response.statusText}`);
    }

    const blob = await response.blob();
    const filename = response.headers.get('content-disposition')
      ?.split('filename=')[1]
      ?.replace(/"/g, '') || 'export.csv';

    return { blob, filename };
  }
}

// query builders
export const query = {
  analytics: () => new CanalQuery<Analytics>('analytics'),
  users: () => new CanalQuery<User>('users'),
  reports: () => new CanalQuery<Report>('reports'),
  
  // nested endpoints
  userReports: (userId: number) => 
    new CanalQuery<Report>(`users/${userId}/reports`),
};
```

**Key principles:**

- fluent api for building queries
- type-safe with generics
- supports pagination, filtering, sorting
- allRecords for fetching all data across pages
- csv export with same query filters

### 7. lib/api.ts - Mutation Utilities

Helper functions for create/update/delete operations.

```typescript
// lib/api.ts
const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3000/api';

export const api = {
  async create<T>(endpoint: string, data: Partial<T>): Promise<T> {
    const response = await fetch(`${API_BASE}/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`create failed: ${response.statusText}`);
    }
    return response.json();
  },

  async update<T>(endpoint: string, key: number, data: Partial<T>): Promise<T> {
    const response = await fetch(`${API_BASE}/${endpoint}/${key}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`update failed: ${response.statusText}`);
    }
    return response.json();
  },

  async delete(endpoint: string, key: number): Promise<void> {
    const response = await fetch(`${API_BASE}/${endpoint}/${key}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`delete failed: ${response.statusText}`);
    }
  },

  async batchUpdate<T>(
    endpoint: string,
    updates: Array<{ key: number; data: Partial<T> }>
  ): Promise<T[]> {
    return Promise.all(
      updates.map(({ key, data }) => this.update<T>(endpoint, key, data))
    );
  },
};
```

**Key principles:**

- simple fetch wrappers for mutations
- consistent error handling
- batch operations with Promise.all
- type-safe with generics

### 8. Components - Pure Presentation

Components receive data and transform it functionally.

```typescript
// components/DashboardGrid.tsx
import { EnrichedAnalytics } from '../types/analytics';

interface DashboardGridProps {
  data: EnrichedAnalytics[];
  page: number;
  pageSize: number;
  pageCount: number;
  totalCount: number;
  onPageChange: (page: number) => void;
}

const DashboardGrid = ({
  data,
  page,
  pageSize,
  pageCount,
  totalCount,
  onPageChange
}: DashboardGridProps) => {
  // group by user
  const byUser = data.reduce((acc, item) => {
    const key = item.userId;
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {} as Record<number, typeof data>);

  // calculate stats
  const totalValue = data.reduce((sum, item) => sum + item.value, 0);
  const avgValue = totalValue / data.length;

  return (
    <div>
      <div className="stats">
        <p>Total: {totalValue.toFixed(2)}</p>
        <p>Average: {avgValue.toFixed(2)}</p>
        <p>Count: {totalCount}</p>
      </div>

      <table>
        <thead>
          <tr>
            <th>Metric</th>
            <th>Value</th>
            <th>Computed</th>
            <th>User</th>
            <th>Role</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.key}>
              <td>{item.metric}</td>
              <td>{item.value}</td>
              <td>{item.computed.toFixed(2)}</td>
              <td>{item.userName}</td>
              <td>{item.userRole}</td>
              <td>{new Date(item.timestamp).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button
          disabled={page === 1}
          onClick={() => onPageChange(page - 1)}
        >
          Previous
        </button>
        <span>Page {page} of {pageCount}</span>
        <button
          disabled={page === pageCount}
          onClick={() => onPageChange(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DashboardGrid;
```

**Key principles:**

- receive data as props
- transform functionally with reduce/map/filter
- calculate derived values inline
- keep transformations in the component

## Functional Data Transformation

### Filtering and Mapping

```typescript
// extract specific fields
const names = users.map(u => u.name);

// transform shape
const summary = users
  .filter(u => u.active)
  .map(u => ({
    id: u.key,
    displayName: u.name.toUpperCase(),
    initials: u.name.split(' ').map(n => n[0]).join('')
  }));

// conditional transformation
const enriched = items.map(item => ({
  ...item,
  label: item.featured ? `⭐ ${item.name}` : item.name,
  priority: item.urgent ? 1 : 2
}));
```

### Grouping and Aggregation

```typescript
// group by field
const byCategory = items.reduce((acc, item) => {
  const key = item.category;
  if (!acc[key]) acc[key] = [];
  acc[key].push(item);
  return acc;
}, {} as Record<string, typeof items>);

// count occurrences
const counts = items.reduce((acc, item) => {
  acc[item.status] = (acc[item.status] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

// sum values
const total = items.reduce((sum, item) => sum + item.amount, 0);

// nested grouping
const nested = items.reduce((acc, item) => {
  if (!acc[item.region]) acc[item.region] = {};
  if (!acc[item.region][item.category]) {
    acc[item.region][item.category] = [];
  }
  acc[item.region][item.category].push(item);
  return acc;
}, {} as Record<string, Record<string, typeof items>>);
```

### Dictionary Comprehensions

```typescript
// array to object lookup
const lookup = Object.fromEntries(
  items.map(item => [item.key, item])
);

// transform keys and values
const nameMap = Object.fromEntries(
  items.map(item => [item.name.toLowerCase(), item.key])
);

// with Map for better typing
const map = new Map(items.map(item => [item.key, item]));
const item = map.get(5); // fully typed
```

### Extracting Nested Data

```typescript
// flatten nested arrays
const allTags = users.flatMap(u => u.tags);

// extract with parent context
const enriched = orders.flatMap(order =>
  order.items.map(item => ({
    ...item,
    orderId: order.key,
    orderDate: order.createdAt
  }))
);

// conditional expansion
const expanded = users.flatMap(u =>
  u.isAdmin
    ? [u, { ...u, name: `${u.name} (admin)` }]
    : [u]
);

// combined filter + map
const activeEmails = users.flatMap(u =>
  u.active ? [u.email] : []
);
```

## Canal Query Patterns

### Basic Queries

```typescript
// fetch with fields
const items = await query
  .items()
  .fields('key', 'name', 'status')
  .all();

// with filters
const active = await query
  .items()
  .fields('key', 'name')
  .where({ active: true })
  .all();

// with search
const searched = await query
  .items()
  .fields('key', 'name')
  .search('keyword')
  .all();

// with pagination
const paged = await query
  .items()
  .fields('key', 'name')
  .page(2)
  .pageSize(50)
  .all();

// with sorting
const sorted = await query
  .items()
  .fields('key', 'name', 'createdAt')
  .sort('createdAt desc')
  .all();
```

### Fetch All Records

```typescript
// automatically paginate through all results
const allItems = await query
  .items()
  .fields('key', 'name')
  .where({ active: true })
  .allRecords();

// use for dropdown/lookup data
const users = await query
  .users()
  .fields('key', 'name')
  .allRecords();
```

### Conditional Query Building

```typescript
let itemsQuery = query
  .items()
  .fields('key', 'name', 'status');

if (categoryId) {
  itemsQuery = itemsQuery.where({ categoryId });
}

if (searchTerm) {
  itemsQuery = itemsQuery.search(searchTerm);
}

const items = await itemsQuery.all();
```

### CSV Export

```typescript
// export with same query filters
const handleExport = async () => {
  const { blob, filename } = await query
    .items()
    .fields('key', 'name', 'status', 'createdAt')
    .where({ active: true })
    .sort('createdAt desc')
    .csv();
    
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
};
```

## Multi-Step Flows

### Stepper Pattern

For wizards or multi-step forms, use a stepper component with context.

```typescript
// components/Stepper.tsx
import { createContext, useContext, useState, ReactNode } from 'react';

interface Step {
  label: string;
  component: React.ComponentType;
}

const StepperContext = createContext<{
  formData: Record<string, any>;
  setFormData: (data: any) => void;
} | null>(null);

export const useStepper = () => {
  const context = useContext(StepperContext);
  if (!context) throw new Error('useStepper must be used within Stepper');
  return context;
};

interface StepperProps {
  steps: Step[];
  onSubmit: (data: Record<string, any>) => void;
}

export const Stepper = ({ steps, onSubmit }: StepperProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});
  
  const CurrentStep = steps[activeStep].component;
  
  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      onSubmit(formData);
    } else {
      setActiveStep(prev => prev + 1);
    }
  };
  
  const handleBack = () => {
    setActiveStep(prev => prev - 1);
  };
  
  return (
    <StepperContext.Provider value={{ formData, setFormData }}>
      <div className="stepper">
        <div className="stepper-header">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`step ${index === activeStep ? 'active' : ''} ${
                index < activeStep ? 'completed' : ''
              }`}
            >
              {step.label}
            </div>
          ))}
        </div>
        
        <div className="stepper-content">
          <CurrentStep />
        </div>
        
        <div className="stepper-actions">
          <button onClick={handleBack} disabled={activeStep === 0}>
            Back
          </button>
          <button onClick={handleNext}>
            {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
          </button>
        </div>
      </div>
    </StepperContext.Provider>
  );
};
```

### Step Components

```typescript
// components/steps/BasicInfo.tsx
import { useStepper } from '../Stepper';

export const BasicInfoStep = () => {
  const { formData, setFormData } = useStepper();
  
  const handleChange = (field: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
  };
  
  return (
    <div>
      <label>
        Name:
        <input
          value={formData.name || ''}
          onChange={e => handleChange('name', e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={formData.email || ''}
          onChange={e => handleChange('email', e.target.value)}
        />
      </label>
    </div>
  );
};
```

## URL as Source of Truth

All filterable/sortable state lives in url parameters.

```typescript
const Dashboard = () => {
  const { searchParams, updateParams } = useRouter();
  
  // extract from url
  const status = searchParams.get('status');
  const category = searchParams.get('category');
  const search = searchParams.get('search');
  
  // update url on filter change
  const handleFilterChange = (filters: Record<string, string | null>) => {
    updateParams(filters);
  };
  
  // query automatically refetches when params change
  const { data } = useCanalQuery(
    () => query
      .items()
      .where({ status, category })
      .search(search || '')
      .all(),
    [status, category, search]
  );
  
  return (
    <div>
      <Filters onChange={handleFilterChange} />
      <Grid data={data?.data || []} />
    </div>
  );
};
```

## Design Principles

### Single Responsibility

- router.ts: manage routes and navigation
- pages/: fetch data and orchestrate layout
- components/: transform and render
- hooks/: reusable data fetching logic

### Functional Composition

Data flows through transformations:

```typescript
// ✅ functional pipes
const result = data
  .filter(item => item.active)
  .map(item => ({ ...item, computed: item.value * 2 }))
  .sort((a, b) => a.computed - b.computed);

// ❌ imperative loops
const result = [];
for (const item of data) {
  if (item.active) {
    const transformed = { ...item, computed: item.value * 2 };
    result.push(transformed);
  }
}
result.sort((a, b) => a.computed - b.computed);
```

### Minimal Types

Interfaces model domains, not implementation:

```typescript
// ✅ domain model
interface Order {
  key: number;
  customerId: number;
  total: number;
  status: string;
}

// ❌ implementation details
interface OrderWithCustomerNameAndFormattedTotal {
  orderId: number;
  customerFullName: string;
  totalInDollars: string;
}
```

### Context Over Props

Use context to distribute data when needed:

```typescript
// ✅ context for shared state
const FormContext = createContext<FormData | null>(null);

// ✅ props for simple data flow
<Grid data={items} onSelect={handleSelect} />
```