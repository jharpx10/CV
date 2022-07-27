import ContactButton from 'components/ContactButton';

const Footer = () => (
  <div className='footer'>
    <ContactButton text='Correo' target='mailto:jharpx10@gmail.com' />
    <ContactButton text='Github' target='https://github.com/jharpx10' />
    <ContactButton
      text='LinkedIN'
      target='https://co.linkedin.com/in/juan-alejandro-rios-perez-226383150?trk=people-guest_people_search-card'
    />
  </div>
);

export default Footer;
