import { createRoot } from 'react-dom/client';
import { Router } from './router';
import './style.css';

createRoot(document.getElementById('app')!).render(<Router />);
