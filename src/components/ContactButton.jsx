const ContactButton = ({ text, target }) => (
  <div className='btn btn-purple'>
    <a href={target}>{text}</a>
  </div>
);
export default ContactButton;
