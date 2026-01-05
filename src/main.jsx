import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from "react-router";
import router from './Routes/router';
import AOS from "aos";
import "aos/dist/aos.css";

 AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='md:max-w-screen-2xl mx-auto bg-black'>
       <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
