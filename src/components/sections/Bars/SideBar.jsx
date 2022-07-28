import GeneralInformation from 'components/GeneralInformation';
import ProfessionInformation from 'components/ProfessionInformation';
import RoundedImage from 'components/RoundedImage';
import SectionsLinks from 'components/SectionLinks';
import SocialLinks from 'components/SocialLinks';
import { generalInformation } from 'utils/data';

import { photo } from 'utils/images';

const SideBar = () => (
  <div className='h-screen sticky top-0 overflow-hidden w-60'>
    <div className='pt-4 pb-2 px-6'>
      <div className='fex flex-col'>
        <RoundedImage src={photo} alt='Persona' />
        <ProfessionInformation
          profession={generalInformation.profession}
          description={generalInformation.description}
        />
        <GeneralInformation
          data={[
            { text: generalInformation.cellphone, svg: null },
            { text: generalInformation.location, svg: null },
          ]}
        />
      </div>
    </div>
    <SectionsLinks />
    <SocialLinks />
  </div>
);
export default SideBar;
