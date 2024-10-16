
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom';
import Home from './components/Home';
import MyADS from './components/MyADS';
import Header from './components/Header';
import { UserProvider, useUser } from './utils/userContext';
import AdTemplate from './components/AdTemplate';
import { AdsProvider } from './utils/adContext';
import AdPage from './components/AdPage';
import { CommonAdsProvider } from './utils/commonContext';


const RootLayout = () => (
  <div className="py-52">
    <Header />
    <Outlet />
  </div>
);

interface Element {
  element: JSX.Element
}


const ProtectedRoute: React.FC<Element> = ({ element }) => {
  const { user } = useUser();
  return user ? element : <Navigate to='/' replace />
}

const appRoute = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/myads',
        element: <ProtectedRoute element={<MyADS />} />,
      },
      {
        path: '/sell',
        element: <ProtectedRoute element={<AdTemplate />} />
      },
      {
        path: '/item/:id',
        element: <ProtectedRoute element={<AdPage />} />
      }
    ],
  },
]);

const App = () => {
  return (
    <CommonAdsProvider>
      <UserProvider>
        <AdsProvider>
          <RouterProvider router={appRoute} />
        </AdsProvider>
      </UserProvider>
    </CommonAdsProvider>
  );
};

export default App;
