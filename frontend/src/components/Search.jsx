import CountryDropdown from "./CountryDropdown";
import PropertyDropdown from "./PropertyDropdown";
import PriceRangeDropdown from "./PriceRangeDropdown";
import { RiSearch2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { setHouses, setLoading } from "../redux/slices/HouseSlice";
import { housesData } from "../data";

function Search() {
  const { country, property, price } = useSelector((state) => state.HouseSlice);
  // console.log("oldHouse",houses);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(setLoading(true));

    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };

    const minPrice = parseInt(price.split(" ")[0]);
    const maxPrice = parseInt(price.split(" ")[2]);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }

      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }

      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }

      if (isDefault(property) && isDefault(country) && isDefault(price)) {
        return house.type === property;
      }

      if (isDefault(price) && isDefault(country) && isDefault(property)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }

      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }

      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }

      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }
    });

    // console.log("newHouse",newHouses);
    setTimeout(() => {
      return (
        newHouses.length < 1
          ? dispatch(setHouses([]))
          : dispatch(setHouses(newHouses)),
        dispatch(setLoading(false))
      );
    }, 1000);
  }

  return (
    <div className="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg">
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button
        className="bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg"
        onClick={handleClick}
      >
        <RiSearch2Line />
      </button>
    </div>
  );
}
export default Search;
