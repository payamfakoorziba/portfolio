import Container from "../ui/container";

const testimonials = [
  {
    name: "John Doe",
    position: "CEO",
    company: "Company",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst.",
  },
  {
    name: "John Doe",
    position: "CEO",
    company: "Company",
    quote:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam assumenda voluptas veritatis voluptatibus omnis fugiat, ex unde impedit porro, vel itaque enim dolores exercitationem eligendi ea perferendis, laboriosam illo asperiores quam ipsa accusamus praesentium.",
  },
  {
    name: "John Doe",
    position: "CEO",
    company: "Company",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing.",
  },
];

const Testimonials = () => {
  return (
    <Container id="testimonials">
      <h3 className="font-medium text-4xl sm:text-5xl md:text-6xl">
        Testimonials
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#56565E] hover:bg-white/10 transition-colors p-8 rounded-lg shadow-md flex flex-col gap-y-4
            duration-400 ease-in-out transform cursor-default"
          >
            <p className="flex-1 leading-loose">{testimonial.quote}</p>
            <div>
              <p className="font-semibold mt-4">{testimonial.name}</p>
              <p className="font-medium text-white/90">
                {testimonial.position}
              </p>
              <p className="text-white/80">{testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Testimonials;
