import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './reset.scss'
import { QueryClient, QueryClientProvider } from 'react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: false,
      refetchOnWindowFocus: false
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryClientProvider>
)
