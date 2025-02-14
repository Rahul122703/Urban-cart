import React from "react";
import footerData, { companyInfo, copyrightText } from "./footerData";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-2xl font-bold text-orange-500">
            {companyInfo.name}
          </h2>
          <p className="text-gray-400 mt-2">{companyInfo.description}</p>
        </div>

        {footerData.map((currentItem, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-3">
              {currentItem.section}
            </h3>
            <ul
              className={`${
                currentItem.horizontal
                  ? "flex flex-wrap justify-center md:justify-start space-x-4"
                  : "space-y-2"
              }`}>
              {currentItem.links.map((link, idx) => (
                <li key={idx} className="flex justify-center md:justify-start">
                  {link.url ? (
                    <a
                      href={link.url}
                      className="text-gray-400 hover:text-white flex items-center space-x-2">
                      {link.icon} <span>{link.name}</span>
                    </a>
                  ) : (
                    <span className="flex items-center space-x-2">
                      {link.icon} <span>{link.name}</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center text-gray-400">{copyrightText}</div>
    </footer>
  );
};

export default Footer;
