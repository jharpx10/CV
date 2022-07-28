import ContactButton from 'components/ContactButton';
import { socialLinks } from 'utils/data';

const SocialLinks = () => (
  <div id='socialLinks'>
    <hr className='m-0' />
    {socialLinks.map((socialLink) => (
      <ContactButton text={socialLink.name} target={socialLink.link} />
    ))}
  </div>
);

export default SocialLinks;
