import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import AiAutomationPreview from './pages/AiAutomationPreview.tsx';
import './index.css';

const path = window.location.pathname.replace(/\/+$/, '');
const Page = path === '/ai-automation-preview' ? AiAutomationPreview : App;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
);
