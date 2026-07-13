import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1>Hello, World!</h1>
    <App />
  </StrictMode>,
);
