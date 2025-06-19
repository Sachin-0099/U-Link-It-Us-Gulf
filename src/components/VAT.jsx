import React from 'react';

const VatCertificates = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">VAT Certificates</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Official VAT registration certificates for UlinkGulf, demonstrating our compliance with tax regulations in Saudi Arabia.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Certificate 1 */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="p-5 bg-gradient-to-r from-blue-900 to-blue-700">
              <h3 className="text-xl font-bold text-white text-center">VAT Registration Certificate</h3>
            </div>
            <div className="relative">
              <div className="bg-gray-100">
                <img
                  src="/Images/VAT2.jpeg"
                  alt="VAT Registration Certificate"
                  className="w-full object-contain"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-6xl font-black text-blue-50 opacity-10 rotate-[-30deg]">
                  GAZT
                </div>
              </div>
            </div>
            <div className="p-5 border-t border-gray-100">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-blue-800">Certificate Details</h4>
                  <p className="text-sm text-gray-600">Issued: 06/03/2018</p>
                </div>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download
                </button>
              </div>
            </div>
          </div>

          {/* Certificate 2 */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="p-5 bg-gradient-to-r from-teal-700 to-teal-500">
              <h3 className="text-xl font-bold text-white text-center">VAT Compliance Certificate</h3>
            </div>
            <div className="relative">
              <div className="bg-gray-100">
                <img
                  src="/Images/VAT1.jpeg"
                  alt="VAT Compliance Certificate"
                  className="w-full object-contain"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-6xl font-black text-teal-50 opacity-10 rotate-[-30deg]">
                  GAZT
                </div>
              </div>
            </div>
            <div className="p-5 border-t border-gray-100">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-teal-800">Certificate Details</h4>
                  <p className="text-sm text-gray-600">Issued: 12/09/2020</p>
                </div>
                <button className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-white rounded-xl shadow-md p-6 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-blue-900 mb-4">About Our VAT Registration</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Officially Registered</h4>
                <p className="text-gray-600 text-sm">Our VAT registration number 300605758100003 is recognized by the General Authority of Zakat and Tax (GAZT).</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Tax Compliance</h4>
                <p className="text-gray-600 text-sm">We comply with all VAT regulations in Saudi Arabia and maintain accurate financial records.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-10 text-center text-gray-500 text-sm">

          <p className="mt-2">UlinkGulf</p>
        </div>
      </div>
    </div>
  );
};

export default VatCertificates;
