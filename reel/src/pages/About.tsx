const About = () => {
  return (
    <div className="min-h-screen py-16 px-4 md:px-12">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Passionate about combining technology and agriculture to build
            sustainable solutions that positively impact communities.
          </p>
        </section>

        {/* Story */}
        <section className="bg-white shadow-md rounded-xl p-8 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Our journey into agribusiness began in 2020 through poultry farming.
            What started as a small venture has grown into a strong foundation
            of knowledge in poultry management, nutrition planning, animal
            health, and farm operations.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Alongside agriculture, we are building expertise in modern web
            development, focusing on React and full-stack technologies to create
            digital solutions for businesses and communities.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Our Mission
            </h2>
            <p className="text-gray-600">
              To deliver quality agricultural products while leveraging
              technology to provide innovative and reliable solutions.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Our Vision
            </h2>
            <p className="text-gray-600">
              To become a trusted brand integrating technology and agribusiness
              while supporting communities and institutions.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="bg-white shadow-md rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Our Values
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-800">Quality</h3>
              <p>Maintaining high production and service standards.</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">Integrity</h3>
              <p>Operating with honesty, transparency, and accountability.</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">Innovation</h3>
              <p>
                Using technology and continuous learning to improve services.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">Sustainability</h3>
              <p>
                Practicing responsible and environmentally friendly methods.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">
                Customer Satisfaction
              </h3>
              <p>Building strong relationships through dependable service.</p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-white shadow-md rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            What We Do
          </h2>

          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Poultry farming and poultry product supply</li>
            <li>Agricultural entrepreneurship and farm management</li>
            <li>Technology and web development services</li>
            <li>Business support services for institutions and individuals</li>
          </ul>
        </section>

        {/* Closing */}
        <section className="text-center bg-white shadow-md rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Let’s Connect
          </h2>
          <p className="text-gray-600">
            We welcome partnerships, collaborations, and opportunities to serve
            individuals, schools, and organizations seeking reliable products
            and digital solutions.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
