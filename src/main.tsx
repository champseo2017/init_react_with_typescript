import { StyleProvider } from '@ant-design/cssinjs'
import { App as AntApp, ConfigProvider } from 'antd'
import { createRoot } from 'react-dom/client'

import 'antd/dist/reset.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <ConfigProvider wave={{ disabled: true }}> 
      <StyleProvider hashPriority="high">
        <AntApp>
          <App />
        </AntApp>
      </StyleProvider>
    </ConfigProvider>
)