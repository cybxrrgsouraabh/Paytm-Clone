export const ButtonComponent = ({ label, onClick }) => {
  return (
    <div className="w-[100%] flex justify-center mt-3">
      <button
        type="button"
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none 
                focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 
                me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700
                dark:border-gray-700 w-[80%] transition ease-in-out hover:scale-105"
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};
