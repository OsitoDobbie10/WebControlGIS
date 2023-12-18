import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import {ContextLogin1} from "./index.js"
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ContextLogin1>
  <QueryClientProvider client={queryClient}>
   <App/>
   </QueryClientProvider> 
  </ContextLogin1>
  </React.StrictMode>,
)
