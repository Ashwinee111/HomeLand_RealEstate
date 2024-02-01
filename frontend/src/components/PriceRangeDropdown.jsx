import { useState } from "react";
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { setPrice } from "../redux/slices/HouseSlice";

function PriceRangeDropdown() {
  const { price } = useSelector((state) => state.HouseSlice);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const prices = [
    {value: "Price range (any)"},
    {value: "100000 - 130000"},
    {value: "130000 - 160000"},
    {value: "160000 - 190000"},
    {value: "190000 - 220000"},
    {value: "10000 - 30000"},
    {value: "30000 - 60000"},
  ]

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        className="dropdown-btn w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <RiWallet3Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{price}</div>
          <div className="text-[13px]">Choose price range</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {prices.map((price, index) => (
          <Menu.Item
            as="li"
            key={index}
            className="cursor-pointer hover:text-violet-700 transition"
            onClick={() => dispatch(setPrice(price.value))}
          >
            {price.value}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}
export default PriceRangeDropdown