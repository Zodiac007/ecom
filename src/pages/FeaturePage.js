import { products } from "../data";
import Card from "../components/common/Card";
import Filter from "../components/assests/icons/filter";
import Sort from "../components/assests/icons/sort";
import CustomButton from "../components/common/CustomButton";

import { Link } from "react-router-dom";

export default function FeaturePage({ picture }) {
  return (
    <div className="pt-2 lg:pt-8">
      <h2 className="text-[#8688be] text-4xl font-bold">Featured</h2>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-[#b2b2b2]">18 items listed</p>
        </div>
        <div className="flex">
          <div className="flex items-center pr-8">
            <Sort /> <span className="text-sm pl-1">Sort</span>
          </div>
          <div className="flex items-center ">
            <Filter /> <span className="text-sm pl-1">Filter</span>
          </div>
        </div>
      </div>

      <div className="mt-6 mb-28 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
        {products.map((img) => (
          <Card key={img.id} picture={img} />
        ))}
      </div>
      <Link to="/cart">
        <CustomButton text="Buy Now" />
      </Link>
    </div>
  );
}
