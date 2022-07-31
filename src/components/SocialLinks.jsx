import SocialLink from 'components/SocialLink';
import { socialLinks } from 'utils/data';

const SocialLinks = () => (
  <div id='socialLinks' className=''>
    <hr className='m-0' />
    {socialLinks.map((socialLink) => (
      <SocialLink target={socialLink.link} svg={socialLink.svg} />
    ))}
  </div>
);

export default SocialLinks;
