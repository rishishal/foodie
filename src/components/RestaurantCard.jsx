import { Restaurant_IMG } from "../utils/constans";

import { MdOutlineStar } from "react-icons/md";
import { PiTimerBold } from "react-icons/pi";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cloudinaryImageId,
    areaName,
    costForTwo,
    cuisines,
    avgRating,
    sla,
    aggregatedDiscountInfoV3,
  } = resData;
  return (
    <div className="relative flex flex-col mt-6 shadow-xl rounded-xl w-96 mb-9">
      <div className="relative h-56 mx-4 -mt-6 overflow-hidden  rounded-xl">
        <img
          className="object-cover w-[100%] h-[100%]"
          src={Restaurant_IMG + cloudinaryImageId}
          alt="card-image"
        />
      </div>
      <div className="absolute -top-5  left-3">
        <p className=" font-sans text-xs leading-4 px-1 bg-green-500 text-white font-normal rounded-sm max-w-[100%] mb-0">
          {aggregatedDiscountInfoV3?.header
            ? `${aggregatedDiscountInfoV3.header}${
                aggregatedDiscountInfoV3.subHeader
                  ? ` ${aggregatedDiscountInfoV3.subHeader}`
                  : ""
              }`
            : "Flat Rs. 49 OFF"}
        </p>
      </div>
      <div className="w-[90%] flex justify-between">
        <div className="ml-5 text-left">
          <h5 className="mt-2 text-md font-semibold tracking-normal">{name}</h5>
        </div>
        <div className=" my-1 flex items-center justify-center w-10 h-5 border-green-600 bg-green-600 text-slate-200 font-normal rounded-md">
          <p className="m-0.5 font-bold text-xs font-sans">{avgRating}</p>
          <MdOutlineStar className="font-bold h-4" />
        </div>
      </div>

      <div className="flex gap-32">
        <div className="ml-5">
          <p className="w-36 font-Mulish text-sm text-left font-normal leading-relaxed whitespace-nowrap overflow-hidden text-ellipsis">
            {cuisines.join(", ").trim()}
          </p>
          <p className="text-sm font-medium text-left font-sans">{areaName}</p>
        </div>
        <div>
          <h5 className="text-sm font-medium text-left font-sans">
            {costForTwo}
          </h5>
          <div className="flex mt-2">
            <PiTimerBold className="h-4" />
            <p className="text-xs font-medium font-sans pb-3">
              {sla.deliveryTime}
              min
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
