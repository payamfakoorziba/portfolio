import Appear from "../appear";
import Container from "../ui/container";

const testimonials = [
  {
    name: "Henry Cheng",
    position: "CEO",
    company: "Ship4x6",
    quote:
      "Payam delivered exceptional work for us. He communicated all updates to the project, and clearly understood and fulfilled our precise needs. Highly recommended for anyone looking for a dedicated and skilled web professional.",
  },
  {
    name: "Pooya Namavar",
    position: "Partner",
    company: "HCL Consulting",
    quote:
      "Payam made our website with precision and insight, turning our vision into reality. We are very happy with the result and would recommend him to anyone looking for a professional web developer.",
  },
  {
    name: "Reza Fakoorziba",
    position: "CEO",
    company: "RastaCan Immigration Services",
    quote:
      "Payam created an admin dashboard for us that has made our work so much easier. It has helped us keep track of our clients and cases, and has made our workflow much more efficient. We are very satisfied with the result.",
  },
];

const Testimonials = () => {
  return (
    <Container id="testimonials" className="scroll-mt-10">
      <h3 className="font-medium text-4xl sm:text-5xl md:text-4xl">
        Testimonials
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
        {testimonials.map((testimonial, index) => (
          <Appear
            key={index}
            className="bg-gradient-to-br from-[#56565E] hover:bg-white/10 transition-colors p-8 rounded-lg shadow-md flex flex-col gap-y-4
            duration-400 ease-in-out transform cursor-default"
            transition={{
              delay: 0.25 + 0.1 * index,
              duration: 0.4,
            }}
          >
            <p className="flex-1 leading-loose">{testimonial.quote}</p>
            <div>
              <p className="font-semibold mt-4">{testimonial.name}</p>
              <p className="font-medium">{testimonial.position}</p>
              <p>{testimonial.company}</p>
            </div>
          </Appear>
        ))}
      </div>
    </Container>
  );
};

export default Testimonials;
