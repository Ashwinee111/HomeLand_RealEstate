import Image from "../assets/img/house-banner.png";
import Search from "../components/Search";

function Banner() {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row lg:mx-[100px] ">
        <div className="lg:ml-8  flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
            <span className="text-violet-700">Rent</span> Your Dream House With
            Us.
          </h1>
          <p className="max-w-[480px] mb-8">
            Find a variety of properties that suit you very easily Forget all difficulties in finding a residence property for you.
          </p>
        </div>
        {/* Image  */}
        <div className="hidden flex-1 lg:flex justify-end items-end">
          <img src={Image} alt="hero-Image" className="rounded-lg" />
        </div>
      </div>
      <Search />
    </section>
  );
}
export default Banner;
