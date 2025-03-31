import React from 'react';

const Pagination = ({ page, totalPages, goToPage }) => {
  return (
    <div className="flex justify-center mt-6 space-x-2">
      <button 
        onClick={() => goToPage(page - 1)} 
        disabled={page === 1} 
        className={`px-4 py-2 rounded ${page === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-800 text-white hover:bg-blue-600'}`}
      >
        Previous
      </button>

      {[...Array(totalPages).keys()].map((num) => (
        <button
          key={num + 1}
          onClick={() => goToPage(num + 1)}
          className={`px-4 py-2 rounded ${page === num + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          {num + 1}
        </button>
      ))}

      <button 
        onClick={() => goToPage(page + 1)} 
        disabled={page === totalPages} 
        className={`px-4 py-2 rounded ${page === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-800 text-white hover:bg-blue-600'}`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
