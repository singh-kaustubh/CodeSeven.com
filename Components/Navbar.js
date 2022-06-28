/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { BsBagFill } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { CgCloseR } from "react-icons/cg";
import Link from "next/link";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
export default function Navbar() {
  const [show, setShow] = useState(false);
  const toggleCart = () => {
    setShow(!show);
  };
  const cart = useSelector((state) => state.value);
  return (
    <div className="">
      <header className="text-gray-50 bg-stone-800 body-font mb-1 shadow-lg">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
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
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center md:text-sm">
            <Link href="/men">
              <a className="mr-5 hover:bg-stone-50 hover:text-slate-900 hover:rounded-lg hover:px-1 text-xl">
                Men&apos;s
              </a>
            </Link>
            <Link href={"/women"}>
              <a className="mr-5 hover:bg-stone-50 hover:text-slate-900 hover:rounded-lg hover:px-1 text-xl">
                Women&apos;s
              </a>
            </Link>
            <Link href="/jewellery">
              <a className="mr-5 hover:bg-stone-50 hover:text-slate-900 hover:rounded-lg hover:px-1 text-xl">
                Jewellery
              </a>
            </Link>
            <Link href="/electronics">
              <a className="mr-5 hover:bg-stone-50 hover:text-slate-900 hover:rounded-lg hover:px-1 text-xl">
                Electronics
              </a>
            </Link>
          </nav>
          <button
            onClick={toggleCart}
            className="absolute right-0 mx-4 items-center  focus:outline-none hover:bg-gray-700 rounded text-base"
          >
            <FiShoppingCart className="text-3xl" />
          </button>
        </div>
      </header>
      <div>
        {show && (
          <div
            className="w-[72%] h-full z-10 absolute bg-opacity-90 top-0 right-0 overflow-y-auto overflow-x-hidden "
            id="chec-div"
          >
            <div
              onBlur={toggleCart}
              className="w-full   right-0 h-full  transform translate-x-0 transition ease-in-out duration-700"
              id="checkout"
            >
              <div className="flex md:flex-row flex-col justify-end" id="cart">
                <div
                  className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen"
                  id="scroll"
                >
                  <div
                    className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer"
                    onClick={() => setShow(!show)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-chevron-left"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="15 6 9 12 15 18" />
                    </svg>
                    <p className="text-sm pl-2 leading-none">Back</p>
                  </div>
                  <p className="text-5xl font-black leading-10 text-gray-800 pt-3">
                    Items
                  </p>
                  {cart.cartItems.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="md:flex items-center mt-14 py-8 border-t border-gray-200"
                      >
                        <div className="w-1/4">
                          <img
                            src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller3.png"
                            className="w-full h-full object-center object-cover"
                          />
                        </div>
                        <div className="md:pl-3 md:w-3/4">
                          <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                            RF293
                          </p>
                          <div className="flex items-center justify-between w-full pt-1">
                            <p className="text-base font-black leading-none text-gray-800">
                              North wolf bag
                            </p>
                            <select className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
                              <option>01</option>
                              <option>02</option>
                              <option>03</option>
                            </select>
                          </div>
                          <p className="text-xs leading-3 text-gray-600 pt-2">
                            Height: 10 inches
                          </p>
                          <p className="text-xs leading-3 text-gray-600 py-4">
                            Color: Black
                          </p>
                          <p className="w-96 text-xs leading-3 text-gray-600">
                            Composition: 100% calf leather
                          </p>
                          <div className="flex items-center justify-between pt-5 pr-6">
                            <div className="flex itemms-center">
                              <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
                                Add to favorites
                              </p>
                              <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                                Remove
                              </p>
                            </div>
                            <p className="text-base font-black leading-none text-gray-800">
                              $9,000
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div className="md:flex items-center mt-14 py-8 border-t border-gray-200">
                    <div className="w-1/4">
                      <img
                        src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller3.png"
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="md:pl-3 md:w-3/4">
                      <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                        RF293
                      </p>
                      <div className="flex items-center justify-between w-full pt-1">
                        <p className="text-base font-black leading-none text-gray-800">
                          North wolf bag
                        </p>
                        <select className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
                          <option>01</option>
                          <option>02</option>
                          <option>03</option>
                        </select>
                      </div>
                      <p className="text-xs leading-3 text-gray-600 pt-2">
                        Height: 10 inches
                      </p>
                      <p className="text-xs leading-3 text-gray-600 py-4">
                        Color: Black
                      </p>
                      <p className="w-96 text-xs leading-3 text-gray-600">
                        Composition: 100% calf leather
                      </p>
                      <div className="flex items-center justify-between pt-5 pr-6">
                        <div className="flex itemms-center">
                          <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
                            Add to favorites
                          </p>
                          <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                            Remove
                          </p>
                        </div>
                        <p className="text-base font-black leading-none text-gray-800">
                          $9,000
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:w-1/2 md:w-1/3 w-full bg-gray-100 h-full">
                  <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                    <div>
                      <p className="flex justify-between text-4xl font-black leading-9 text-gray-800">
                        Summary
                        <button onClick={toggleCart}>
                          <CgCloseR className="text-3xl" />
                        </button>
                      </p>
                      <div className="flex items-center justify-between pt-16">
                        <p className="text-base leading-none text-gray-800">
                          Subtotal
                        </p>
                        <p className="text-base leading-none text-gray-800">
                          $9,000
                        </p>
                      </div>
                      <div className="flex items-center justify-between pt-5">
                        <p className="text-base leading-none text-gray-800">
                          Shipping
                        </p>
                        <p className="text-base leading-none text-gray-800">
                          $30
                        </p>
                      </div>
                      <div className="flex items-center justify-between pt-5">
                        <p className="text-base leading-none text-gray-800">
                          Tax
                        </p>
                        <p className="text-base leading-none text-gray-800">
                          $35
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                        <p className="text-2xl leading-normal text-gray-800">
                          Total
                        </p>
                        <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                          $10,240
                        </p>
                      </div>
                      <Link href={"/checkout"}>
                        <button
                          onClick={toggleCart}
                          className=" flex justify-center text-base leading-none w-full py-3 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white"
                        >
                          <BsBagFill className="mr-2" />
                          Checkout
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <style>
          {` /* width */
                #scroll::-webkit-scrollbar {
                    width: 1px;
                }

                /* Track */
                #scroll::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                /* Handle */
                #scroll::-webkit-scrollbar-thumb {
                    background: rgb(133, 132, 132);
                }
`}
        </style>
      </div>
    </div>
  );
}