import { Outlet } from 'react-router-dom';
import Footer from 'components/sections/Footer';
import Header from 'components/sections/Header';

const Layout = () => (
  <div>
    <Header />
    <Outlet />
    <Footer />
  </div>
);

export default Layout;
