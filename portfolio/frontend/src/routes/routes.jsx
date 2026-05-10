import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import Home from '../components/pages/Home'
import About from '../components/pages/About'
import Contact from '../components/pages/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
])

export default router
