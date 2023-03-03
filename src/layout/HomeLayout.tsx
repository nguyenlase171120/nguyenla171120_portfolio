import { Stack, createTheme, Box, Tooltip } from "@mui/material";
import Navbar from "../components/Navbar";
import { informationLink } from "../constants";
import { motion } from "framer-motion";
import { styled } from "@mui/styles";
import { useAppSelector } from "../redux/hook";
import AboutMe from "../components/AboutMe";
import Introduce from "../components/Introduce";
import Worked from "../components/Worked";
import NonProject from "../components/NonProject";
import Contact from "../components/Contact";
import Projects from "../components/Projects";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0a192f",
      light: "#DC143C",
    },
    secondary: {
      main: "#64ffda",
    },
  },
  typography: {
    fontFamily: ["Fira Code", "Fira Mono", "Space Mono", "Roboto Mono"].join(
      ","
    ),
  },
});

const BoxStyled = styled(Box)({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  gap: "2rem",
});

const BoxMainStyled = styled(Box)({
  width: "auto",

  position: "fixed",
  bottom: 0,
  left: "3rem",
  right: "0rem",
});

const BoxMotion = motion(BoxMainStyled);

const HomeLayout = () => {
  const { isMobile } = useAppSelector((state) => state.settingStore);

  return (
    <Box sx={{ minHeight: "100vh", position: "relative" }}>
      <Navbar />
      <Stack
        display={"flex"}
        alignItems="center"
        justifyContent="center"
        minHeight={"100vh"}
        marginTop={"40px"}
        paddingX={2}
      >
        <Introduce />
        <AboutMe />
        <Worked />
        <Projects />
        <NonProject />
        <Contact />
      </Stack>
      <BoxMotion
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        display={isMobile ? "none" : "flex"}
        justifyContent={"space-between"}
        alignItems="center"
      >
        <BoxStyled>
          {informationLink.map((item) => {
            return (
              <Tooltip title={item.path} key={item.path}>
                <motion.a
                  whileHover={{ color: "#64ffda", y: -4 }}
                  href={item.path}
                  style={{ color: "#8892b0" }}
                >
                  {item.element}
                </motion.a>
              </Tooltip>
            );
          })}

          <Box
            height="100px"
            width="2px"
            bgcolor={"white"}
            marginLeft="10px"
          ></Box>
        </BoxStyled>

        <Box
          display={"flex"}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          position="absolute"
          bottom={0}
          right={0}
        >
          <motion.h4
            whileHover={{ color: "#64ffda" }}
            className="email_profile"
          >
            nguyenla171120@gmail.com
          </motion.h4>
          <Box
            height="100px"
            width="2px"
            bgcolor={"white"}
            marginTop="8rem"
          ></Box>
        </Box>
      </BoxMotion>
    </Box>
  );
};

export default HomeLayout;
