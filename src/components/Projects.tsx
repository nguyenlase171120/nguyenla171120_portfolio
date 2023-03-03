import { Grid, Typography, Box, Stack, useMediaQuery } from "@mui/material";
import { CURRENT_PROJECTS } from "../constants";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import ProjectMobile from "./ProjectMobile";
import { theme } from "../layout/HomeLayout";

const Projects = () => {
  const isMobileProject = useMediaQuery(theme.breakpoints.down("xl"));

  return (
    <Grid
      container
      direction={"column"}
      justifyContent="center"
      sx={{ maxWidth: { xl: "50%", lg: "50%", md: "80%" } }}
      gap={4}
      minHeight={"100vh"}
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      id="projects"
    >
      <Grid item xl={4} lg={4}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Typography color="secondary" variant={isMobileProject ? "h5" : "h4"}>
            03.{" "}
          </Typography>
          <Typography variant={isMobileProject ? "h5" : "h4"} fontWeight="bold">
            Some Things I’ve Built
          </Typography>
          <Box flexGrow={1} height="1px" width={"auto"} bgcolor="#8892b0" />
        </Box>
      </Grid>

      {isMobileProject ? (
        <ProjectMobile />
      ) : (
        <Grid container alignItems={"center"} rowGap={10}>
          {CURRENT_PROJECTS.map((current, index) => {
            return (
              <Grid
                container
                alignItems={"center"}
                direction={index % 2 === 0 ? "row" : "row-reverse"}
              >
                <Grid
                  item
                  xl={7}
                  position="relative"
                  component={motion.a}
                  href={current.externalLink}
                  target="_blank"
                >
                  <img
                    alt="wallpaper"
                    src={current.wallPaper}
                    width="100%"
                    height="100%"
                    style={{ objectFit: "cover" }}
                  />

                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    component={motion.a}
                    initial={{ backgroundColor: "rgba(100, 255, 218, 0.4)" }}
                    whileHover={{
                      backgroundColor: "transparent",
                      cursor: "pointer",
                    }}
                    zIndex={20}
                  />
                </Grid>
                <Grid item xl={5}>
                  <Stack
                    display="flex"
                    flexDirection={"column"}
                    alignItems={index % 2 === 0 ? "flex-end" : "flex-start"}
                    rowGap={1}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "#64ffda" }}
                      gutterBottom
                    >
                      Featured Project
                    </Typography>
                    <Typography variant="h5">{current.title}</Typography>

                    <Box
                      bgcolor="#112240"
                      zIndex={20}
                      padding={3}
                      borderRadius={1}
                      width={"calc(100% + 10rem) "}
                      my={2}
                    >
                      {current.description}
                    </Box>

                    <Box display="flex" gap={2} zIndex={20}>
                      {current.technologies.map((tech) => {
                        return (
                          <Typography
                            key={tech}
                            variant="caption"
                            sx={{ color: "#ccd6f6" }}
                          >
                            {tech}
                          </Typography>
                        );
                      })}
                    </Box>

                    <Box display={"flex"} gap={2} color="#ccd6f6">
                      <Box
                        component={motion.a}
                        target="_blank"
                        href={current.githubLink}
                        whileHover={{ color: "#64ffda" }}
                        color="inherit"
                      >
                        <GitHubIcon fontSize="small" />
                      </Box>

                      <Box
                        component={motion.a}
                        target="_blank"
                        href={current.externalLink}
                        whileHover={{ color: "#64ffda" }}
                        color="inherit"
                      >
                        <LaunchIcon fontSize="small" />
                      </Box>
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      )}
    </Grid>
  );
};

export default Projects;
