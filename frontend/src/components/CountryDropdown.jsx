import { useEffect, useState } from "react";
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { setCountries, setCountry } from "../redux/slices/HouseSlice";

function CountryDropdown() {
  const { houses, country, countries } = useSelector((state) => state.HouseSlice);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });
    const uniqueCountries = ["Location (any)", ...new Set(allCountries)]; // remove duplicates
    dispatch(setCountries(uniqueCountries));
  }, []);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        className="dropdown-btn w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <RiMapPinLine className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{country}</div>
          <div className="text-[13px]">Select your place</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {countries.map((country, index) => (
          <Menu.Item
            as="li"
            key={index}
            className="cursor-pointer hover:text-violet-700 transition"
            onClick={() => dispatch(setCountry(country))}
          >
            {country}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}
export default CountryDropdown;
