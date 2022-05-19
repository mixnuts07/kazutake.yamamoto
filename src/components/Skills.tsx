import "../App.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { SiReact } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiFigma } from "react-icons/si";

const Skills = () => {
  return (
    <Box component="div" sx={{ width: "10", mt: "100" }}>
      {/* <Typography component="h3">Skills</Typography> */}
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <SiReact />
          <Typography component="h3">React</Typography>
        </Grid>
        <Grid item xs={4}>
          <FaNode />
          <Typography component="h3">Node.js</Typography>
        </Grid>
        <Grid item xs={4}>
          <SiTypescript />
          <Typography component="h3">TypeScript</Typography>
        </Grid>
        <Grid item xs={4}>
          <SiPython />
          <Typography component="h3">Python</Typography>
        </Grid>
        <Grid item xs={4}>
          <SiDjango />
          <Typography component="h3">Django</Typography>
        </Grid>
        <Grid item xs={4}>
          <SiFastapi />
          <Typography component="h3">FastAPI</Typography>
        </Grid>
        <Grid item xs={4}>
          <SiPostgresql />
          <Typography component="h3">PostgreSQL</Typography>
        </Grid>
        <Grid item xs={4}>
          <FaAws />
          <Typography component="h3">AWS</Typography>
        </Grid>
        <Grid item xs={4}>
          <SiFigma />
          <Typography component="h3">Figma</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skills;
