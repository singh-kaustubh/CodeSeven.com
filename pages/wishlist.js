/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { wishlistActions } from "../store/wishSlice";
export default function Wishlist() {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);
  const handleRemove = (item) => {
    dispatch(wishlistActions.removeFromWishlist(item));
  };
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden min-h-[50vh]">
        <div className="container px-10 py-24 mx-auto">
          <div className=" divide-y-2 divide-gray-100">
            <div className="flex justify-center items-center w-full text-xl flex-col space-y-4 ">
              <div className="font-bold font-serif text-3xl">
                {wishlist.wishlistItems.length
                  ? "Your wishlist!"
                  : "Your wishlist is empty 😢"}
              </div>
              {wishlist.wishlistItems.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center w-full mx-auto border-2 shadow-md p-2 sm:flex-row flex-col"
                  >
                    <div className="sm:w-30 sm:h-30 sm:mb-2 p-2 w-28 sm:mr-10 inline-flex items-center justify-center rounded-full  flex-shrink-0 ">
                      <img
                        src={item.img}
                        className="md:block object-center object-cover"
                      />
                    </div>
                    <div className="md:flex-grow justify-center text-justify">
                      <div className="md:flex justify-between">
                        <p className="text-xl font-black leading-none my-1 text-gray-800">
                          <a
                            passHref={true}
                            className="cursor-pointer align-middle"
                            href={`/product/${item._id}`}
                          >
                            {item.title}
                          </a>
                        </p>
                        <button
                          onClick={() => handleRemove(item)}
                          className="flex text-sm  text-white bg-red-900 border-0 px-1 focus:outline-none hover:scale-105 rounded"
                        >
                          Remove
                        </button>
                      </div>
                      <p className="leading-relaxed text-md  text-justify">
                        {item.desc}
                      </p>
                      <div className="flex items-center justify-between pt-5 pr-6">
                        <div className="flex items-center space-x-2">
                          <Link
                            className="cursor-pointer align-middle"
                            href={`/product/${item._id}`}
                          >
                            <button className="flex text-sm py-1  text-white bg-red-900 border-0 px-1 focus:outline-none hover:scale-105 rounded">
                              Buy now
                            </button>
                          </Link>
                        </div>
                        <p className="text-xl  bg-gree leading-none -mr-3 text-gray-800">
                          <b>Current Price</b>: ${item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
