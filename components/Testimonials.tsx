export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      content: "The quality of the furniture exceeded my expectations. The customer service team was incredibly helpful in helping me choose pieces that work well together.",
      author: "Sarah Johnson",
      role: "Homeowner"
    },
    {
      id: 2,
      content: "I've transformed my living room with their pieces. The attention to detail and craftsmanship is evident in everything I purchased.",
      author: "Michael Chen",
      role: "Interior Designer"
    },
    {
      id: 3,
      content: "The delivery was prompt and the assembly service was worth every penny. My new dining set is absolutely stunning!",
      author: "Emily Rodriguez",
      role: "Customer"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-light text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <svg 
                className="h-8 w-8 text-gray-300 mb-4" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-600 mb-6 italic">{testimonial.content}</p>
              <div>
                <p className="font-medium text-gray-900">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 