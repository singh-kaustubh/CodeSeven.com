/* eslint-disable @next/next/no-img-element */
import React from "react";
export default function login() {
  let sectionStyle = {
    height: "100vh",
    backgroundImage: `url(${"/images/signup4.jpg"})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  let mybackStyle = {
    height: "100%",
    backgroundImage: `url(${"/images/signup.png"})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      <section className="h-full gradient-form " style={mybackStyle}>
        <div className="container py-24 px-6 h-full">
          <div className="flex justify-center items-center flex-wrap h-full text-gray-800">
            <div className="xl:w-10/12">
              <div className="block bg-white shadow-2xl rounded-lg">
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className="lg:w-6/12 px-4 md:px-0">
                    <div className="md:p-12 md:mx-6">
                      <div className="text-center">
                        <img
                          className="mx-auto w-48 -my-4"
                          src={"images/logo.png"}
                          alt="logo"
                        />
                        <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">
                          CodeSeven.com
                        </h4>
                      </div>
                      <form>
                        <p className="mb-4">Sign up to get exciting offers!</p>

                        <div className="mb-4">
                          <input
                            type="email"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Email"
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="number"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Mobile Number"
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="password"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Password"
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="password"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput1"
                            placeholder="Confirm Password"
                          />
                        </div>
                        <div className="text-center pt-1 mb-12 pb-1">
                          <button
                            className="inline-block px-6 py-2.5 bg-red-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:scale-105 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                          >
                            Sign Up
                          </button>
                        </div>
                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2">Already have an account?</p>
                          <button
                            type="button"
                            className="flex text-lg px-3 text-white bg-red-900 border-0 focus:outline-none hover:scale-105 rounded"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                          >
                            Log In
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
                    style={sectionStyle}
                  >
                    <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                      <p className="text-3xl font-semibold mb-6">
                        &quot;Fashion is the part of the daily air and it
                        changes all the time, with all events. You can even see
                        the approaching of a revolution in clothes. You can see
                        and feel everything in clothes.&quot;
                        <br />
                        -Diana Vreeland
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
