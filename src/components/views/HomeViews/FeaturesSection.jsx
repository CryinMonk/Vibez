const FeaturesSection = () => {
  const features = [
    {
      icon: "🚀",
      title: "Fast Performance",
      description: "Lightning-fast websites optimized for speed and performance.",
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description: "Beautiful designs that work perfectly on all devices.",
    },
    {
      icon: "🔒",
      title: "Secure & Reliable",
      description: "Built with security best practices and reliable hosting.",
    },
    {
      icon: "🎨",
      title: "Custom Design",
      description: "Unique designs tailored to your brand and requirements.",
    },
    {
      icon: "⚡",
      title: "Modern Technology",
      description: "Using the latest web technologies and frameworks.",
    },
    {
      icon: "🛠️",
      title: "Easy Maintenance",
      description: "Clean code that's easy to maintain and update.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver exceptional web solutions with cutting-edge technology and creative design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
