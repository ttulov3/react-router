import { useState } from 'react'
import {RouterProvider} from 'react-router-dom'
import { routes } from './pages/routes'
import './App.css'

function App() {

  return (
    <RouterProvider router={routes}/>
  )
}

export default App
