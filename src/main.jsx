import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {QueryClientProvider} from 'react-query'
import { queryClient } from './components/services/queryClient'
import {BrowserRouter} from 'react-router-dom'




ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}> 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
