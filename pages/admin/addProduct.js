import React, { useState } from "react";
import FullLayout from "../../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../../src/theme/theme";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ColorVar from "../../Components/ColorVar.tsx";
import VarImg from "../../Components/VarImg.tsx";
import {
  Grid,
  Stack,
  TextField,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  FormControl,
  Button,
} from "@mui/material";
import BaseCard from "../../src/components/baseCard/BaseCard";
export default function AddProducts() {
  const [colorShow, setColorShow] = useState(false);
  const [sizeShow, setSizeShow] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [availQty, setAvailQty] = useState();
  const [desc, setDesc] = useState("");
  const [defaultImg, setDefaultImg] = useState("");
  const handleTitlechange = (e) => {
    const { value } = e.target;
    setTitle(value);
  };
  const handlePricechange = (e) => {
    const { value } = e.target;
    setPrice(value);
  };
  const handleDescchange = (e) => {
    const { value } = e.target;
    setDesc(value);
  };
  const handleDefaultImgchange = (e) => {
    const { value } = e.target;
    setDefaultImg(value);
  };
  const handleAvailQtychange = (e) => {
    const { value } = e.target;
    setAvailQty(value);
  };
  const handleChangeVariants = (e) => {
    if (e.target.name == "color") {
      setColorShow(true);
      setSizeShow(false);
    } else if (e.target.name == "size") {
      setColorShow(false);
      setSizeShow(true);
    } else {
      setColorShow(false);
      setSizeShow(false);
    }
  };
  const [category, setCategory] = useState("");
  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };
  const [color, setColor] = useState({
    "Color 1": {
      "Size 1": "Size 1 Quantity",
      "Size 2": "Size 2 Quantity",
    },
    Color: {
      "Size 1": "Size 1 Quantity",
      "Size 2": "Size 2 Quantity",
    },
  });
  const [varImage, setVarImage] = useState({
    "Color 1": "Link to image 1",
    "Color 2": "Link to image 2",
  });
  const handleColorChange = (e) => {
    const { name, value } = e.target;
    if (name == "color") {
      setColor(value);
    } else if (name == "varImage") {
      setVarImage(value);
    }
  };
  const [sizeQty, setSizeQty] = useState([{ variant: "", qty: 0 }]);
  const handleAddSize = () => {
    setSizeQty([...sizeQty, { variant: "", qty: 0 }]);
  };
  const handleRemoveSize = (index) => {
    const list = [...sizeQty];
    list.splice(index, 1);
    setSizeQty(list);
  };
  const handleSizeVariant = (e, index) => {
    const { name, value } = e.target;
    const list = [...sizeQty];
    list[index][name] = value;
    setSizeQty(list);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/api/admin/addProduct", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      // body: JSON.stringify(data),
    });
    const response = await res.json();
    if (response.success) {
      toast.success(response.message, {
        theme: "dark",
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (!response.success) {
      toast.error(response.error, {
        theme: "dark",
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <style jsx global>{`
        footer {
          display: none;
        }
      `}</style>
      <CssBaseline />
      <FullLayout>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={12}>
            <BaseCard title="Add a product">
              <Stack spacing={3}>
                <TextField
                  id="title"
                  value={title}
                  onChange={(e) => {
                    handleTitlechange(e);
                  }}
                  label="Title"
                  type="text"
                  variant="outlined"
                  autoComplete="off"
                  defaultValue=""
                />
                <FormControl className="flex">
                  <FormLabel id="demo-radio-buttons-group-label">
                    Category
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Color"
                    className="flex"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="men's clothing"
                      onChange={handleChangeCategory}
                      control={<Radio />}
                      label="Men's Clothing"
                    />
                    <FormControlLabel
                      value="women's clothing"
                      onChange={handleChangeCategory}
                      control={<Radio />}
                      label="Women's Clothing"
                    />
                    <FormControlLabel
                      value="electronics"
                      onChange={handleChangeCategory}
                      control={<Radio />}
                      label="Electronics"
                    />
                    <FormControlLabel
                      value="jewelery"
                      onChange={handleChangeCategory}
                      control={<Radio />}
                      label="Jewellery"
                    />
                  </RadioGroup>
                </FormControl>
                <TextField
                  id="price"
                  label="Price"
                  value={price}
                  name="price"
                  onChange={(e) => {
                    handlePricechange(e);
                  }}
                  type="number"
                  variant="outlined"
                  autoComplete="off"
                />
                <TextField
                  id="desc"
                  value={desc}
                  label="Description"
                  name="desc"
                  onChange={(e) => {
                    handleDescchange(e);
                  }}
                  multiline
                  rows={4}
                  autoComplete="off"
                />
                <div className="flex space-x-2 justify-between">
                  {" "}
                  <TextField
                    className="w-1/2"
                    id="img_default"
                    name="defaultImg"
                    onChange={(e) => {
                      handleDefaultImgchange(e);
                    }}
                    value={defaultImg}
                    label="Default Image"
                    variant="outlined"
                  />{" "}
                  <TextField
                    className="w-1/2"
                    id="availableQty"
                    name="availQty"
                    value={availQty}
                    onChange={(e) => {
                      handleAvailQtychange(e);
                    }}
                    label="Total Available Quantity"
                    variant="outlined"
                  />
                </div>
                {category !== "electronics" && (
                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">
                      Variants
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="Color"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="color"
                        name="color"
                        control={<Radio />}
                        label="Color Variants (inclusive of sizes)"
                        onChange={handleChangeVariants}
                      />
                      {colorShow && (
                        <div
                          className="py-20 bg-gray-200 h-full bg-opacity-70 transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0"
                          id="modal"
                        >
                          <div
                            role="alert"
                            className="container mx-auto w-11/12 md:w-2/3 max-w-xl"
                          >
                            <div className="relative py-8 px-5 md:px-10 text-lg bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md rounded border border-gray-400">
                              <div className="w-full text-gray-600 mb-3"></div>
                              <h1 className="text-gray-800 dark:text-white text-center  font-lg font-bold tracking-normal leading-tight mb-4">
                                Enter the colors with their size/quantity with
                                thier images in the following faishon!
                              </h1>
                              <label
                                htmlFor="color"
                                className="text-gray-800 dark:text-white  text-sm font-bold leading-tight tracking-normal"
                              >
                                Color Variants
                              </label>
                              <ColorVar />
                              <label
                                htmlFor="varImages"
                                className="text-gray-800 dark:text-white  text-sm font-bold leading-tight tracking-normal"
                              >
                                Variant Images
                              </label>
                              <VarImg />
                              <div className="flex items-center space-x-1 justify-start w-full">
                                {/* <button
                                    type="submit"
                                    className="bg-red-800 hover:scale-105 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                                  >
                                    Submit
                                  </button> */}
                                {/* <button
                                    className="bg-gray-100 hover:scale-105 uppercase text-black font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                                    onClick={() => setColorShow(false)}
                                  >
                                    Cancel
                                  </button> */}
                              </div>

                              <button
                                className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
                                aria-label="close modal"
                                onClick={() => setColorShow(false)}
                                role="button"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon icon-tabler icon-tabler-x"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 24 24"
                                  strokeWidth="2.5"
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path stroke="none" d="M0 0h24v24H0z" />
                                  <line x1="18" y1="6" x2="6" y2="18" />
                                  <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                      <FormControlLabel
                        value="size"
                        name="size"
                        control={<Radio />}
                        label="Size Variants"
                        onChange={handleChangeVariants}
                      />
                      {sizeShow && (
                        <div className="block">
                          {sizeQty.map((item, index) => (
                            <div
                              className="flex my-2 justify-between space-x-2"
                              key={index}
                            >
                              {index == sizeQty.length - 1 && (
                                <Button
                                  onClick={(e) => handleAddSize(e, index)}
                                  variant="outlined"
                                >
                                  <span className="text-2xl">+</span>
                                </Button>
                              )}
                              <TextField
                                name="variant"
                                type={"text"}
                                id="variant"
                                onChange={(e) => {
                                  handleSizeVariant(e, index);
                                }}
                                value={item.variant}
                                className="w-full"
                                label="Size Variant"
                                variant="outlined"
                                required
                                placeholder="Enter the size variant (M/L/XL....)"
                              />
                              <TextField
                                type={"number"}
                                className="w-full"
                                value={item.qty}
                                name="qty"
                                required
                                onChange={(e) => {
                                  handleSizeVariant(e, index);
                                }}
                                label="Variant available quantity"
                                variant="outlined"
                                placeholder="Enter variant's available units"
                              />
                              {sizeQty.length > 1 && (
                                <Button
                                  onClick={() => handleRemoveSize(index)}
                                  variant="outlined"
                                  color="error"
                                >
                                  <span className="text-2xl">-</span>
                                </Button>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                      <FormControlLabel
                        value="none"
                        name="none"
                        control={<Radio />}
                        label="None"
                        onChange={handleChangeVariants}
                      />
                    </RadioGroup>
                  </FormControl>
                )}
              </Stack>
              <br />
              <Button variant="outlined" mt={2}>
                Submit
              </Button>
            </BaseCard>
          </Grid>
        </Grid>
      </FullLayout>
    </ThemeProvider>
  );
}
