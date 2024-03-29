import { Box, Stack, Typography, Grid } from "@mui/material";
import { useAppSelector } from "../redux/hook";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { currentTech } from "../constants";
import { personal_1 } from "../assets/images";
import { motion } from "framer-motion";

const MotionGrid = motion(Grid);

const AboutMe = () => {
  const { isMobile } = useAppSelector((state) => state.settingStore);

  return (
    <MotionGrid
      container
      display={"flex"}
      flexDirection={isMobile ? "column" : "row"}
      alignItems="center"
      justifyContent={isMobile ? "start" : "space-between"}
      height="100%"
      sx={{
        maxWidth: { lg: "50%", md: "70%" },
      }}
      spacing={5}
      minHeight="100vh"
      id="aboutMe"
    >
      <MotionGrid
        item
        xs={12}
        md={8}
        lg={8}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Typography color="secondary" variant="h5">
            01.{" "}
          </Typography>
          <Typography variant="h4">About me</Typography>
          <Box flexGrow={1} height="1px" width={"auto"} bgcolor="#8892b0" />
        </Box>

        <Stack textAlign={"left"} spacing={3} mt={5} color="#8892b0">
          <Typography>
            Hello! My name is Nguyen, and I enjoy creating things that live on
            the internet. My interest in web development started in 2018 when I
            studied at my university. I realized that I am excited to build the
            user interface, and I am happy to see client satisfaction when they
            are using my website. So I decided to become a{" "}
            <Box
              component="span"
              color="primary.light"
              className="hover-underline-animation"
            >
              front-end developer in the near future
            </Box>{" "}
            and a{" "}
            <Box
              component="span"
              color="primary.light"
              className="hover-underline-animation"
            >
              full-stack developer
            </Box>{" "}
            after that.
          </Typography>

          <Typography>
            In addition to my love of technology and design, I am also
            interested in education, history, economics and politics.
          </Typography>

          <Typography>
            I also recently learn more about{" "}
            <Box
              component="span"
              color="primary.light"
              className="hover-underline-animation"
            >
              backend framework or database
            </Box>
            . It makes me fun and feeling that the technology is so awesome and
            I hope this website is going to impressive with you
          </Typography>

          <Typography>
            Here are a few technologies I’ve been working with recently:
          </Typography>

          <Box
            display="flex"
            justifyContent={"space-between"}
            alignItems="center"
            flexWrap="wrap"
            gap={2}
            maxWidth="80%"
          >
            {currentTech.map((tech) => {
              return (
                <Box
                  key={tech}
                  display="flex"
                  alignItems={"center"}
                  width="30%"
                >
                  <ArrowRightIcon sx={{ color: "primary.light" }} />
                  <Typography variant="caption">{tech}</Typography>
                </Box>
              );
            })}
          </Box>
        </Stack>
      </MotionGrid>

      <MotionGrid
        item
        xs={8}
        md={4}
        minHeight="50vh"
        lg={4}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        position="relative"
        className="layer"
      >
        <Box
          borderRadius={2}
          overflow={"hidden"}
          position={"relative"}
          zIndex={10}
        >
          <img
            alt=""
            width={"100%"}
            height={"100%"}
            src={personal_1}
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              objectFit: "cover",
            }}
          />

          <Box
            height="100%"
            bgcolor="rgba(100, 255, 218, 0.4)"
            position={"absolute"}
            top={0}
            left={0}
            right={0}
            bottom={0}
            className="avatar"
          />
        </Box>

        <Box
          position="absolute"
          right={-30}
          top={80}
          border="2px solid #64ffda"
          sx={{
            width: { xl: 250, md: 200, sm: 200, xs: 200 },
            height: { xl: 250, md: 200, sm: 200, xs: 200 },
          }}
          borderRadius={1}
          className="layer_border"
        />
      </MotionGrid>
    </MotionGrid>
  );
};

export default AboutMe;
