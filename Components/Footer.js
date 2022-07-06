import React from "react";
import Image from "next/image";
import Link from "next/dist/client/link";
export default function Footer() {
  return (
    <div className="bg-footer text-tahiti">
      <footer className="text-gray-50 body-font">
        <div className="container px-5 py-14 mx-auto">
          <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
            <div className="flex items-center lg:w-1/6 md:w-1/2 w-full px-4">
              <div className="title-font font-medium text-gray-50 tracking-widest text-lg mb-3">
                <Link href={"/"}>
                  <a className="flex title-font font-medium items-center text-white md:mb-0 cursor-pointer">
                    <Image
                      className=""
                      src="/images/logo.png"
                      width={30}
                      height={30}
                      alt="..."
                    />
                    CodeSeven.com
                  </a>
                </Link>
                <div className="text-[11px] mx-auto text-gray-500">
                  Wear your &lt;Code/&gt;
                  <br className="" />
                  Premium coding tshirts, electronics and apparals
                </div>
              </div>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-50 tracking-widest text-lg mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-50 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a className="text-gray-50 hover:text-gray-800">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-50 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a className="text-gray-50 hover:text-gray-800">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-50 tracking-widest text-lg mb-3">
                SHOP
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a href={"/men"} className="text-gray-50 hover:text-gray-800">
                    Men&apos;s Clothing
                  </a>
                </li>
                <li>
                  <a
                    href={"/women"}
                    className="text-gray-50 hover:text-gray-800"
                  >
                    Women&apos;s Clothing
                  </a>
                </li>
                <li>
                  <a
                    href={"/electronics"}
                    className="text-gray-50 hover:text-gray-800"
                  >
                    Electronics
                  </a>
                </li>
                <li>
                  <a
                    href={"/jewellery"}
                    className="text-gray-50 hover:text-gray-800"
                  >
                    Jewelery
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-50 tracking-widest text-lg mb-3">
                CUSTOMER CARE
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    href={"/about"}
                    className="text-gray-50 hover:text-gray-800"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href={"/return"}
                    className="text-gray-50 hover:text-gray-800"
                  >
                    Return Policy
                  </a>
                </li>
                <li>
                  <a
                    href={"/contact"}
                    className="text-gray-50 hover:text-gray-800"
                  >
                    Contact Details
                  </a>
                </li>
                <li>
                  <a
                    href="/images/sizechart.png"
                    target={"_blank"}
                    className="text-gray-50 hover:text-gray-800"
                  >
                    Size Chart
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-50 tracking-widest text-lg mb-3">
                Policy and Careers
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-50 hover:text-gray-800">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="text-gray-50 hover:text-gray-800">Careers</a>
                </li>
                <li>
                  <a className="text-gray-50 hover:text-gray-800">
                    Terms and Conditions
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <Image src="/images/pay.png" alt="..." width={300} height={200} />
            </div>
          </div>
        </div>
        <div className="border-t bg-black border-gray-200">
          <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
            <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
                <label
                  htmlFor="footer-field"
                  className="leading-7 text-sm text-gray-50"
                >
                  Placeholder
                </label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="flex ml-auto text-white bg-red-900 border-0 py-2 px-6 focus:outline-none hover:scale-105 rounded">
                Button
              </button>
            </div>
            <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
