import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import Router from './pages/routes';

const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

const rootEl = document.getElementById('root');
if (rootEl) createRoot(rootEl).render(<App />);
