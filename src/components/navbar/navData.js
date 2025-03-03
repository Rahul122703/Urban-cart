import {
  FaHome,
  FaMobileAlt,
  FaLaptop,
  FaCamera,
  FaTshirt,
  FaHeart,
  FaShoppingCart,
  FaSignInAlt,
  FaUserPlus,
  FaBoxOpen,
  FaCogs,
  FaSignOutAlt,
  FaInfoCircle,
  FaEnvelope,
  FaUser,
} from "react-icons/fa";
import React from "react";

const navData = [
  {
    page: "home",
    links: [{ label: "home", icon: <FaHome />, url: "/" }],
  },
  {
    page: "shop",
    links: [{ label: "shop", icon: <FaHome /> }],

    sublinks: [
      {
        label: "electronics",
        icon: <FaMobileAlt />,
        subsubLinks: [
          {
            label: "mobile phones",
            icon: <FaMobileAlt />,
            url: "/shop/electronics/mobile-phones",
          },
          {
            label: "laptops",
            icon: <FaLaptop />,
            url: "/shop/electronics/laptops",
          },
          {
            label: "cameras",
            icon: <FaCamera />,
            url: "/shop/electronics/cameras",
          },
        ],
      },
      {
        label: "clothing",
        icon: <FaTshirt />,
        subsubLinks: [
          { label: "men", icon: <FaTshirt />, url: "/shop/clothing/men" },
          { label: "women", icon: <FaTshirt />, url: "/shop/clothing/women" },
          { label: "kids", icon: <FaTshirt />, url: "/shop/clothing/kids" },
        ],
      },
      {
        label: "accessories",
        icon: <FaShoppingCart />,
        subsubLinks: [
          {
            label: "watches",
            icon: <FaShoppingCart />,
            url: "/shop/accessories/watches",
          },
          {
            label: "bags",
            icon: <FaShoppingCart />,
            url: "/shop/accessories/bags",
          },
          {
            label: "jewelry",
            icon: <FaShoppingCart />,
            url: "/shop/accessories/jewelry",
          },
        ],
      },
      { label: "all products", icon: <FaBoxOpen />, url: "/shop/all-products" },
    ],
  },
  {
    page: "about us",
    links: [
      {
        label: "about us",
        icon: <FaInfoCircle />,
        url: "/about-us",
      },
    ],
  },
  {
    page: "contact us",
    links: [
      {
        label: "contact us",
        icon: <FaEnvelope />,
        url: "/contact-us",
      },
    ],
  },
  {
    page: "wishlist",
    links: [
      {
        label: "wishlist",
        icon: <FaHeart />,
        url: "/wishlist",
      },
    ],
  },

  {
    page: "user",
    links: [{ label: "user account", icon: <FaHome /> }],
    sublinks: [
      {
        label: "login",
        icon: <FaSignInAlt />,
        url: "/login",
      },
      {
        label: "register",
        icon: <FaUserPlus />,
        url: "/register",
      },
      {
        label: "profile",
        icon: <FaUser />,
        subsubLinks: [
          { label: "orders", icon: <FaBoxOpen />, url: "/user/profile/orders" },
          {
            label: "settings",
            icon: <FaCogs />,
            url: "/profile/settings",
          },
          {
            label: "logout",
            icon: <FaSignOutAlt />,
            url: "/profile/logout",
          },
        ],
      },
    ],
  },
];

export default navData;
