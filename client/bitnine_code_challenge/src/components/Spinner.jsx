const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <svg
        className="animate-spin h-6 w-6 text-blue-500" // Adjusted size classes
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75 text-white"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.88 3.182 8.018l2.01-2.01zM16 2.009c-4.418 0-8 3.582-8 8.001h2c0-3.314 2.686-6 6-6v-2zM21.818 7.993c-1.183-4.882-5.178-8.877-10.06-10.06v2c3.313 1.182 5.999 3.868 7.18 7.18h2z"
        ></path>
      </svg>
    </div>
  );
};

export default Spinner;
