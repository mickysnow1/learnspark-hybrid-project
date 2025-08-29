import React from 'react'
import ReactDOM from 'react-dom/client'
import SubscriptionPlans from './SubscriptionPlans.jsx'

const container = document.getElementById('plans-root')
if (container) {
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <SubscriptionPlans />
    </React.StrictMode>,
  )
}
