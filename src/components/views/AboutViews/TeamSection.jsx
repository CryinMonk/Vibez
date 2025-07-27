const TeamSection = () => {
  const team = [
    {
      name: "Ahmad Khan",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Full-stack developer with 8+ years of experience in React and Node.js.",
    },
    {
      name: "Saif Ali",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1740948484028-32b1d87a0a3a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "Creative designer passionate about creating beautiful user experiences.",
    },
    {
      name: "Bilal Ahmed",
      role: "Frontend Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "React specialist focused on creating responsive and interactive web applications.",
    },
  ];
    return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our talented team of developers and designers work together to create amazing web experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={member.image || "https://via.placeholder.com/400x400/6366f1/ffffff?text=Team+Member"}
                alt={`${member.name}, ${member.role}`}
                className="w-full h-64 object-cover"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/400x400/f3f4f6/374151?text=No+Photo";
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
