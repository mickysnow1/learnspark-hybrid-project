import React from 'react'
import ReactDOM from 'react-dom/client'
import SubscriptionPlans from './SubscriptionPlans.jsx'

// --- THIS IS THE CRITICAL FIX ---
// By importing the CSS and JS files here, we tell Vite to include them in the build.
// The paths '/style.css' and '/script.js' are relative to the project root.
import '/style.css'
import '/script.js'

// This is the React part: it finds the #plans-root div and injects the component.
const container = document.getElementById('plans-root')
if (container) {
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <SubscriptionPlans />
    </React.StrictMode>,
  )
}
