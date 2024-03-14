import { MEDIA_ASSETS } from "../utils/constans";

const Home = ({ Data }) => {
  return (
    <>
      <div className='flex justify-between mt-10'>
        <div>
          <h1 className='text-2xl font-bold '>Whats on your mind?</h1>
        </div>
        <div>carosel</div>
      </div>
      <div className='flex'>
        <div className='flex w-36 mt-4'>
          {Data?.cards[0]?.card?.card?.imageGridCards.info.map((bannerImg) => (
            <img
              key={bannerImg?.id}
              src={MEDIA_ASSETS + bannerImg?.imageId}
              alt='IMG'
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
