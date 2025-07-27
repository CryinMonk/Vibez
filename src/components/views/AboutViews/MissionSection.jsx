const MissionSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              We believe that every business deserves a powerful online presence. Our mission is to create websites that
              not only look amazing but also drive results for our clients.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              With years of experience in web development, we combine creativity with technical expertise to deliver
              solutions that exceed expectations.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">50+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">5+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Our team working"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionSection
