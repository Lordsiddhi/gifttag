/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
  const SingleTestimonial = [
    {
      id: 1,
      description:
        "Thanks again, and thank you for your attentive, engaged, and engaging customer service - it is truly a pleasure!",
      author: "Bhupendar Jogi",
    },
    {
      id: 2,
      description:
        "I love the anime figures,  beautiful colour and style. So well made and so happy that buying it is making a difference.",
      author: "Saima Sharma",
    },
    {
      id: 3,
      description:
        "Thank you for the awesome customer service - I will be sure to look to you first for future purchases.",
      author: "Nikit Goel",
    },
  ];

  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 container mx-auto my-12"
    >
      <div className="mx-auto px-4 ">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 md:text-5xl font-bold">
            What Our <span className="text-light-primary">Customers</span> Are
            Saying
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 mt-8 lg:max-w-none lg:grid-cols-3"
        >
          {SingleTestimonial.map((item) => {
            return (
              <li className="h-full">
                <ul
                  role="list"
                  className="flex flex-col gap-y-6 sm:gap-y-8 h-full"
                >
                  <li>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <svg
                        aria-hidden="true"
                        width="105"
                        height="78"
                        className="absolute left-6 top-6 fill-blue-gray-50"
                      >
                        <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
                      </svg>
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {item.description}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900 font-bold">
                            {item.author}
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Testimonial;
