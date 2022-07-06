/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../store/carttSlice";
export default function Post({ data }) {
  const router = useRouter();
  const { slug } = router.query;
  const item = data.filter((item) => item._id === slug)[0];
  const url = `https://api.postalpincode.in/pincode`;
  const [pin, setPin] = useState(0);
  const [res, setRes] = useState(null);
  const onChangePin = (e) => {
    setPin(e.target.value);
  };
  const onClick = async () => {
    try {
      let d = await fetch(`${url}/${pin}`, {
        method: "GET",
      });
      let data = await d.json();
      let result = data[0].Status;
      if (result === "Success") {
        setRes(true);
      } else {
        setRes(false);
      }
    } catch (err) {
      console.log(err);
    }
    setPin("");
  };
  const dispatch = useDispatch();
  const handleAddtoCart = (product) => {
    dispatch(actions.addToCart(product));
  };
  const [size, setSize] = useState(item.size[0]);
  const [color, setColor] = useState(
    item._color ? Object.keys(item._color)[0] : item.color
  );
  const [img, setImg] = useState(item.img);
  const refreshVariantColor = (size, color) => {
    setColor(color);
    setSize(size);
    setImg(
      item.var_img
        ? item.var_img[color]
        : "https://shirtspace-web-assets.s3.us-west-2.amazonaws.com/ig9uij9e3uikligurral4f3hxc9v"
    );
    setColsize(item._color ? Object.keys(item._color[color]) : item.size);
  };
  const refreshVariantSize = (size) => {
    setSize(size);
  };
  const [colsize, setColsize] = useState(
    item._color ? Object.keys(item._color[color]) : item.size
  );
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden pt-20">
        <div className="container px-5 py-16 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap ">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto px-24 object-cover object-top rounded shadow-lg"
              src={img}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {item.title}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-red-900"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-red-900"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-red-900"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-red-900"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-red-900"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">
                    {item.rating.count}
                  </span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
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
                  <a className="text-gray-500">
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
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed text-justify">{item.desc}</p>
              <div className="flex flex-wrap mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex mt-1">
                  {item._color &&
                    Object.keys(item._color).map((val, index) => {
                      return (
                        <div key={index}>
                          {val == "red" && (
                            <button
                              onClick={() => refreshVariantColor(size, "red")}
                              className="border-2 border-gray-900 ml-1 bg-red-900 rounded-full w-6 h-6 focus:outline-none"
                            ></button>
                          )}
                          {val == "green" && (
                            <button
                              onClick={() => refreshVariantColor(size, "green")}
                              className="border-2 border-gray-900 ml-1 bg-green-700 rounded-full w-6 h-6 focus:outline-none"
                            ></button>
                          )}
                          {val == "yellow" && (
                            <button
                              onClick={() =>
                                refreshVariantColor(size, "yellow")
                              }
                              className="border-2 border-gray-900 ml-1 bg-yellow rounded-full w-6 h-6 focus:outline-none"
                            ></button>
                          )}
                          {val == "blue" && (
                            <button
                              onClick={() => refreshVariantColor(size, "blue")}
                              className="border-2 border-gray-900 ml-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none"
                            ></button>
                          )}
                          {val == "purple" && (
                            <button
                              onClick={() =>
                                refreshVariantColor(size, "purple")
                              }
                              className="border-2 border-gray-900 ml-1 bg-purple rounded-full w-6 h-6 focus:outline-none"
                            ></button>
                          )}
                          {val == "cyan" && (
                            <button
                              onClick={() => refreshVariantColor(size, "cyan")}
                              className="border-2 border-gray-900 ml-1 bg-purple rounded-full w-6 h-6 focus:outline-none"
                            ></button>
                          )}
                          {val == "black" && (
                            <button
                              onClick={() => refreshVariantColor(size, "black")}
                              className="border-2 border-gray-900 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"
                            ></button>
                          )}
                          {val == "white" && (
                            <button
                              onClick={() => refreshVariantColor(size, "white")}
                              className="border-2 border-gray-900 ml-1 bg-white rounded-full w-6 h-6 focus:outline-none"
                            ></button>
                          )}
                        </div>
                      );
                    })}
                </div>
                {item.size.length != 0 && (
                  <div className="flex ml-6 items-center">
                    <span className="mr-3">Size</span>
                    <div className="relative">
                      <select
                        value={size}
                        onChange={(e) => {
                          refreshVariantSize(e.target.value);
                        }}
                        className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-red-900 text-base pl-3 pr-10"
                      >
                        {colsize.map((val, index) => {
                          return (
                            <option value={val} key={index}>
                              {val}
                            </option>
                          );
                        })}
                      </select>
                      <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                )}
                <button className="flex ml-2 text-white bg-red-900 border-0 py-2 px-1  focus:outline-none hover:scale-105 rounded">
                  Buy Now
                </button>
                <button
                  className="flex ml-2 text-white bg-red-900 border-0 py-2 px-1 focus:outline-none hover:scale-105 rounded"
                  onClick={() => handleAddtoCart({ ...item, size, color, img })}
                >
                  Add to Cart
                </button>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${item.price}
                </span>
                <div className="flex mx-auto">
                  <input
                    className="px-2 border-2 border-gray-900 mx-auto rounded-md"
                    type="text"
                    placeholder=" Enter your pincode"
                    id="pin"
                    name="pin"
                    onChange={onChangePin}
                  />
                  <button
                    className="flex ml-2 text-white bg-red-900 border-0 py-2 px-6 focus:outline-none hover:scale-105 rounded-md"
                    onClick={onClick}
                  >
                    Check
                  </button>
                </div>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
              {!res && res !== null && (
                <div className="text-red-900 text-center text-sm mt-3">
                  {" "}
                  The pincode is currently not in our trajectory
                </div>
              )}
              {res && res !== null && (
                <div className="text-green-400 text-center text-sm mt-3">
                  {" "}
                  The pincode is servicable
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/getProduct", {
    method: "GET",
  });
  const data = await response.json();
  return {
    props: { data },
  };
}
