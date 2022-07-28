import GeneralInformation from 'components/GeneralInformation';
import ProfessionInformation from 'components/ProfessionInformation';
import RoundedImage from 'components/RoundedImage';
import SectionsLinks from 'components/SectionLinks';
import SocialLinks from 'components/SocialLinks';
import { generalInformation } from 'utils/data';

import { photo } from 'utils/images';

const SideBar = () => (
  <div className='h-screen sticky top-0 overflow-hidden w-60 text-center'>
    <div className='fex flex-col pr-6 pl-6'>
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
  </div>
);
export default SideBar;
