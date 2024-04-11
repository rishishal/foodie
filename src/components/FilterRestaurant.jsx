import { useState } from "react";
import FastDeliveryRestaurant from "./FastDeliveryRestaurant";
import PureVegRestaurants from "./PureVegRestaurants";
import HighRatedRestaurant from "./HighRatedRestaurant";
import Allrestaurants from "./Allrestaurants";

const FilterRestaurant = ({ responseData }) => {
  const [HighRatedRes, setHighRatedRes] = useState(false);
  const [showVeg, setShowVeg] = useState(false);
  const [fastDeliveryRestaurant, setFastDeliveryRestaurant] = useState(false);
  const [FilterCount, setFilterCount] = useState(null);

  return (
    <>
      <div>
        <div className="mt-10">
          <h1 className=" text-2xl text-left font-bold font-Raleway">
            {responseData?.data?.cards[2].card.card.title}
          </h1>
        </div>
        <div className="flex">
          <div className="mt-3">
            <button
              className={
                FilterCount
                  ? "border border-orange-400 text-black bg-orange-400 rounded-2xl p-1 w-32 ml-2 m-2"
                  : "border border-slate-300 text-black bg-white  rounded-2xl p-1 w-32 ml-2 m-2"
              }
            >
              Filters {FilterCount}
            </button>
            <button
              className={
                fastDeliveryRestaurant
                  ? "border border-green-500 text-black bg-green-500  rounded-2xl p-1 w-32 ml-2"
                  : "border border-slate-300 text-black bg-white  rounded-2xl p-1 w-32 ml-2"
              }
              onClick={() => {
                setFastDeliveryRestaurant(!fastDeliveryRestaurant);
                fastDeliveryRestaurant
                  ? setFilterCount(() => FilterCount - 1)
                  : setFilterCount(() => FilterCount + 1);
              }}
            >
              Fast delivery
            </button>
            <button
              className={
                HighRatedRes
                  ? "border border-green-500 text-black bg-green-500  rounded-2xl p-1 w-32 ml-2"
                  : "border border-slate-300 text-black bg-white  rounded-2xl p-1 w-32 ml-2"
              }
              onClick={() => {
                setHighRatedRes(!HighRatedRes);
                HighRatedRes
                  ? setFilterCount(() => FilterCount - 1)
                  : setFilterCount(() => FilterCount + 1);
              }}
            >
              Ratings 4.0+
            </button>

            <button
              className={
                showVeg
                  ? "border border-green-500 text-black bg-green-500  rounded-2xl p-1 w-32 ml-2"
                  : "border border-slate-300 text-black bg-white  rounded-2xl p-1 w-32 ml-2"
              }
              onClick={() => {
                setShowVeg(!showVeg);
                setFilterCount(() => FilterCount + 1);
                showVeg
                  ? setFilterCount(() => FilterCount - 1)
                  : setFilterCount(() => FilterCount + 1);
              }}
            >
              Pure veg
            </button>
          </div>
        </div>
        <div className="mx-auto md:flex flex-wrap md:mt-3">
          {fastDeliveryRestaurant ? (
            <FastDeliveryRestaurant />
          ) : " " && showVeg ? (
            <PureVegRestaurants />
          ) : " " && HighRatedRes ? (
            <HighRatedRestaurant />
          ) : (
            " " && <Allrestaurants />
          )}
        </div>
      </div>
    </>
  );
};

export default FilterRestaurant;
