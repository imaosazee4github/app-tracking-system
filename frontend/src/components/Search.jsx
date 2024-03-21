// import {useState}from 'react'

// function Search() {
//     const[value, setValue] = useState('')
//   return (
//     <div>
//         <form className='' onSubmit={handleSearch}>
//             <input type='text' 
//             value={value} 
//             placeholder='Search' 
//             className='w-80 h-10 rounded-md' 
//             onChange={(e) => setValue(e.target.value)}/>
//             <button className='bg-blue-600 text-white py-1 px-3 rounded-md'>Search</button>
//         </form>
//     </div>
//     // <div className='text-white w-80 font-bold pd-10px'>Search</div>

//   )
// }

// export default Search

import { useState } from 'react';

function Search() {
  const [value, setValue] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Perform search for:', value);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type='text'
          value={value}
          placeholder='Search Jobs....'
          className='w-80 h-12 px-3 border-none'
          onChange={(e) => setValue(e.target.value)}
        />
        <button className='bg-blue-600 text-white py-1 px-3 w-20 h-12 border-none' type='submit'>
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
