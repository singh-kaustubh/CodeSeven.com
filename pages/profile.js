/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
export default function Profile() {
  const [orders, setOrders] = useState([]);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const router = useRouter();
  const fetchData = async (token) => {
    try {
      const res = await fetch("http://localhost:3000/api/fetchUser", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          token: token,
        }),
      });
      const response = await res.json();
      setName(response.name);
      setEmail(response.email);
      setPhone(response.phone);
      const d = await fetch("http://localhost:3000/api/getUserorders", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email: response.email }),
      });
      const data = await d.json();
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const token =
      typeof window !== "undefined" && localStorage.getItem("auth-token")
        ? localStorage.getItem("auth-token")
        : "";
    if (token.length) {
      fetchData(token);
      // console.log(orders);
    } else {
      router.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main className="profile-page min-h-[50vh]">
      <section className="relative block" style={{ height: "500px" }}>
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: "70px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section className="relative py-16 bg-gray-300">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative">
                    <img
                      alt="..."
                      src={"/images/profile.jpg"}
                      className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                      style={{ maxWidth: "150px" }}
                    />
                  </div>
                </div>
                <div className="flex w-full lg:w-4/12 px-4 justify-center lg:order-3 lg:text-right lg:self-center">
                  <div className="py-6 px-3 mt-32 sm:mt-0">
                    <button
                      className="bg-red-800 hover:scale-105 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                    >
                      Edit Profile
                    </button>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-lg text-gray-500 block tracking-wide">
                        {orders.length} {orders.length > 1 ? "Orders" : "Order"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-5">
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800">
                  {name}
                </h3>
                <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-4 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                  <div className="relative flex-grow w-full">
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
                      placeholder={email}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="relative flex-grow w-full">
                    <label
                      htmlFor="number"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Phone
                    </label>
                    <input
                      type="number"
                      id="number"
                      name="number"
                      placeholder={phone}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div className="relative flex-grow w-full">
                    <label
                      htmlFor="password"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="***********"
                      id="password"
                      name="password"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10 py-10 border-t border-gray-300 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="flex flex-col w-full">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                          <table className="min-w-full border text-2xl">
                            <thead className="bg-gray-800 border-b">
                              <tr>
                                <th
                                  scope="col"
                                  className="font-medium text-white px-6 py-4 text-2xl"
                                >
                                  #OrderID
                                </th>
                                <th
                                  scope="col"
                                  className="text-2xl font-medium text-white px-6 py-4 "
                                >
                                  Items
                                </th>
                                <th
                                  scope="col"
                                  className="text-2xl font-medium text-white px-6 py-4 "
                                >
                                  Amount
                                </th>
                                <th
                                  scope="col"
                                  className="text-2xl font-medium text-white px-6 py-4 "
                                >
                                  Date
                                </th>
                                <th
                                  scope="col"
                                  className="text-2xl font-medium text-white px-6 py-4 "
                                >
                                  Status
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {orders.map((item, index) => {
                                return (
                                  <tr
                                    key={index}
                                    className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                                  >
                                    <Link
                                      href={`/postcheckout?orderId=${item.orderId}`}
                                    >
                                      <td className=" cursor-pointer px-6 py-4 whitespace-nowrap text-sm font-medium text-cyan-600 underline">
                                        {item.orderId}
                                      </td>
                                    </Link>
                                    <td className="flex justify-center text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      {item.productInfo.map((obj) => {
                                        return `${obj.title.slice(0, 15)}...`;
                                      })}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      ${item.amount}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      {item.createdAt.slice(0, 10)}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                      {item.status}
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
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
