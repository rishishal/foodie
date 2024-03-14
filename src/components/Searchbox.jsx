import { Search } from "lucide-react";

const Searchbox = () => {
  return (
    <form className='max-w-sm'>
      <label
        htmlFor='default-search'
        className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
      >
        Search
      </label>
      <div className='relative'>
        <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
          <Search />
        </div>
        <input
          type='search'
          id='default-search'
          className='block w-full  p-4 ps-10 text-sm text-gray-900 border border-black rounded-lg'
          placeholder='Search Food & Reastaurant'
          required
        />
        <button
          type='submit'
          className='text-white absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 bg-black'
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Searchbox;
