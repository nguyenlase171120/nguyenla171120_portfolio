import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Slide,
  useScrollTrigger,
  Stack,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/styles";
import DrawerMobile from "./DrawerMobile";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

export const LinkResume = styled(HashLink)({
  textTransform: "none",
  color: "#ccd6f6",
  textDecoration: "none",
  fontFamily: "Space Mono",
  fontSize: "13px",
  fontWeight: "400",

  "&:hover": {
    color: "#64ffda",
  },
});

const MotionLink = motion(LinkResume);

export const settings = [
  {
    count: "01. ",
    title: "About",
    path: "#aboutMe",
    duration: 0.2,
  },
  {
    count: "02. ",
    title: "Experience",
    path: "#experiences",
    duration: 0.4,
  },
  {
    count: "03. ",
    title: "Work",
    path: "#projects",
    duration: 0.6,
  },
  {
    count: "04. ",
    title: "Contact",
    path: "#contact",
    duration: 0.8,
  },
];

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HideOnScroll>
      <AppBar
        elevation={scrollPosition > 300 ? 2 : 0}
        sx={{ padding: "0px 1.5rem", color: "#ccd6f6" }}
      >
        <Toolbar sx={{ height: "100px" }}>
          <HashLink to="#introduce" smooth>
            <img
              alt=""
              src={
                "https://images.all-free-download.com/images/graphiclarge/animal_logo_illustration_vintage_vector_586763.jpg"
              }
              width={60}
              height={60}
              style={{ borderRadius: "50%" }}
            />
          </HashLink>
          {isMobile ? (
            <DrawerMobile />
          ) : (
            <Stack
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              gap={"1.5rem"}
              flexGrow={1}
              justifyContent={"end"}
            >
              {settings.map((item) => {
                return (
                  <MotionLink
                    to={item.path}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeInOut", delay: item.duration }}
                    key={item.path}
                    className="hover-underline-animation"
                    smooth
                  >
                    <span style={{ color: "#64ffda" }}>{item.count}</span>
                    {item.title}
                  </MotionLink>
                );
              })}

              <Link
                to="https://drive.google.com/file/d/1T3-EXekCKJfHhX8lbBOE_msCtp7RXpWR/view?usp=share_link"
                target={"_blank"}
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{ padding: "0.5rem 1rem" }}
                  variant="outlined"
                  color="secondary"
                  component={motion.div}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ease: "easeInOut", delay: 1 }}
                >
                  Resume
                </Button>
              </Link>
            </Stack>
          )}
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
