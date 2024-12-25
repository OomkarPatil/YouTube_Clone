import propTypes from 'prop-types';
import { FaYoutube } from 'react-icons/fa6';

const AuthHeader = ({label, title}) => {
  return (
    <div className='flex flex-col w-full gap-y-4 items-center justify-center'>
      <div className='flex gap-x-2 items-center justify-center'>
      <FaYoutube className="text-[#FF0000] text-[34px] " />
      <h1 className='text-3xl font-oswald font-semibold'>{title}</h1>
      </div>
      <p className='text-muted-foreground text-sm'>{label}</p>
    </div>
  )
};

AuthHeader.propTypes = {
  label: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
};

export default AuthHeader;