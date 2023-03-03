import { Stack, Box, Typography } from "@mui/material";
import React from "react";
import { CURRENT_PROJECTS } from "../constants";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { motion } from "framer-motion";

const ProjectMobile = () => {
  return (
    <Stack
      display={"flex"}
      flexDirection="column"
      rowGap={3}
      alignItems="center"
      minHeight={"100vh"}
      marginY={3}
    >
      {CURRENT_PROJECTS.map((project) => {
        return (
          <Box
            key={project.title}
            position="relative"
            borderRadius={2}
            display="flex"
            flexDirection={"column"}
            alignItems="flex-end"
            rowGap={2}
          >
            <img
              alt="project"
              src={project.wallPaper}
              style={{
                objectFit: "cover",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
              height="100%"
            />

            <Box
              position={"absolute"}
              top={0}
              left={0}
              right={0}
              bottom={0}
              bgcolor="rgba(17, 34, 64 , 0.8)"
              zIndex={10}
            />

            <Box
              zIndex={20}
              padding={2}
              display="flex"
              flexDirection={"column"}
              alignItems="flex-start"
              rowGap={3}
            >
              <Typography
                variant="subtitle2"
                sx={{ color: "#64ffda" }}
                gutterBottom
              >
                Featured Project
              </Typography>

              <Typography variant="body1" fontWeight={"bold"}>
                {project.title}
              </Typography>

              <Typography variant="caption" sx={{ color: "#a8b2d1" }}>
                {project.description}
              </Typography>

              <Box display="flex" gap={2}>
                {project.technologies.map((tech) => {
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
                  href={project.githubLink}
                  whileHover={{ color: "#64ffda" }}
                  color="inherit"
                >
                  <GitHubIcon fontSize="small" />
                </Box>

                <Box
                  component={motion.a}
                  target="_blank"
                  href={project.externalLink}
                  whileHover={{ color: "#64ffda" }}
                  color="inherit"
                >
                  <LaunchIcon fontSize="small" />
                </Box>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Stack>
  );
};

export default ProjectMobile;
