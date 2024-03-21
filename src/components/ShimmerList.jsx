const ShimmerList = () => {
  const shimmerItems = Array.from({ length: 10 }, (_, index) => index + 1);
  return (
    <>
      <div className='flex justify-center items-center mt-16'>
        <div className='flex justify-between gap-96 bg-gradient-to-r from-[ #ddd] to-[#e8e8e8] animate-pulse'>
          <div className='max-w-64'>
            <div className='h-7 bg-[#ddd] rounded-full w-72 mb-6'></div>
            <div className='h-3 bg-[#ddd] rounded-full max-w-40 mb-2.5'></div>
            <div className='h-3 bg-[#ddd] rounded-full max-w-40 mb-5'></div>
            <div className='h-3 bg-[#ddd] rounded-full max-w-[330px] mb-5'></div>
            <div className='flex justify-evenly'>
              <div className='h-7 bg-[#ddd] rounded-full w-24 mb-2.5'></div>
              <div className='h-7 bg-[#ddd] rounded-full w-24 mb-2.5'></div>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <div className='h-16 w-20 bg-[#ddd] rounded-2xl mb-2.5'></div>
          </div>
        </div>
      </div>

      <div className='flex justify-center flex-col w-6/12 m-auto mt-32'>
        {shimmerItems.map((item) => (
          <div
            key={item}
            className='bg-gradient-to-r from-[ #ddd] to-[#e8e8e8] animate-pulse'
          >
            <div className='flex justify-between'>
              <div>
                <div className='h-6 bg-[#ddd] rounded-full w-56 mb-5'></div>
                <div className='h-3 bg-[#ddd] rounded-full max-w-40 mb-2.5'></div>
                <div className='h-3 bg-[#ddd] rounded-full max-w-40 mb-5'></div>
              </div>
              <div className='h-36 w-40 bg-[#ddd] rounded-2xl mb-2.5'></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShimmerList;
