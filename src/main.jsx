import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import router from './Router/routes/router'
import AuthProvider from './Provider/AuthProvider'
import { HelmetProvider } from 'react-helmet-async'


createRoot(document.getElementById('root')).render(
  <StrictMode>
 <HelmetProvider>
 <AuthProvider>
 <div className='overflow-hidden'>
   <Toaster />
    <RouterProvider router={router} />
   </div>
 </AuthProvider>
 </HelmetProvider>
  </StrictMode>,
)
