import { generalInformation } from 'utils/data';

const Header = () => (
  <header>
    <span id='header'>{generalInformation.fullName}</span>
  </header>
);
export default Header;
