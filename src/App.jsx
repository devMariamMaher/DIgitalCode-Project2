import React from 'react'
import './App.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ContactUs } from './pages/ContactUs'

const App = () => {
  const Routing = createBrowserRouter([
    {path: "/", element: <Layout/>, children:[
      {path: "/الفروع", element: <ContactUs/>}
    ]}
  ])

  return (
    <>
      <RouterProvider router={Routing}>

      </RouterProvider>
    </>
  )
}

export default App