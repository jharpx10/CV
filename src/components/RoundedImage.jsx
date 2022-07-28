const RoundedImage = ({ alt, src }) => (
  <div className=''>
    <img src={src} className='rounded-full w-56' alt={alt} />
  </div>
);

export default RoundedImage;
