import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductPage from './pages/Product';
import RootLayout from './pages/Root';
import ProductDetails from './pages/ProductDetails';
import ErrorPage from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {path: "/", element: <HomePage/> },
      {path: "/products", element: <ProductPage /> },
      {path: "/products/:id", element: <ProductDetails />}
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
