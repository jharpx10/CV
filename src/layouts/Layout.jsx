import { Outlet } from 'react-router-dom';
import Header from 'components/sections/Header';
import SideBar from 'components/sections/Bars/SideBar';

const Layout = () => (
  <div id='layout'>
    <SideBar />
    <div className='flex-col'>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  </div>
);

export default Layout;
