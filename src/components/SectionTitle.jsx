/* eslint-disable react/prop-types */
const SectionTitle = ({ text }) => {
  return (
    <div className='text-center border-b border-gray-200 pb-5 text-sky-600 underline-offset-8'>
      <h2 className='text-3xl font-medium tracking-wider capitalize'>{text}</h2>
    </div>
  );
};
export default SectionTitle;
