import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import router from './Router/routes/router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthProvider from './Provider/AuthProvider'
import { HelmetProvider } from 'react-helmet-async'
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <HelmetProvider>
 <QueryClientProvider client={queryClient}>
 <AuthProvider>
 <div className='overflow-hidden'>
   <Toaster />
    <RouterProvider router={router} />
   </div>
 </AuthProvider>
 </QueryClientProvider>
 </HelmetProvider>
  </StrictMode>,
)
