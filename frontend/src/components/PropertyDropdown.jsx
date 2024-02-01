import { useEffect, useState } from "react";
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { setProperties, setProperty } from "../redux/slices/HouseSlice";

function PropertyDropdown() {
  const { houses, property, properties } = useSelector((state) => state.HouseSlice);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });
    const uniqueProperties = ["Property type (any)", ...new Set(allProperties)]; // remove duplicates
    dispatch(setProperties(uniqueProperties));
  }, []);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        className="dropdown-btn w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <RiHome5Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">
            {property}
          </div>
          <div className="text-[13px]">Select your place</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {properties.map((property, index) => (
          <Menu.Item
            as="li"
            key={index}
            className="cursor-pointer hover:text-violet-700 transition"
            onClick={() => dispatch(setProperty(property))}
          >
            {property}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}
export default PropertyDropdown;
