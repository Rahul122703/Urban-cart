import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
} from "react-icons/fa";

export const companyInfo = {
  name: "Urban Cart",
  description: "Your go-to destination for trendy and affordable shopping.",
};

const footerData = [
  {
    section: "Quick Links",
    links: [
      { name: "Shop", url: "#" },
      { name: "About Us", url: "#" },
      { name: "Contact", url: "#" },
      { name: "Privacy Policy", url: "#" },
    ],
  },
  {
    section: "Follow Us",
    links: [
      { name: "Facebook", url: "#", icon: <FaFacebook size={24} /> },
      { name: "Instagram", url: "#", icon: <FaInstagram size={24} /> },
      { name: "Twitter", url: "#", icon: <FaTwitter size={24} /> },
    ],
  },
  {
    section: "We Accept",
    links: [
      { name: "Visa", icon: <FaCcVisa size={36} className="text-gray-400" /> },
      {
        name: "Mastercard",
        icon: <FaCcMastercard size={36} className="text-gray-400" />,
      },
      {
        name: "PayPal",
        icon: <FaCcPaypal size={36} className="text-gray-400" />,
      },
    ],
    horizontal: true,
  },
];

export const copyrightText = `© ${new Date().getFullYear()} Urban Cart. All rights reserved.`;

export default footerData;
