import { Grid, Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CURRENT_WORK, ICurrentWork } from "../constants";
import WorkDetail from "./workJobs/WorkDetail";

const ButtonMotion = motion(Button);
const Worked = () => {
  const [companyDetail, setCompanyDetail] = useState<ICurrentWork>({
    companyName: "",
    endDate: "",
    haveWorked: [""],
    position: "",
    startDate: "",
    mainWebsite: "",
  });
  const [activeID, setActiveID] = useState<string>("FPT Software");

  useEffect(() => {
    showWorkDetail();
  }, []);

  const showWorkDetail = (companyName: string = "FPT Software") => {
    const companySelected = CURRENT_WORK.find(
      (value) => value.companyName === companyName
    );

    if (companySelected) {
      setCompanyDetail(companySelected);
      setActiveID(companyName);
    }
  };
  return (
    <Grid
      container
      sx={{
        maxWidth: { xl: "50%", lg: "60%", md: "60%" },
        paddingX: { sm: "10px", md: "10px" },
      }}
      direction="column"
      justifyContent={"center"}
      alignItems={"center"}
      rowGap={3}
      minHeight={"100vh"}
      component={motion.div}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      spacing={3}
      id="experiences"
    >
      <Grid container item xl={12} lg={12} alignItems="center" gap={1}>
        <Typography color="secondary" variant="h5">
          02.{" "}
        </Typography>
        <Typography variant="h4">Where I’ve Worked</Typography>
        <Box height="1px" bgcolor="#8892b0" flex={1} />
      </Grid>
      <Grid
        container
        alignItems={"start"}
        justifyContent={"start"}
        gap={2}
        sx={{ paddingX: { xs: "24px", sm: "24px" } }}
      >
        <Grid item xl={2} lg={2} sm={12} xs={12}>
          {CURRENT_WORK.map((item) => {
            return (
              <ButtonMotion
                key={item.companyName}
                variant="text"
                sx={{
                  zIndex: 20,
                  width: { xl: "100%", lg: "100%", xs: "100%" },
                  justifyContent: "flex-start",
                }}
                whileHover={{
                  backgroundColor: "#233554",
                  color: "#64ffda",
                }}
                onClick={() => showWorkDetail(item.companyName)}
                initial={
                  activeID === item.companyName
                    ? {
                        backgroundColor: "#233554",
                        color: "#64ffda",
                      }
                    : { color: "#8892b0", backgroundColor: "transparent" }
                }
                animate={
                  activeID === item.companyName
                    ? {
                        backgroundColor: "#233554",
                        color: "#64ffda",
                      }
                    : { color: "#8892b0", backgroundColor: "transparent" }
                }
              >
                {item.companyName}
              </ButtonMotion>
            );
          })}
        </Grid>

        <Grid item xl={8} lg={8} sm={11} xs={11}>
          {companyDetail.companyName !== "" && (
            <WorkDetail {...companyDetail} />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Worked;
