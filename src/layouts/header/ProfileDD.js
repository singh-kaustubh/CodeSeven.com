import React from "react";
import Image from "next/image";
import userimg from "../../../assets/images/users/user2.jpg";
import { useEffect, useState } from "react";
import {
  Box,
  Menu,
  Typography,
  Link,
  ListItemButton,
  List,
  ListItemText,
  Button,
  Divider,
} from "@mui/material";
export default function ProfileDD() {
  const [anchorEl4, setAnchorEl4] = useState(null);
  const [admin, setAdmin] = useState("");
  const fetchAdmin = async (token) => {
    const response = await fetch(
      "http://localhost:3000/api/admin/fetchAdminUser",
      {
        method: `POST`,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ token: token }),
      }
    );
    const res = await response.json();
    setAdmin(res.name);
  };
  useEffect(() => {
    const token =
      typeof window !== "undefined" && localStorage.getItem("admin-token");
    fetchAdmin(token);
  }, []);
  const handleClick4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };
  const handleClose4 = () => {
    setAnchorEl4(null);
  };
  return (
    <>
      <Button
        aria-label="menu"
        color="inherit"
        aria-controls="profile-menu"
        aria-haspopup="true"
        onClick={handleClick4}
      >
        <Box display="flex" alignItems="center">
          <Image
            src={userimg}
            alt={userimg}
            width="30"
            height="30"
            className="roundedCircle"
          />
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "flex",
              },
              alignItems: "center",
            }}
          >
            <Typography
              color="textSecondary"
              variant="h5"
              fontWeight="400"
              sx={{ ml: 1 }}
            >
              Hi,
            </Typography>
            <Typography
              variant="h5"
              fontWeight="700"
              sx={{
                ml: 1,
              }}
            >
              {admin}
            </Typography>
          </Box>
        </Box>
      </Button>
    </>
  );
}
