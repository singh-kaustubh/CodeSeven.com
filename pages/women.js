/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import Link from "next/link";
import { ItemContext } from "../Context/ItemState";
export default function Women() {
  const context = useContext(ItemContext);
  const { womenItem } = context;
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap justify-start -m-4">
            {womenItem != null ? (
              womenItem.map((item) => {
                return (
                  <Link href={`/product/${item.id}`} key={item.id}>
                    <div className=" lg:w-1/5 cursor-pointer shadow-lg m-5 md:w-1/2 p-4 w-full">
                      <a className="block relative rounded overflow-hidden">
                        <img
                          alt="ecommerce"
                          className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block"
                          src={item.image}
                        />
                      </a>
                      <div className="mt-4 text-center md:text-left">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                          {item.title}
                        </h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                          {item.description.slice(0, 100)}...
                        </h2>
                        <p className="mt-1">$ {item.price}</p>
                        <p className="mt-1">S, M, L, XL, XXL</p>
                      </div>
                    </div>
                  </Link>
                );
              })
            ) : (
              <div>No products available! Stay tuned</div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
