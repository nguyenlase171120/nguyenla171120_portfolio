import { useState } from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import FolderIcon from "@mui/icons-material/Folder";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { FOLDER_PROJECTS } from "../constants";

const NonProject = () => {
  const [isHover, setIsHover] = useState(false);

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
    >
      <Grid item lg={12} textAlign="center">
        <Typography variant="h5">Other Noteworthy Projects</Typography>
        <Typography variant="body2" color="#64ffda" mt={2}>
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
        {FOLDER_PROJECTS.map((item) => {
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
              component={motion.div}
              whileHover={{
                y: -6,
                transition: { duration: 0.5, type: "spring" },
              }}
              onHoverEnd={() => setIsHover(false)}
              onHoverStart={() => setIsHover(true)}
              sx={{ cursor: "pointer" }}
              minHeight={"300px"}
              maxHeight={"300px"}
              overflow="hidden"
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
                  animate={
                    isHover ? { color: "#64ffda" } : { color: "#ccd6f6" }
                  }
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
        <Button variant="outlined" color="secondary" size="large">
          Show more
        </Button>
      </Grid>
    </Grid>
  );
};

export default NonProject;
