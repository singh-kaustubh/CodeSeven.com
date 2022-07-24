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
                <TextField
                  type="text"
                  id="category"
                  label="Category"
                  variant="outlined"
                  autoComplete="off"
                />
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
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Both Color and Size Variants"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Only Size Variants"
                  />
                </FormGroup>
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
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
