import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import router from './Router/routes/router'


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <div className='overflow-hidden'>
   <Toaster />
    <RouterProvider router={router} />
   </div>
  </StrictMode>,
)
