import { StyleProvider } from '@ant-design/cssinjs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { App as AntApp, ConfigProvider } from 'antd';
import { createRoot } from 'react-dom/client';

import 'antd/dist/reset.css';
import App from './App.tsx';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
      <ConfigProvider wave={{ disabled: true }}>
        <StyleProvider hashPriority="high">
          <AntApp>
            <App />
          </AntApp>
        </StyleProvider>
      </ConfigProvider>
    </QueryClientProvider>,
)