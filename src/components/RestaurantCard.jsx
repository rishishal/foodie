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
    <div className="w-80 md:w-96 m-auto md:m-0 mb-5 duration-100 font-Mulish shadow-xl rounded-lg">
      <div className="p-3">
        <span className="block relative cursor-pointer no-underline">
          <div className="rounded-lg cursor-pointer relative max-w-full w-96 h-60 overflow-hidden">
            <img
              className="object-cover w-[100%] h-[100%] rounded-lg "
              src={Restaurant_IMG + cloudinaryImageId}
              alt="card-image"
            />
          </div>

          <div className="absolute top-3">
            <p className="text-xs leading-4 px-2 py-0.5 bg-green-500 text-white font-normal rounded-e-md max-w-[100%] mb-0">
              {aggregatedDiscountInfoV3?.header
                ? `${aggregatedDiscountInfoV3.header}${
                    aggregatedDiscountInfoV3.subHeader
                      ? ` ${aggregatedDiscountInfoV3.subHeader}`
                      : ""
                  }`
                : "Flat Rs. 49 OFF"}
            </p>
          </div>
        </span>
        <span className="px-1 block relative cursor-pointer no-underline">
          <div className="flex justify-between text-sm leading-4">
            <h4 className="leading-3 font-medium text-left text-base mt-2 mb-1.5 max-w-[80%] text-black">
              {name}
            </h4>

            <div className=" my-2 flex items-center justify-center w-10 h-5 border-green-600 bg-green-600 text-slate-200 font-normal rounded-md">
              <p className="font-semibold text-xs">{avgRating}</p>
              <MdOutlineStar className="font-bold h-4" />
            </div>
          </div>
        </span>

        <div className="flex justify-between text-sm leading-4 px-1 ">
          <p className="w-3/5 text-sm text-left font-normal leading-relaxed whitespace-nowrap overflow-hidden text-ellipsis">
            {cuisines.join(", ")}
          </p>
          <h5 className="w-2/6 p-0 leading-relaxed text-sm font-semibold m-0 text-right overflow-hidden truncate whitespace-nowrap">
            {costForTwo}
          </h5>
        </div>

        <div className="flex justify-between mt-2 items-center leading-4 px-1 ">
          <p className="font-medium text-left text-sm">{areaName}</p>
          <div className="flex gap-0.5 items-center">
            <PiTimerBold className="h-4" />
            <p className="text-xs font-medium">
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
