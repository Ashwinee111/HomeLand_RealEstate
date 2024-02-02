import { countryCode } from "../data";

function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name*"
        className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
      />
      <input
        type="text"
        placeholder="Email*"
        className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
      />
      <div className="flex gap-x-2">
        <div className="w-[81px]">
          <select className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm">
            {countryCode.map((ele, i) => {
              return (
                <option key={i} value={ele.code}>
                  {ele.code} - {ele.country}
                </option>
              );
            })}
          </select>
        </div>
        <div className="w-[calc(100%-90px)]">
          <input
            type="number"
            placeholder="Phone*"
            className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
          />
        </div>
      </div>
      <textarea
        placeholder="Message*"
        className="border border-gray-300 focus:border-violet-700 outline-none resize-none rounded w-full p-4 h-36 text-sm text-gray-400 "
        defaultValue="Hello..."
      ></textarea>
      <div>
        <button className="bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition">
          Send message
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
