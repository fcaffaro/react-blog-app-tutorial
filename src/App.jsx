
import './App.css'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Register from './pages/Register.jsx'
import Single from './pages/Single.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Write from './pages/Write.jsx'

import  LayoutPage from './pages/LayoutPage.jsx'
import './style.scss'

function App() {
  const router = createBrowserRouter([
      {
          path: '/',
          element: <LayoutPage/>,
          children: [
              {
                  path: '/',
                  element: <Home/>
              },

              {
                  path: '/single',
                  element: <Single/>

              },

              {
                  path: '/write',
                  element: <Write/>
              }
          ]
      },
      {
          path: '/login',
          element: <Login/>
      },
                    {
                  path: '/register',
                  element: <Register/>
              },

    ])

  return (
    <div className="app">
        <div className ="app-container">

            <RouterProvider router={router} />
        </div>
    </div>
  )
}

export default App
