import React, { useState, useEffect } from "react";
import { createContext } from "react";
export const ItemContext = createContext();
export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);
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
  useEffect(() => {
    fetchItems();
  }, []);
  const menItem = items.filter((item) => item.category === "men's clothing");
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
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};
