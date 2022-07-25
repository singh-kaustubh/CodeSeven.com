import React, { useState } from "react";
import FullLayout from "../../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../../src/theme/theme";
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
  const handleTitlechange = (e) => {
    const { value } = e.target;
    setTitle(value);
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
  const [sizeQty, setSizeQty] = useState([{ variant: "", qty: 0 }]);
  const handleAdd = () => {
    setSizeQty([...sizeQty, { variant: "", qty: 0 }]);
  };
  const handleRemove = (index) => {
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
                  type="number"
                  variant="outlined"
                  autoComplete="off"
                />
                <TextField
                  id="desc"
                  label="Description"
                  multiline
                  rows={4}
                  autoComplete="off"
                />
                <div className="flex space-x-2 justify-between">
                  {" "}
                  <TextField
                    className="w-1/2"
                    id="img_default"
                    label="Default Image"
                    variant="outlined"
                  />{" "}
                  <TextField
                    className="w-1/2"
                    id="availableQty"
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
                        <div className="flex space-x-2 justify-between">
                          {" "}
                          <TextField
                            className="w-1/2"
                            id="img_default"
                            label="Default Image"
                            variant="outlined"
                          />{" "}
                          <TextField
                            className="w-1/2"
                            id="availableQty"
                            label="Total Available Quantity"
                            variant="outlined"
                          />
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
                                  onClick={(e) => handleAdd(e, index)}
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
                                  onClick={() => handleRemove(index)}
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
