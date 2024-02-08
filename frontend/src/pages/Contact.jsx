import ContactDetails from "../components/ContactDetails";
import ContactUs from "../components/ContactUs";

function Contact() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center gap-4 pb-[3rem] md:flex-row">
      {/* Contact Details */}
        <div>
          <ContactDetails />
        </div>
        {/* Contact Form */}
        <div className="lg:w-[60%]">
          <ContactUs />
        </div>
      </div>
    </div>
  );
}
export default Contact;
