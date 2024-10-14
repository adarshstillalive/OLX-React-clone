import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Home from './components/Home';

const App = () => {

  const appRoute = createBrowserRouter([
    {
      path:'/',
      element: <Home />
    },
  ])
  return (
    <div>
      <RouterProvider router={appRoute} />
    </div>
  )
}

export default App

