import React from "react";
import { Stack, Typography, Button, Box } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import PolylineIcon from "@mui/icons-material/Polyline";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <Stack
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        maxWidth: { xl: "40%", md: "40%", sm: "50%" },
        marginTop: { sm: "2rem", xs: "2rem" },
      }}
      minHeight="80vh"
      paddingY="20px"
      component={motion.div}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 1 }}
      id="contact"
    >
      <Box
        display={"flex"}
        flexDirection="column"
        rowGap={3}
        textAlign="center"
        justifyContent={"center"}
        minHeight={"60%"}
      >
        <Typography variant="body1" sx={{ color: "#64ffda" }}>
          04. What's Next?
        </Typography>
        <Typography variant="h3">Get In Touch</Typography>
        <Typography variant="body1">
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </Typography>

        <Box display={"inline-block"}>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            sx={{ zIndex: "20" }}
          >
            Say hello
          </Button>
        </Box>
      </Box>

      <Stack
        sx={{ cursor: "pointer" }}
        component={motion.a}
        whileHover={{ color: "#64ffda" }}
        animate={{ textDecoration: "none", color: "#8892b0" }}
        zIndex={20}
        href={"https://github.com/nguyenlase171120"}
        target={"_blank"}
      >
        <Typography variant="caption" color="inherit">
          Built by nguyenla171120
        </Typography>
        <Box
          display={"flex"}
          gap={0.5}
          alignItems={"center"}
          justifyContent="center"
        >
          <StarOutlineIcon />
          <Typography variant="caption">12</Typography>

          <PolylineIcon />
          <Typography variant="caption">21232</Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Contact;
