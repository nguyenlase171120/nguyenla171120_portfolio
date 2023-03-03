import { Stack, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { ICurrentWork } from "../../constants";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useAppSelector } from "../../redux/hook";

const WorkDetail = ({
  companyName,
  endDate,
  haveWorked,
  position,
  startDate,
  mainWebsite,
}: ICurrentWork) => {
  const { isMobile } = useAppSelector((state) => state.settingStore);

  return (
    <Stack
      direction={"column"}
      display={"flex"}
      spacing={2}
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      key={companyName}
      sx={{ mt: { xs: "16px", sm: "16px", lg: "0px" } }}
    >
      <Box display={"flex"} gap={2}>
        <Typography variant={isMobile ? "body1" : "h6"}>{position}</Typography>
        <Typography
          component={motion.a}
          target="_blank"
          href={mainWebsite}
          variant={isMobile ? "body1" : "h6"}
          sx={{ color: "#64ffda", textDecoration: "none" }}
          className="hover-underline-animation"
        >
          @{companyName}
        </Typography>
      </Box>

      <Box display={"flex"} gap={2} color="#a8b2d1">
        <Typography variant="body2" align="justify">
          {startDate}
        </Typography>
        <Typography variant="body2" align="justify">
          {endDate}
        </Typography>
      </Box>

      <Box display={"flex"} flexDirection="column" justifyContent="center">
        {haveWorked.map((desc) => {
          return (
            <Box
              key={desc}
              display="flex"
              alignItems={"start"}
              justifyContent="flex-start"
              marginLeft={"-10px"}
            >
              <ArrowRightIcon sx={{ color: "#64ffda" }} />
              <Typography paragraph sx={{ color: "#8892b0" }}>
                {desc}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Stack>
  );
};

export default WorkDetail;
