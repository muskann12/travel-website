import React from 'react';

const SearchBox = () => {
  return (
    <div className='bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
    items-center justify-center gap-[2rem] mt-[3rem] w-[80%] mx-auto shadow-lg relative z-30'>
      {/* Location Input */}
      <div>
        <label className="block text-gray-700 font-bold mb-2">Location</label>
        <input
          type="text"
          placeholder="Where to?"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Date Input */}
      <div>
        <label className="block text-gray-700 font-bold mb-2">Date</label>
        <input
          type="date"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* People Input */}
      <div>
        <label className="block text-gray-700 font-bold mb-2">People</label>
        <input
          type="number"
          placeholder="Number of people"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Search Button */}
      <div className='flex justify-center items-center'>
        <button className="px-8 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
