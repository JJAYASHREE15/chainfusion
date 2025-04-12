
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Get theme from localStorage or use 'dark' as default
const theme = localStorage.getItem('theme') || 'dark';
document.documentElement.classList.add(theme);

createRoot(document.getElementById("root")!).render(<App />);
