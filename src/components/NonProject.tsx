import { useState } from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import FolderIcon from "@mui/icons-material/Folder";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { FOLDER_PROJECTS } from "../constants";

const NonProject = () => {
  const [numberShow, setNumberShow] = useState<number>(2);

  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      direction="column"
      minHeight={"100vh"}
      sx={{ maxWidth: { lg: "60%" } }}
      gap={3}
      paddingX={2}
      component={motion.div}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      id="nonProjects"
    >
      <Grid item lg={12} textAlign="center">
        <Typography variant="h5">Other Mini Projects</Typography>
        <Typography variant="body2" color="primary.light" mt={2}>
          view the archive
        </Typography>
      </Grid>
      <Grid
        container
        justifyContent={"center"}
        alignItems="center"
        wrap="wrap"
        gap={2}
      >
        {FOLDER_PROJECTS.slice(0, numberShow).map((item) => {
          return (
            <Grid
              item
              key={item.title}
              lg={4}
              md={4}
              xs={12}
              borderRadius={2}
              padding={2}
              bgcolor={"#112240"}
              component={motion.a}
              whileHover={{
                y: -10,
                transition: { duration: 0.5, type: "spring" },
                color: "#64ffda",
              }}
              sx={{
                cursor: "pointer",
                minHeight: { xl: 300, lg: 400, md: 300 },
                maxHeight: { xl: 300, lg: 300, md: 300 },
              }}
              overflow="hidden"
              initial={{ y: 30, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                textDecoration: "none",
                color: "#ccd6f6",
              }}
              transition={{ duration: item.delay }}
              href={item.externalLink}
              target="_blank"
              zIndex={20}
            >
              <Box
                display={"flex"}
                justifyContent="space-between"
                alignItems={"center"}
                fontSize={"45px"}
              >
                <FolderIcon sx={{ color: "#64ffda" }} fontSize="inherit" />

                <Box
                  display={"flex"}
                  alignItems="center"
                  gap={2}
                  color="#ccd6f6"
                >
                  <Box
                    component={motion.a}
                    target="_blank"
                    href={item.githubLink}
                    whileHover={{ color: "#64ffda" }}
                    color="inherit"
                  >
                    <GitHubIcon />
                  </Box>

                  <Box
                    component={motion.a}
                    target="_blank"
                    href={item.externalLink}
                    whileHover={{ color: "#64ffda" }}
                    color="inherit"
                  >
                    <LaunchIcon />
                  </Box>
                </Box>
              </Box>

              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems="start"
                mt={2}
                gap={2}
              >
                <Typography
                  variant="h6"
                  component={motion.h6}
                  animate={{ color: "inherit" }}
                >
                  {item.title}
                </Typography>
                <Typography variant="body2" color="#8892b0" align="justify">
                  {item.description}
                </Typography>

                <Box
                  display={"flex"}
                  alignItems="center"
                  justifyContent={"start"}
                  width="100%"
                  gap={4}
                >
                  {item.technologies.map((tech) => {
                    return (
                      <Typography color="#8892b0" variant="caption" key={tech}>
                        {tech}
                      </Typography>
                    );
                  })}
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <Grid item lg={12} justifyContent="center">
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          sx={{ zIndex: "20" }}
          onClick={() => {
            return numberShow === FOLDER_PROJECTS.length
              ? setNumberShow(numberShow - 2)
              : setNumberShow(numberShow + 2);
          }}
        >
          {numberShow === FOLDER_PROJECTS.length ? "Show less" : "Show more"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default NonProject;
