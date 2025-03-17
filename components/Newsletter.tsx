export default function Newsletter() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-4">
            Subscribe to our newsletter
          </h2>
          <p className="text-gray-600 mb-8">
            Get exclusive offers, interior design tips, and new product announcements.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 flex-grow rounded-md border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-gray-900 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 