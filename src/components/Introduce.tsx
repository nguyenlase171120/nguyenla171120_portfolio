import { Stack, Typography, Button, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { theme } from "../layout/HomeLayout";
import { setMobileState } from "../redux/settingSlice";
import { useEffect } from "react";
import { useAppDispatch } from "../redux/hook";

const Introduce = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setMobileState(isMobile));
  }, [isMobile]);

  return (
    <Stack
      display={"flex"}
      flexDirection="column"
      alignItems={"start"}
      justifyContent="center"
      gap="0.5rem"
      fontFamily={"monospace"}
      sx={{
        maxWidth: { lg: "50%", md: "70%" },
      }}
      component={"section"}
      minHeight="100vh"
    >
      <Typography
        variant="body1"
        color="secondary"
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", delay: isMobile ? 0.4 : 1.4 }}
      >
        Hi, my name is
      </Typography>

      <Typography
        color="#ccd6f6"
        variant="h2"
        sx={{ fontSize: { xs: "28px", sm: "32px", lg: "50px" } }}
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", delay: isMobile ? 0.6 : 1.6 }}
      >
        Le Anh Nguyen
      </Typography>

      <Typography
        variant="h3"
        color="#8892b0"
        sx={{ fontSize: { xs: "26px", sm: "30px", lg: "45px" } }}
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", delay: isMobile ? 0.8 : 1.8 }}
      >
        I build things for the web.
      </Typography>

      <Typography
        color="#8892b0"
        sx={{
          width: { lg: "80%" },
          margin: "1rem 0px",
        }}
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", delay: isMobile ? 1 : 2 }}
      >
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at{" "}
        <span style={{ color: "#64ffda" }}>Upstatement.</span>
      </Typography>

      <Button
        variant="outlined"
        color="secondary"
        sx={{ padding: "1rem 3rem" }}
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", delay: isMobile ? 1.2 : 2.2 }}
      >
        Checkout my resume
      </Button>
    </Stack>
  );
};

export default Introduce;