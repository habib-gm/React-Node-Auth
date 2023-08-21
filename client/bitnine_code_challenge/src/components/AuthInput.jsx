import PropTypes from 'prop-types';
import Icon from '@mdi/react';


const AuthInput = ({ value, value2 = null, valueName, valueError, handleChange, validateValue, label, type, placeholder, icon }) => {
  const validate = (e) => {
    return value2 !== null ? validateValue(e.target.value, value2, handleChange) : validateValue(e.target.value, handleChange)
  }
  return (
    <div className="content-center">
      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200 relative">
        {label}
        {valueError == null && (
          <div className="absolute right-0 top-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-500"
              fill="none"
              viewBox="0 0 30 30"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
        )}
      </label>
      <div className='flex'>
      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><Icon path={icon}
        size={1}
        color="gray"/></div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {handleChange(valueName, e.target.value); validate(e)}}
        onBlur={(e) => validate(e)}
        // className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
        // className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
        // focus:bg-white focus:outline-none"
        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
      />
      </div>
        <div className="block text-xs text-red-500 dark:text-red-500 w-full mt-1 ">
      {valueError && (
          <span>{valueError}</span>
          )}
          <span className='text-white text-xs'>*</span>
          </div>
      </div>
  );
};

AuthInput.propTypes = {
    value: PropTypes.string.isRequired,
    value2: PropTypes.string,
    valueError: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    validateValue: PropTypes.func.isRequired,
    valueName: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
  };

export default AuthInput;
