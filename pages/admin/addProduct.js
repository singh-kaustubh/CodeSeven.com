import React from "react";
import FullLayout from "../../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../../src/theme/theme";
import {
  Grid,
  Stack,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  FormControl,
  Button,
} from "@mui/material";
import BaseCard from "../../src/components/baseCard/BaseCard";
export default function AddProducts() {
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
                      control={<Radio />}
                      label="Men's Clothing"
                    />
                    <FormControlLabel
                      value="women's clothing"
                      control={<Radio />}
                      label="Women's Clothing"
                    />
                    <FormControlLabel
                      value="electronics"
                      control={<Radio />}
                      label="Electronics"
                    />
                    <FormControlLabel
                      value="jewelery"
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
                    aria-readonly="true"
                    label="Total Available Quantity"
                    variant="outlined"
                  />
                </div>
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
                      control={<Radio />}
                      label="Color Variant (inclusive of sizes)"
                    />
                    <FormControlLabel
                      value="size"
                      control={<Radio />}
                      label="Size variant"
                    />
                    <FormControlLabel
                      value="none"
                      control={<Radio />}
                      label="None"
                    />
                  </RadioGroup>
                </FormControl>
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
