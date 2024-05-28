import Test1 from "../assets/Test1.png";
import Test4 from "../assets/test.avif";
import Test3 from "../assets/Test3.png";

export const Testimonial = () => {
  const testimonials = [
    {
      avatar: Test3,
      name: "Oyindamola Maja",
      title: "Badagray, Lagos",
      quote:
        "Data has never been this affordable until i came across this platform Waradata.com",
    },
    {
      avatar: Test1,
      name: "Okeowo Lekan",
      title: "Ikeja, Lagos",
      quote:
        "Everything is faster and i have never encountered any problem since i have been on this platform.",
    },
    {
      avatar: Test4,
      name: "Kafaru Temitope",
      title: "Asokoro, Abuja",
      quote:
        "Its just the solution i needed as a student, my data allowances have dropped down since i have been here.",
    },
  ];

  return (
    <section className="py-1 pb-14 z-50 bg-white" id="Feedback">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl sm:text-center md:mx-auto">
          <p className="font-bold text-[#17c2ec]">FEEDBACK</p>
          <h3 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
            What our Customers Think...
          </h3>
          <p className="mt-3 text-gray-400">
            We always want to know what our customers think about our services
            as our upmost goal is to make them happy.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, idx) => (
              <li
                key={idx}
                className={`${
                  idx === 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-800 "
                } p-4 rounded-xl`}
              >
                <figure>
                  <div className="flex items-center gap-x-4">
                    <img src={item.avatar} className="w-16 h-16 rounded-full" />
                    <div>
                      <span className="block font-semibold">{item.name}</span>
                      <span className="block text-sm mt-0.5">{item.title}</span>
                    </div>
                  </div>
                  <blockquote>
                    <p className="mt-6 ">{item.quote}</p>
                  </blockquote>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
