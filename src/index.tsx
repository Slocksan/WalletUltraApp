import React from 'react'
import { createRoot } from 'react-dom/client'
import { ApplicationContainer } from './containers/application-container'

const rootElement = document.getElementById('root') as HTMLElement
const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <ApplicationContainer />
  </React.StrictMode>
)
