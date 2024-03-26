export const Shimmer = () => {
  const shimmerItems = Array.from({ length: 20 }, (_, index) => index + 1);

  return (
    <div className='flex my-5 gap-2 flex-wrap mt-6'>
      {shimmerItems.map((item) => (
        <div
          key={item}
          className='relative overflow-hidden rounded-md w-96 h-[400px] mr-4 mb-5 bg-gradient-to-r to-[#e8e8e8] animate-pulse'
        >
          <div className='w-full h-3/4 bg-[#ddd]'></div>
          <div className='p-3'></div>
          <div className='flex justify-between'>
            <div>
              <div className='h-2.5 bg-[#ddd] rounded-full w-48 mb-4'></div>
              <div className='h-2.5 bg-[#ddd] rounded-full w-48 mb-4'></div>
            </div>
            <div className='h-6 bg-[#ddd] rounded-md w-8 mb-4'></div>
          </div>

          <div className='h-3 bg-[#ddd] rounded-full max-w-[360px] mb-2.5'></div>
          <div className='h-3 bg-[#ddd] rounded-full mb-2.5'></div>
          <div className='h-3 bg-[#ddd] rounded-full max-w-[330px] mb-2.5'></div>
          <div className='h-3 bg-[#ddd] rounded-full max-w-[300px] mb-2.5'></div>
          <div className='h-3 bg-[#ddd] rounded-full max-w-[360px]'></div>
        </div>
      ))}
    </div>
  );
};

export const ShimmerHeading = () => {
  return (
    <div
      role='status'
      className='max-w-sm bg-gradient-to-r from-[ #ddd] to-[#e8e8e8] animate-pulse w-2/3 mt-20'
    >
      <div className='h-10 rounded-lg bg-[#ddd] mb-4'></div>
    </div>
  );
};

export const CircleShimmer = () => {
  const shimmerItems = Array.from({ length: 6 }, (_, index) => index + 1);
  return (
    <div
      role='status'
      className='flex flex-wrap bg-gradient-to-r from-[ #ddd] to-[#e8e8e8] animate-pulse'
    >
      {shimmerItems.map((item) => (
        <div
          key={item}
          className='h-40 w-40 mx-4 rounded-full bg-[#ddd] mb-4'
        ></div>
      ))}
    </div>
  );
};
