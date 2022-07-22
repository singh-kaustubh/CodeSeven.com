/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
export default function Forget() {
  let sectionStyle = {
    height: "100%",
    backgroundImage: `url(${"/images/signup2.jpg"})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  return (
    <div>
      <section
        className="min-h-[50vh] w-full h-full py-24"
        style={sectionStyle}
      >
        <div className="container h-full">
          <div className="flex justify-center items-center flex-wrap h-full text-gray-800">
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
              <div className="flex justify-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                  className="h-[200px]"
                  alt="Phone image"
                />
              </div>
              <form onSubmit={handleSubmit}>
                <h1 className="text-white text-center mb-6 text-xl">
                  Enter email address and phone for a link to reset password!
                </h1>
                <div className="mb-6">
                  <input
                    type="email"
                    required
                    className="form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email address"
                  />
                </div>

                <div className="mb-6">
                  <input
                    type="number"
                    required
                    className="form-control block w-full px-4 py-2 text-lg font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Phone"
                    max={9999999999}
                    min={1000000000}
                  />
                </div>
                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Reset Password
                </button>
              </form>
              <div className="flex justify-center flex-wrap mt-6">
                <div className="text-center">
                  <Link href="/signup" className="text-white">
                    <span className="text-white cursor-pointer">
                      Create new account
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
