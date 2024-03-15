import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import RestaurantCard from "../components/RestaurantCard";

const Home = ({ Data }) => {
  const link = Data?.cards[0]?.card?.card?.imageGridCards.info;
  const restaurants =
    Data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  return (
    <>
      <Hero />
      <Carousel links={link} />
      <div className='flex justify-between mt-10'>
        <h1 className=' text-2xl font-bold'>
          {Data?.cards[2].card.card.title}
        </h1>
      </div>
      <div className='flex flex-wrap mt-10'>
        {restaurants?.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </>
  );
};

export default Home;
