import GeneralInformation from 'components/GeneralInformation';
import ProfessionInformation from 'components/ProfessionInformation';
import RoundedImage from 'components/RoundedImage';
import SectionsLinks from 'components/SectionLinks';
import SocialLinks from 'components/SocialLinks';
import { generalInformation } from 'utils/data';

import { photo } from 'utils/images';

const SideBar = () => (
  <div id='sideBar'>
    <RoundedImage src={photo} alt='Persona' />
    <ProfessionInformation
      profession={generalInformation.profession}
      description={generalInformation.description}
    />
    <SectionsLinks />
    <GeneralInformation
      data={[
        { text: generalInformation.cellphone, svg: null },
        { text: generalInformation.location, svg: null },
      ]}
    />
    <SocialLinks />
  </div>
);
export default SideBar;
