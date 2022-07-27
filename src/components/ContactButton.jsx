const ContactButton = ({ text, target }) => (
  <div className='rounded-md bg-white shadow-xs'>
    <a href={target}>{text}</a>
  </div>
);
export default ContactButton;
