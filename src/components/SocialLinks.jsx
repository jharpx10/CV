import ContactButton from 'components/ContactButton';
import { socialLinks } from 'utils/data';

const SocialLinks = () => (
  <div className='text-center bottom-0 absolute w-full'>
    <hr className='m-0' />
    {socialLinks.map((socialLink) => (
      <ContactButton text={socialLink.name} target={socialLink.link} />
    ))}
  </div>
);

export default SocialLinks;
