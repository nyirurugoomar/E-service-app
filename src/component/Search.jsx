import React from 'react';
// import Scroll from './Scroll';
import OurService from './OurService';

function Search() {
  

//   function searchList() {
//     return (
//       <Scroll>
//         < SearchList  filteredPersons={filteredPersons} />
//       </Scroll>
//     );
//   }

  return (
    <>
    <div className='h-full w-full mb-40'>
    <section className="md:w-screen h-full p-40 bg-[#08AEEA]">
      <div className="">
        <h2 className="text-center text-white text-3xl mb-4 font-bold">Welcome</h2>
      </div>
      <div className="">
        <input 
          className="p-4 md:w-full  rounded-[20px] border-[0px] focus:outline-none "
          type = "search" 
          placeholder = "Search Services....." 
          
        />
      </div>
      
      
    </section>
    

    <div className='h-full w-screen mb-40'>
        <div className='text-center'>
            <h1 className='pt-4 text-3xl font-[500]'>Services</h1>
        </div>
      
        <div className=''>
        <OurService/>
        </div>
    </div>
        
        
    </div>
    </>
  );
}

export default Search;