import { Drawer, Stack, Button } from "@mui/material";
import { Fragment, useState } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { settings } from "./Navbar";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";

const LinkMobile = styled(Link)({
  textTransform: "none",
  color: "#ccd6f6",
  textDecoration: "none",
  fontFamily: "Space Mono",
  fontSize: "16px",
  fontWeight: "400",
  display: "grid",
  placeItems: "center",
  gap: "0.5rem",

  "&:hover": {
    color: "#64ffda",
  },
});

const DrawerMobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Fragment>
      <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
        <Stack
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={"1.5rem"}
          justifyContent={"center"}
          sx={{ background: "#112240" }}
          height="100%"
          width="300px"
        >
          {settings.map((item) => {
            return (
              <LinkMobile to={item.path} key={item.path}>
                <Typography variant="body1">{item.count}</Typography>
                <Typography variant="h6">{item.title}</Typography>
              </LinkMobile>
            );
          })}
          <Button variant="outlined" color="secondary" sx={{ width: "80%" }}>
            Resume
          </Button>
        </Stack>
      </Drawer>

      <IconButton
        size={"large"}
        sx={{ color: "#64ffda", marginLeft: "auto" }}
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon />
      </IconButton>
    </Fragment>
  );
};

export default DrawerMobile;