import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Home from './components/Home';
import { UserProvider } from './utils/userContext';

const App = () => {

  const appRoute = createBrowserRouter([
    {
      path:'/',
      element: <Home />
    },
  ])
  return (
    <UserProvider>
      <RouterProvider router={appRoute} />
    </UserProvider>
  )
}

export default App

