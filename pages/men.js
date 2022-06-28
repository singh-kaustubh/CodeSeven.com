/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";
export default function Men() {
  const [notes, setNotes] = useState([]);
  const fetchItem = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/men's%20clothing",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      console.log(data);
      console.log(typeof data);
      setNotes(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchItem();
    console.log();
  }, []);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap justify-center -m-4">
            {notes != null ? (
              notes.map((note, index) => {
                return (
                  <Link href={`/product/${note.title}`} key={index}>
                    <div className=" lg:w-1/5 cursor-pointer shadow-lg m-5 md:w-1/2 p-4 w-full">
                      <a className="block relative rounded overflow-hidden">
                        <img
                          alt="ecommerce"
                          className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block"
                          src={note.image}
                        />
                      </a>
                      <div className="mt-4 text-center md:text-left">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                          {note.title}
                        </h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                          {note.description.slice(0, 100)}...
                        </h2>
                        <p className="mt-1">$ {note.price}</p>
                        <p className="mt-1">S, M, L, XL, XXL</p>
                      </div>
                    </div>
                  </Link>
                );
              })
            ) : (
              <div>Chutiya</div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
