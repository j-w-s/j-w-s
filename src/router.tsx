import { useState, useEffect, createContext, useContext } from 'react';
import { routes } from './constants/routes';
import Layout from './components/layout';

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

    const Component = routes[pathname] || routes['/'];

    return (
        <RouterContext.Provider value={{ pathname, searchParams, navigate, updateParams }}>
            <Layout>
                <Component />
            </Layout>
        </RouterContext.Provider>
    );
};
