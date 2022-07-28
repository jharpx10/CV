import { Outlet } from 'react-router-dom';
import Header from 'components/sections/Header';
import SideBar from 'components/sections/Bars/SideBar';

const Layout = () => (
  <div className='flex'>
    <SideBar />
    <div className='flex-col'>
      <Header />
      <main className='relative'>
        <Outlet />
      </main>
    </div>
  </div>
);

export default Layout;
