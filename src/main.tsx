import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'

import './index.css'
import './App.css'
import App from './App.tsx'
import { CartProvider } from './providers/cart-provider/index.tsx'
import { UserAuthProvider } from './providers/user-auth-provider/UserAuthContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserAuthProvider>
      <CartProvider>
        <App />
        <Toaster/>
      </CartProvider>
    </UserAuthProvider>
  </StrictMode>,
)
