import React from 'react'
import ReactDOM from 'react-dom/client'
import SubscriptionPlans from './SubscriptionPlans.jsx'

// --- THE DEFINITIVE FIX ---
// This formally "invites" your vanilla files to the final build party.
// The paths are now correct.
import '../style.css'
import '../script.js'

// This renders the React component into the #plans-root div in your HTML.
const container = document.getElementById('plans-root')
if (container) {
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <SubscriptionPlans />
    </React.StrictMode>,
  )
}
