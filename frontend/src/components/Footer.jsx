import { BiBuildingHouse } from "react-icons/bi";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { NavLink } from "react-router-dom";

function Footer() {

  const fullYear = new Date()
  const year = fullYear.getFullYear()

  return (
    <div className="container mx-auto">
      <footer>
        <div className="flex flex-wrap gap-2 pb-5">
          <div className="flex-1 basis-[10rem]">
            {/* Logo */}
            <NavLink to={"/"}>
              <div className="flex items-center">
                <BiBuildingHouse size={35} color="#7f56d9" />
                <h2 className="text-2xl font-semibold">HomeLand</h2>
              </div>
            </NavLink>
            <div className="mt-3">
              <p className="text-gray-600 text-[15px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="gap-4 flex my-4">
                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FiFacebook color="#4267B2"/>
                </div>

                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FaTwitter color="#1DA1F2"/>
                </div>

                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FaInstagram color="#E4405F"/>
                </div>

                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FaLinkedin color="#0077b5"/>
                </div>
              </div>
              <p className="text-gray-600 text-[15px]">© {year} All rights reserved.</p>
            </div>
          </div>

          <div className="flex-1 basis-[10rem]">
            <h2 className="text-lg font-semibold max-w-[260px]">Services</h2>
            <ul>
              <li className="my-2 text-gray-600 text-[15px]">
                <a href="#"> Order Tracking</a>
              </li>
              <li className="my-2 text-gray-600 text-[15px]">
                <a href="#">Whislist</a>
              </li>
              <li className="my-2 text-gray-600 text-[15px]">
                <a href="#">Terms of use</a>
              </li>
              <li className="my-2 text-gray-600 text-[15px]">
                <a href="#">Contact support</a>
              </li>
            </ul>
          </div>

          {/* <div className="flex-1 basis-[10rem]">
            <h2 className="text-lg font-semibold max-w-[260px]">Quick Links</h2>
            <ul>
              <li className="my-2 text-gray-600 text-[15px]">
                <a href="#"> About Us</a>
              </li>
              <li className="my-2 text-gray-600 text-[15px]">
                <a href="#">Services</a>
              </li>
              <li className="my-2 text-gray-600 text-[15px]">
                <a href="#">Blog</a>
              </li>
              <li className="my-2 text-gray-600 text-[15px]">
                <a href="#">Portifolio</a>
              </li>
            </ul>
          </div> */}

          <div className="flex-1 basis-[10rem]">
            <h2 className="text-lg font-semibold max-w-[260px]">Business</h2>
            <ul>
              <li className="my-2 text-gray-600 text-[15px]">
                <a href="#"> Success</a>
              </li>
              <li className="my-2 text-gray-600 text-[15px]">
                <a href="#">Guide</a>
              </li>
              <li className="my-2 text-gray-600 text-[15px]">
                <a href="#">Mission</a>
              </li>
              <li className="my-2 text-gray-600 text-[15px]">
                <a href="#">Terms & Conditions</a>
              </li>
              <li className="my-2 text-gray-600 text-[15px]">
                <a href="#">Pricacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[10rem] text-center md:text-left">
            <h2 className="text-lg font-semibold max-w-[260px]">Subscribe</h2>
            <p className="my-2 text-gray-600 text-[15px]">
              Subscribe to get latest property, blog news from us.
            </p>
            <div className="justify-center my-3 flex-align-center">
              <input
                type="text"
                className="px-4 py-[0.35rem] card-bordered dark:shadow-none outline-none bg-transparent rounded-lg border-dark"
                placeholder="Email Address.."
              />
              <button className="-ml-2 btn btn-primary">subscribe</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
