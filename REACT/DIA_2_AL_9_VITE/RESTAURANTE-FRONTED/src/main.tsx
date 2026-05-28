import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index1.css';
import App from './App1';

import { PedidoProvider } from './context/PedidoContext.jsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <PedidoProvider>
            <App />
        </PedidoProvider>
    </StrictMode>
);
