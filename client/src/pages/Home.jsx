import { useEffect, useState } from "react";
import tbImage from '../images/tb.jpg';
import covidImage from '../images/covid.jpg';
import ringwormImage from '../images/ringworm.jpg';
import malariaImage from '../images/malaria.jpg';
import lupusImage from '../images/lupus.jpg';
import choleraImage from '../images/cholera.jpg';
const Home = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 300);
  }, []);

  const diseaseCards = [
    {
      title: "Bacterial Infections",
      desc: "Tuberculosis, Cholera, UTIs, and their treatments.",
      color: "from-green-200 to-green-50",
    },
    {
      title: "Viral Infections",
      desc: "COVID-19, Influenza, HIV and how antivirals help.",
      color: "from-red-200 to-red-50",
    },
    {
      title: "Fungal Infections",
      desc: "Ringworm, Candidiasis, Athlete’s foot, etc.",
      color: "from-purple-200 to-purple-50",
    },
    {
      title: "Parasitic Diseases",
      desc: "Malaria, Giardiasis, Worm infections & cures.",
      color: "from-yellow-200 to-yellow-50",
    },
    {
      title: "Autoimmune Disorders",
      desc: "Lupus, RA, and how immunotherapy is applied.",
      color: "from-pink-200 to-pink-50",
    },
    {
      title: "Neurological Disorders",
      desc: "Alzheimer’s, Epilepsy, Parkinson’s and treatments.",
      color: "from-blue-200 to-blue-50",
    },
  ];
  const diseaseImages = [
    { name: "Tuberculosis", img: tbImage },
    { name: "COVID-19", img: covidImage },
    { name: "Ringworm", img: ringwormImage },
    { name: "Malaria", img: malariaImage },
    { name: "Lupus", img: lupusImage },
    { name: "Cholera", img: choleraImage },
  ];
  
  return (
    <div className="p-6 bg-white min-h-screen overflow-x-hidden">
      <h2 className="text-4xl font-bold mb-6 text-blue-900 text-center animate-pulse">
        Welcome to Our Health Center
      </h2>
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
        Explore diseases caused by bacteria, viruses, fungi, parasites, and autoimmune issues. Get machine-learning-powered insights for treatment!
      </p>

      {/* Disease Cards */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {diseaseCards.map((card, i) => (
          <div
            key={i}
            className={`p-6 rounded-xl shadow-md bg-gradient-to-br ${card.color} transform transition-all duration-700 ease-in-out ${
              showContent ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            } hover:-translate-x-1`}
          >
            <h3 className="text-xl font-semibold text-blue-800 mb-2">{card.title}</h3>
            <p className="text-gray-700">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* Treatment Approaches */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
        <h3 className="text-2xl font-bold text-blue-800 mb-4">Treatment Approaches</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Antibiotics for bacterial infections</li>
          <li>Antivirals for managing viral conditions</li>
          <li>Antifungal creams and medications</li>
          <li>Antiparasitic treatments and vaccines</li>
          <li>Immunosuppressants for autoimmune issues</li>
        </ul>
      </div>

      {/* Prevention Tips */}
      <div className="bg-blue-100 rounded-xl shadow-md p-6 mb-10">
        <h3 className="text-xl font-semibold text-blue-900 mb-2">🛡 Prevention Tips</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Wash hands regularly with soap</li>
          <li>Use vaccines and maintain hygiene</li>
          <li>Cook food properly to kill pathogens</li>
          <li>Avoid sharing personal items</li>
          <li>Practice safe sex and use protection</li>
        </ul>
      </div>

      <div className="h-64"></div>

      {/* Disease Images Gallery */}
      <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">Disease</h3>

      <div className="bg-white p-6 rounded-xl shadow-lg mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {diseaseImages.map((disease, i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition duration-500"
            >
              <img
                src={disease.img}
                alt={disease.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-blue-50">
                <h4 className="text-lg font-semibold text-blue-800">{disease.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-64"></div>

      {/* Health Blog Highlights */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-10">
        <h3 className="text-2xl font-bold text-blue-800 mb-4">📚 Health Blog Highlights</h3>
        <p className="text-gray-700 mb-2">
          🧬 “Understanding Antibiotic Resistance” — How misuse of drugs leads to stronger bacteria.
        </p>
        <p className="text-gray-700">
          🤖 “ML in Healthcare” — How machine learning improves diagnosis and treatment accuracy.
        </p>
      </div>

      <div className="h-64"></div>

      {/* Symptom Checker CTA */}
      <div className="text-center mb-16">
        <h4 className="text-2xl font-bold text-gray-800 mb-2">Not Sure What You’re Feeling?</h4>
        <p className="text-gray-600 mb-4">Try our Symptom Checker to get guidance.</p>
        <button className="bg-blue-800 text-white py-2 px-6 rounded hover:bg-blue-700 transition">
          Launch Symptom Checker
        </button>
      </div>
    </div>
  );
};

export default Home;
