import React from "react";
import { Stack, Typography, Button, Box } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import PolylineIcon from "@mui/icons-material/Polyline";

const Contact = () => {
  return (
    <Stack
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      sx={{ maxWidth: { xl: "40%" } }}
      minHeight="100vh"
      paddingY="20px"
    >
      <Box
        display={"flex"}
        flexDirection="column"
        rowGap={3}
        textAlign="center"
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
          <Button variant="outlined" color="secondary" size="large">
            Say hello
          </Button>
        </Box>
      </Box>

      <Box>
        <Typography variant="caption">Built by nguyenla171120</Typography>
        <Box
          display={"flex"}
          gap={2}
          alignItems={"center"}
          justifyContent="center"
        >
          <Typography variant="caption">
            <StarOutlineIcon />
            12
          </Typography>

          <Typography variant="caption">
            <PolylineIcon />
            21232
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
};

export default Contact;
