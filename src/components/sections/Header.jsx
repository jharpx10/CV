import { generalInformation } from 'utils/data';

const Header = () => (
  <header className='sticky top-0 z-10 mt-10 mb-6 pb-2 pt-10 bg-white text-center'>
    {generalInformation.fullName}
  </header>
);
export default Header;
