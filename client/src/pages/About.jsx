const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      {/* Main Content */}
      <div className="flex-grow max-w-3xl mx-auto text-center p-6">
        <h2 className="text-4xl font-bold mb-6 text-blue-800 font-sans">About Us</h2>

        <p className="text-gray-700 text-lg mb-8 font-medium">
          Our Health Center is dedicated to improving the health and well-being of our patients.
          We offer a wide range of medical services provided by experienced professionals.
        </p>

        <div className="mb-10 space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">Our Mission</h3>
            <p className="text-gray-600 font-medium">
              To provide affordable, accessible, and high-quality health care for everyone in our community.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">Our Vision</h3>
            <p className="text-gray-600 font-medium">
              To become a leading health provider known for exceptional care and community wellness programs.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">Contact Us</h3>
            <p className="text-gray-600 font-medium">
              📍 Adama, Ethiopia<br />
              📞 +251 912 345 678<br />
              ✉️ contact@healthcenter.com
            </p>
          </div>
        </div>

        {/* External Website Link */}
        <div className="mt-6 mb-10">
          <a
            href="https://www.yourhealthcenterwebsite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline font-semibold hover:text-blue-800 transition duration-300"
          >
            Visit Our Official Website
          </a>
        </div>

        {/* Additional Internal Links */}
        <div className="space-y-4">
          <a
            href="/services"
            className="block text-indigo-700 font-semibold hover:underline hover:text-indigo-900 transition duration-300"
          >
            🩺 Explore Our Services
          </a>
          <a
            href="/team"
            className="block text-indigo-700 font-semibold hover:underline hover:text-indigo-900 transition duration-300"
          >
            👨‍⚕ Meet Our Team
          </a>
          <a
            href="/faqs"
            className="block text-indigo-700 font-semibold hover:underline hover:text-indigo-900 transition duration-300"
          >
            ❓ Frequently Asked Questions
          </a>
        </div>
      </div>

      {/* Fixed Footer */}
      <footer className="bg-indigo-800 text-white text-center p-4 font-medium">
        © {new Date().getFullYear()} Health Center. All rights reserved.
      </footer>
    </div>
  );
};

export default About;
