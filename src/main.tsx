import { createRoot } from 'react-dom/client';
import { UseAuthProvider } from "./hooks/AuthContext";
import { CookiesProvider } from 'react-cookie';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <>
    <CookiesProvider>
      <UseAuthProvider>
        <App/>
      </UseAuthProvider>
    </CookiesProvider>
  </>,
)
