import { Link } from "react-router-dom"

const CTASection = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let's work together to create something amazing. Contact us today to discuss your project.
        </p>
        <Link
          to="/contact"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
        >
          Contact Us Now
        </Link>
      </div>
    </section>
  )
}

export default CTASection
