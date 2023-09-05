import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Products from './pages/products/Products';
import Users from './pages/users/Users';
import './styles/global.scss';

function App() {
  // Layout
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            {/* render dinamically children components */}
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  // navigation
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/users',
          element: <Users />,
        },
        {
          path: '/products',
          element: <Products />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
