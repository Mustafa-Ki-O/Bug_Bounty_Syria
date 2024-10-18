import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import '@mantine/charts/styles.css';
import  './i18n.js'
import { QueryClientProvider,QueryClient } from 'react-query';

const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
  <MantineProvider>
    <App />
  </MantineProvider>
  </QueryClientProvider>,
)
