import { useSelector } from "react-redux";
import House from "./House";
import { ImSpinner2 } from "react-icons/im";
import { Link } from "react-router-dom";

function HouseList() {
  const { houses, loading } = useSelector((state) => state.HouseSlice);

  if (loading) {
    return (
      <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-[200px]" />
    );
  }

  if (houses.length < 1) {
    return (
      <div className="text-center text-3xl text-gray-400 mt-48">Sorry,Nothing Found.</div>
    );
  }

  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {houses.map((house, index) => (
            <Link key={index} to={`/property/${house.id}`}>
              <House house={house} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
export default HouseList;
