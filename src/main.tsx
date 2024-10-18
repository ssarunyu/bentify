import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Page
import App from './App';
import About from './components/About'
import Privacy from './components/Privacy';

import './index.css'

// Vercel analytics
import { Analytics } from "@vercel/analytics/react"

// Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/privacy",
    element: <Privacy />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Analytics />
    <RouterProvider router={router} />
  </StrictMode>,
)
