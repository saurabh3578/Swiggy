import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.52110&lng=73.85020&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  };

  return (
    <main className="bg-slate-50 py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="mb-8 rounded-3xl bg-white p-6 shadow-sm sm:p-8 md:p-10">
          <div className="space-y-4 text-center sm:text-left">
            <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Discover restaurants near you
            </h1>
            <p className="mx-auto max-w-2xl text-base text-slate-600 sm:mx-0">
              Browse trending restaurants, top-rated dishes, and real-time delivery updates.
            </p>
          </div>
        </section>

        {list.length === 0 ? (
          <div className="rounded-3xl bg-white p-8 text-center text-slate-500 shadow-sm sm:p-10">
            Loading restaurants...
          </div>
        ) : (
          <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {list.map((card) => (
              <RestaurantCard key={card.info.id} props={card} />
            ))}
          </section>
        )}
      </div>
    </main>
  );
};

export default Body;