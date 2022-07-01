/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useSelector } from "react-redux/es/exports";
export default function Checkout() {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="2xl:container 2xl:mx-auto py-24 px-4 md:px-6 xl:px-20">
      <div className="flex flex-col xl:flex-row justify-center  xl:space-y-0 xl:space-x-8">
        <div className="w-full">
          <h2 className="font-semibold text-3xl">Delivery Details</h2>
          <div className=" flex my-2">
            <div className="px-2 w-1/2">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border-2 border-gray-900 mx-auto rounded-md bg-white focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="px-2 w-1/2">
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border-2 border-gray-900 mx-auto rounded-md bg-white focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
          </div>
          <div className="flex my-2">
            <div className="px-2 w-full">
              <label
                htmlFor="address"
                className="leading-7 text-sm text-gray-600"
              >
                Address
              </label>
              <textarea
                id="address"
                name="address"
                className="w-full border-2 border-gray-900 mx-auto rounded-md bg-white focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                cols="30"
                rows="2"
              ></textarea>
            </div>
          </div>

          <div className=" flex my-2">
            <div className="px-2 w-1/2">
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="leading-7 text-sm text-gray-600"
                >
                  Phone
                </label>
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  className="w-full border-2 border-gray-900 mx-auto rounded-md bg-white focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="px-2 w-1/2">
              <div className="mb-4">
                <label
                  htmlFor="city"
                  className="leading-7 text-sm text-gray-600"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="w-full border-2 border-gray-900 mx-auto rounded-md bg-white   focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
          </div>
          <div className=" flex my-2">
            <div className="px-2 w-1/2">
              <div className="mb-4">
                <label
                  htmlFor="state"
                  className="leading-7 text-sm text-gray-600"
                >
                  State
                </label>
                <input
                  type="phone"
                  id="state"
                  name="state"
                  className="w-full border-2 border-gray-900 mx-auto rounded-md bg-white focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="px-2 w-1/2">
              <div className="mb-4">
                <label
                  htmlFor="pincode"
                  className="leading-7 text-sm text-gray-600"
                >
                  Pincode
                </label>
                <input
                  type="number"
                  id="pincode"
                  name="pincode"
                  className="w-full border-2 border-gray-900 mx-auto rounded-md bg-white focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-col items-start w-full lg:w-9/12 xl:w-full ">
          <h3 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 w-full  md:text-left text-gray-800">
            Order Summary
          </h3>
          <p className="text-base leading-none mt-4 text-gray-800">
            Paid using: Credit Card/Debit Card/UPI/COD
          </p>
          <div className="flex justify-center items-center w-full mt-8  flex-col space-y-4 ">
            <div className="flex md:flex-row justify-start items-start md:items-center  border border-gray-200 w-full">
              <div className="w-40 md:w-32">
                <img
                  className="hidden md:block"
                  src="https://i.ibb.co/wWp4m6W/Rectangle-8.png"
                  alt="girl-in-red-dress"
                />
                <img
                  className="md:hidden "
                  src="https://i.ibb.co/f8pyz8q/Rectangle-8.png"
                  alt="girl-in-red-dress"
                />
              </div>
              <div className="flex justify-start md:justify-between items-start md:items-center  flex-col md:flex-row w-full p-4 md:px-8">
                <div className="flex flex-col md:flex-shrink-0  justify-start items-start">
                  <h3 className="text-lg md:text-xl  w-full font-semibold leading-6 md:leading-5  text-gray-800">
                    Premium Quaility Red Dress
                  </h3>
                  <div className="flex flex-row justify-start  space-x-4 md:space-x-6 items-start mt-4 ">
                    <p className="text-sm leading-none text-gray-600">
                      Size: <span className="text-gray-800"> Small</span>
                    </p>
                    <p className="text-sm leading-none text-gray-600">
                      Quantity: <span className="text-gray-800"> 01</span>
                    </p>
                  </div>
                </div>
                <div className="flex mt-4 md:mt-0 md:justify-end items-center w-full ">
                  <p className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-800">
                    $28.00
                  </p>
                </div>
              </div>
            </div>
            <div className="flex md:flex-row justify-start items-start md:items-center  border border-gray-200 w-full">
              <div className="w-40 md:w-32">
                <img
                  className="hidden md:block"
                  src="https://i.ibb.co/3ftbsMT/Rectangle-8-1.png"
                  alt="girl-in-yellow-dress"
                />
                <img
                  className="md:hidden "
                  src="https://i.ibb.co/D79dzHg/Rectangle-8.png"
                  alt="girl-in-yellow-dress"
                />
              </div>
              <div className="flex justify-start md:justify-between items-start md:items-center  flex-col md:flex-row w-full p-4 md:px-8">
                <div className="flex flex-col md:flex-shrink-0  justify-start items-start">
                  <h3 className="text-lg md:text-xl font-semibold leading-6 md:leading-5  text-gray-800">
                    Premium Quaility Yellow Dress
                  </h3>
                  <div className="flex flex-row justify-start  space-x-4 md:space-x-6 items-start mt-4 ">
                    <p className="text-sm leading-none text-gray-600">
                      Size: <span className="text-gray-800"> Small</span>
                    </p>
                    <p className="text-sm leading-none text-gray-600">
                      Quantity: <span className="text-gray-800"> 01</span>
                    </p>
                  </div>
                </div>
                <div className="flex mt-4 md:mt-0 md:justify-end items-center w-full ">
                  <p className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-800">
                    $28.00
                  </p>
                </div>
              </div>
            </div>
            <div className="flex md:flex-row justify-start items-start md:items-center  border border-gray-200 w-full">
              <div className="w-40 md:w-32">
                <img
                  className="hidden md:block"
                  src="https://i.ibb.co/C7M7Mvx/Rectangle-8-2.png"
                  alt="girl-in-white-dress"
                />
                <img
                  className="md:hidden "
                  src="https://i.ibb.co/MsbCZNJ/Rectangle-8.png"
                  alt="girl-in-white-dress"
                />
              </div>
              <div className="flex justify-start md:justify-between items-start md:items-center  flex-col md:flex-row w-full p-4 md:px-8">
                <div className="flex flex-col md:flex-shrink-0  justify-start items-start">
                  <h3 className="text-lg md:text-xl  font-semibold leading-6 md:leading-5  text-gray-800">
                    Premium Quaility White Dress
                  </h3>
                  <div className="flex flex-row justify-start  space-x-4 md:space-x-6 items-start mt-4 ">
                    <p className="text-sm leading-none text-gray-600">
                      Size: <span className="text-gray-800"> Small</span>
                    </p>
                    <p className="text-sm leading-none text-gray-600">
                      Quantity: <span className="text-gray-800"> 01</span>
                    </p>
                  </div>
                </div>
                <div className="flex mt-4 md:mt-0 md:justify-end items-center w-full ">
                  <p className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-800">
                    $28.00
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start mt-8 xl:mt-10 space-y-10 w-full">
            <div className="flex flex-col space-y-4 w-full">
              <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                <div className="flex justify-between  w-full">
                  <p className="text-base leading-4 text-gray-800">Subtotal</p>
                  <p className="text-base leading-4 text-gray-600">$56.00</p>
                </div>
                <div className="flex justify-between  w-full">
                  <p className="text-base leading-4 text-gray-800">
                    Discount{" "}
                    <span className="bg-gray-200 p-1 text-xs font-medium leading-3  text-gray-800">
                      STUDENT
                    </span>
                  </p>
                  <p className="text-base leading-4 text-gray-600">
                    -$28.00 (50%)
                  </p>
                </div>
                <div className="flex justify-between  w-full">
                  <p className="text-base leading-4 text-gray-800">Shipping</p>
                  <p className="text-base leading-4 text-gray-600">$8.00</p>
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-base font-semibold leading-4 text-gray-800">
                  Total
                </p>
                <p className="text-base font-semibold leading-4 text-gray-600">
                  $36.00
                </p>
              </div>
              <div className="flex w-full justify-center items-center pt-1 md:pt-4  xl:pt-8 space-y-6 md:space-y-8 flex-col">
                <button className="py-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  w-full text-base font-medium leading-4 text-white bg-gray-800 hover:bg-black">
                  Confirm and proceed to payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
