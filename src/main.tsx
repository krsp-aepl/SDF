import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { SDFLanguageWidget } from './components/SDFLanguageWidget.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(<>
  <App />
  <SDFLanguageWidget />
</>);
