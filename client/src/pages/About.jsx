const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Main Content */}
      <div className="flex-grow max-w-3xl mx-auto text-center p-6">
        <h2 className="text-4xl font-bold mb-4 text-blue-800">About Us</h2>
        <p className="text-gray-700 text-lg mb-6">
          Our Health Center is dedicated to improving the health and well-being of our patients.
          We offer a wide range of medical services provided by experienced professionals.
        </p>

        <h3 className="text-2xl font-semibold text-blue-700 mb-2">Our Mission</h3>
        <p className="text-gray-600 mb-4">
          To provide affordable, accessible, and high-quality health care for everyone in our community.
        </p>

        <h3 className="text-2xl font-semibold text-blue-700 mb-2">Our Vision</h3>
        <p className="text-gray-600 mb-4">
          To become a leading health provider known for exceptional care and community wellness programs.
        </p>

        <h3 className="text-2xl font-semibold text-blue-700 mb-2">Contact Us</h3>
        <p className="text-gray-600">
          📍 Adama, Ethiopia<br />
          📞 +251 912 345 678<br />
          ✉️ contact@healthcenter.com
        </p>

        <div className="mt-6">
          <a
            href="https://www.yourhealthcenterwebsite.com" // Change this to your real site
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline font-medium"
          >
            Visit Our Official Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
