import React from 'react'
import './App.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ContactUs } from './pages/ContactUs'
import { AboutUs } from './pages/AboutUs'
import { BusinessSector } from './pages/BusinessSector'

const App = () => {
  const Routing = createBrowserRouter([
    {path: "/", element: <Layout/>, children:[
      {path: "/قطاع-الأعمال", element: <BusinessSector/>},
      {path: "/عن-الشركة", element: <AboutUs/>},
      {path: "/الفروع", element: <ContactUs/>},
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