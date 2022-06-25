import React from "react";
import {
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { BsBagFill } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { FcDeleteDatabase } from "react-icons/fc";
import { FaDumpster } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
export default function Navbar() {
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (ref.current.classList.contains("translate-x-0")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();
  return (
    <>
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
            <Link href="/hoodies">
              <a className="mr-5 hover:bg-stone-50 hover:text-slate-900 hover:rounded-lg hover:px-1 text-xl">
                Hoodies
              </a>
            </Link>
            <Link href={"/tshirt"}>
              <a className="mr-5 hover:bg-stone-50 hover:text-slate-900 hover:rounded-lg hover:px-1 text-xl">
                Tshirts
              </a>
            </Link>
            <Link href="/mugs">
              <a className="mr-5 hover:bg-stone-50 hover:text-slate-900 hover:rounded-lg hover:px-1 text-xl">
                Mugs
              </a>
            </Link>
            <Link href="/stickers">
              <a className="mr-5 hover:bg-stone-50 hover:text-slate-900 hover:rounded-lg hover:px-1 text-xl">
                Stickers
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
      <div
        ref={ref}
        className=" w-72 h-full sidCart absolute top-0 right-0 z-10 bg-orange-300 px-8 py-10 transform transition-transform translate-x-full"
      >
        <h2 className="font-bold text-center text-xl mb-1">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-2 right-2 cursor-pointer text-2xl"
        >
          <AiFillCloseCircle />
        </span>
        <ol className="list-decimal p-1">
          <li>
            <div className="item flex my-3 font-semibold">
              <div className="w-2/3 font-">Tshirt- Wear your own logic</div>
              <div className="flex items-center justify-center w-1/3">
                <AiFillPlusCircle className="cursor-pointer text-red-900" />
                <span className="mx-1">1</span>
                <AiFillMinusCircle className="cursor-pointer text-red-900" />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-3 font-semibold">
              <div className="w-2/3 font-">Tshirt- Wear your own logic</div>
              <div className="flex items-center justify-center w-1/3">
                <AiFillPlusCircle className="cursor-pointer text-red-900" />
                <span className="mx-1">1</span>
                <AiFillMinusCircle className="cursor-pointer text-red-900" />
              </div>
            </div>
          </li>
          <li>
            <div className="item flex my-3 font-semibold">
              <div className="w-2/3 font-">Tshirt- Wear your own logic</div>
              <div className="flex items-center justify-center w-1/3">
                <AiFillPlusCircle className="cursor-pointer text-red-900" />
                <span className="mx-1">1</span>
                <AiFillMinusCircle className="cursor-pointer text-red-900" />
              </div>
            </div>
          </li>
        </ol>
        <div className="flex justify-between ">
          <button className="flex mr-2 mt-10 text-white bg-red-900  py-2 px-3 focus:outline-none hover:scale-105 rounded text-sm">
            <BsBagFill className="m-1 text-sm" />
            Checkout
          </button>
          <button className="flex mr-2 mt-10 text-white bg-red-900  py-2 px-3 focus:outline-none hover:scale-105 rounded text-sm">
            <FaDumpster className="m-1 text-sm" />
            Clear
          </button>
        </div>
      </div>
    </>
  );
}
