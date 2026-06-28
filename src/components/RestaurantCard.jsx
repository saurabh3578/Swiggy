import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ props }) => {
  const {
    name,
    cuisines,
    locality,
    areaName,
    cloudinaryImageId,
    avgRating,
    costForTwo,
    sla,
    aggregatedDiscountInfoV3,
  } = props.info;

  return (
    <div className="w-full max-w-sm rounded-xl overflow-hidden bg-white shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
      <div className="relative">
        <img
          className="w-full h-56 object-cover sm:h-48"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
        />

        {aggregatedDiscountInfoV3 && (
          <div className="absolute bottom-3 left-3 rounded-md bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
            {aggregatedDiscountInfoV3.header} {aggregatedDiscountInfoV3.subHeader}
          </div>
        )}
      </div>

      <div className="p-4">
        <h2 className="text-lg font-bold text-slate-900 truncate">{name}</h2>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-sm">
          <span className="rounded-md bg-emerald-600 px-2 py-1 text-white">⭐ {avgRating}</span>
          <span className="text-gray-600 font-medium">⏱️ {sla?.slaString}</span>
        </div>

        <p className="mt-3 text-sm text-gray-500 truncate">{cuisines.join(", ")}</p>
        <p className="mt-2 text-sm text-gray-500">📍 {locality}, {areaName}</p>
        <p className="mt-4 text-base font-semibold text-slate-700">💰 {costForTwo}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;