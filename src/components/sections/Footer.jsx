import ContactButton from 'components/ContactButton';
import { socialLinks } from 'utils/constants';

const Footer = () => (
  <div className='footer'>
    {socialLinks.map((socialLink) => (
      <ContactButton text={socialLink.name} target={socialLink.link} />
    ))}
  </div>
);

export default Footer;
