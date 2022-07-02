import React, { useState, useEffect } from "react";
import { createContext } from "react";
export const ItemContext = createContext();
export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [faishonItems, setfaishonItems] = useState([]);
  const fetchItems = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/getProduct", {
        method: "GET",
      });
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchfaishonItems = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d257aac864mshd9c5ce5448c2e97p18d2cejsn9f73baa9e7b4",
        "X-RapidAPI-Host": "chicmi.p.rapidapi.com",
      },
    };
    const response = await fetch(
      "https://chicmi.p.rapidapi.com/calendar_in_city/?city=london&days=7&max_results=10",
      options
    );
    const data = await response.json();
    const temp = data.values.events;
    setfaishonItems(temp);
  };
  useEffect(() => {
    fetchfaishonItems();
  }, []);
  useEffect(() => {
    fetchItems();
  }, []);
  const menItem = items.filter((item) => item.category === "men's clothing");
  const featItems = items.filter((item) => item.availableQty >= 1).slice(0, 8);
  const womenItem = items.filter(
    (item) => item.category === "women's clothing"
  );
  const jeweleryItem = items.filter((item) => item.category === "jewelery");
  const electronicItem = items.filter(
    (item) => item.category === "electronics"
  );

  return (
    <ItemContext.Provider
      value={{
        items,
        menItem,
        womenItem,
        jeweleryItem,
        electronicItem,
        featItems,
        faishonItems,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};
