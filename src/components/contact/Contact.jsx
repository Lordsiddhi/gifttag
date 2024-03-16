import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto p-4 my-12">
      <div className="flex flex-col gap-4 gap-x-8 md:flex-row justify-between">
        <div>
          <div>
            <p className="text-gray-700">Contact</p>
            <h2 className="text-5xl font-bold">Reach Us</h2>

            <p className="my-4 text-lg font-bold">Address:-</p>
            <p className="text-lg text-primary font-bold flex flex-row items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M9.375 3a1.875 1.875 0 0 0 0 3.75h1.875v4.5H3.375A1.875 1.875 0 0 1 1.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0 1 12 2.753a3.375 3.375 0 0 1 5.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 1 0-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3ZM11.25 12.75H3v6.75a2.25 2.25 0 0 0 2.25 2.25h6v-9ZM12.75 12.75v9h6.75a2.25 2.25 0 0 0 2.25-2.25v-6.75h-9Z" />
              </svg>
              Gift Tag
            </p>
            <p className="">
              Shop No 15, Dev Daya Park, <br /> Samata Nagar, Near Singhania
              High School, <br /> Thane West, Thane <br /> PIN Code 400-604
            </p>
          </div>
        </div>
        <div className="w-full xl:w-[70%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.732124656201!2d72.96360377596027!3d19.20689894784869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b914ef3655b1%3A0x86eda0977cbebebc!2sSinghania%20School%20Rd%2C%20J%20K%20Gram%2C%20Thane%20West%2C%20Thane%2C%20Maharashtra%20400606!5e0!3m2!1sen!2sin!4v1710059299095!5m2!1sen!2sin"
            width="100%"
            height="100%"
            loading=""
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
