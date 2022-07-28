const RoundedImage = ({ alt, src }) => (
  <div className='justify-center'>
    <img src={src} className='rounded-full w-56' alt={alt} />
  </div>
);

export default RoundedImage;
