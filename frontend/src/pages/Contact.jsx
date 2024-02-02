import ContactUs from "../components/ContactUs"

function Contact() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center pb-[3rem]">
        {/* Contact Form */}
        <div className="lg:w-[60%]">
          <ContactUs />
        </div>
      </div>
    </div>
  );
}
export default Contact