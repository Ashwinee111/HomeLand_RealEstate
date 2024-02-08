import React from "react";
import * as Icon1 from "react-icons/bi";
import * as Icon3 from "react-icons/hi2";
import * as Icon2 from "react-icons/io5";

const contactDetails = [
  {
    icon: "HiChatBubbleLeftRight",
    heading: "Chat on us",
    description: "Our friendly team is here to help.",
    details: "info@homeland.com",
  },
  {
    icon: "BiWorld",
    heading: "Visit us",
    description: "Come and say hello at our office HQ.",
    details:
      "66329 Thiel Valleys Suite 112, Williamsonmouth-87120, United States",
  },
  {
    icon: "IoCall",
    heading: "Call us",
    description: "Mon - Fri From 8am to 5pm",
    details: "+123 456 7896",
  },
];

function ContactDetails() {
  return (
    <div className="flex flex-col gap-6 border rounded-xl p-4 lg:p-6">
      {contactDetails.map((ele, i) => {
        let Icon = Icon1[ele.icon] || Icon2[ele.icon] || Icon3[ele.icon];
        return (
          <div className="flex flex-col gap-[2px] p-3 text-sm " key={i}>
            <div className="flex flex-row items-center gap-3">
              <Icon size={26} color={"#6D28D9"}/>
              <h2 className="text-xl font-semibold">{ele?.heading}</h2>
            </div>
            <p className="text-base">{ele?.description}</p>
            <p className="text-lg text-violet-700">{ele?.details}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ContactDetails;
