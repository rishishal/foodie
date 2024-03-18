import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constans";
import Accordion from "../components/Accordion";
import { IoTimerSharp } from "react-icons/io5";
import { TbCoinRupee } from "react-icons/tb";
import { MdOutlineStar } from "react-icons/md";

const Menu = () => {
  const [menu, setMenu] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(MENU_API + id);
        const response = await res.json();
        setMenu(response?.data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };
    fetchData();
  }, [id]);

  if (!menu) {
    return <div>Loading...</div>;
  }

  const {
    name,
    areaName,
    costForTwoMessage,
    cuisines,
    avgRating,
    feeDetails,
    totalRatingsString,
    sla,
  } = menu?.cards[0]?.card?.card?.info;

  const { cards } = menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;

  //filtering Itemcategory Data

  const categories = cards.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <>
      <div className='flex justify-evenly items-center mt-8 font-Mulish'>
        <div>
          <h3 className='text-2xl font-bold mb-2 capitalize text-left'>
            {name}
          </h3>
          <p className='text-sm text-left text-gray-600 h-5 overflow-hidden text-ellipsis whitespace-nowrap mb-2'>
            {cuisines.join(", ")}
          </p>
          <p className='text-sm text-left text-gray-600 h-5 overflow-hidden text-ellipsis whitespace-nowrap mb-3'>
            {areaName}, {sla.lastMileTravelString}
          </p>
          <div className='flex gap-1 mb-4 text-sm text-gray-600'>
            <img
              src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/v1648635511/Delivery_fee_new_cjxumu'
              alt=''
            />
            <span>{feeDetails.message}</span>
          </div>

          <div className='flex gap-6 mb-4'>
            <div className='flex items-center gap-3 text-gray-600 text-sm font-black'>
              <IoTimerSharp className='h-6 w-6' />
              <span>
                {sla.minDeliveryTime}-{sla.maxDeliveryTime} MINS
              </span>
            </div>
            <div className='flex items-center gap-3 text-gray-600 text-sm font-black'>
              <TbCoinRupee className='h-6 w-6' />
              <span>{costForTwoMessage}</span>
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='flex justify-center items-center text-green-600 font-bold mb-8 pb-10 border-b-1 border-[#e9e9eb]'>
            <MdOutlineStar className='w-5 h-5 -mt-0.5' />
            <p className='font-extrabold text-lg'>{avgRating}</p>
          </div>
          <div className='relative -top-14 border border-[#e9e9eb] shadow-md rounded-lg text-center p-2 max-w-24'>
            <span className=' text-xs text-gray-500 tracking-tighter'>
              {totalRatingsString}
            </span>
          </div>
        </div>
      </div>
      <Accordion categories={categories} />
    </>
  );
};

export default Menu;
