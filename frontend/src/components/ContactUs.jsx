import ContactForm from "./ContactForm";

function ContactUs() {
  return (
    <div className="border border-richblack-600 rounded-xl p-7 lg:p-14 flex gap-3 flex-col">
      <h1 className="text-4xl leading-10 font-semibold text-black">
        Got a Idea? Find perfect place to live life.
      </h1>
      <p className="text-violet-700 text-lg">
        Tell us more about yourself and what you&apos;re got in mind.
      </p>
      <div className="mt-7">
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactUs;
