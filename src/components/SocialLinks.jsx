import ContactButton from 'components/ContactButton';
import { socialLinks } from 'utils/data';

const SocialLinks = () => (
  <div className='bottom-0 absolute left-0 w-full justify-items-center'>
    <hr className='m-0' />
    {socialLinks.map((socialLink) => (
      <ContactButton text={socialLink.name} target={socialLink.link} />
    ))}
  </div>
);

export default SocialLinks;
