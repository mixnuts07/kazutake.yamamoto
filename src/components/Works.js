import "../App.css";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderColor: "whitesmoke",
  width: "30vw",
  "@media screen and (max-width:480px)": {
    width: "70vw",
  },
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{
          fontSize: "0.8rem",
          color: "whitesmoke",
        }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgb(0,30,34)",
  color: "whitesmoke",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid whitesmoke",
  backgroundColor: "rgb(0,30,34)",
  color: "whitesmoke",
}));

const Works = ({ t }) => {
  const [expanded, setExpanded] = useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="works">
      <h3 className="title-section">Works</h3>
      <div className="accordion">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography sx={{ textAlign: "left" }}>
              {t("works1_title")}
              {t("works1_title_a")}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ textAlign: "left" }}>
            <Typography className="works-text">{t("works1_des")}</Typography>
            <Typography sx={{ textAlign: "center", fontSize: "0.6em" }}>
              {t("pri_high")}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography sx={{ textAlign: "left" }}>
              {t("works2_title")}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ textAlign: "left" }}>
            <Typography>{t("works2_des1")}</Typography>
            <Typography>{t("works2_des2")}</Typography>
            <Typography sx={{ textAlign: "center", fontSize: "0.6em" }}>
              {t("pri_high")}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel4d-header">
            <Typography>{t("works3_title")}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ textAlign: "left" }}>
            <Typography>{t("works3_des")}</Typography>
            <Typography sx={{ textAlign: "center", fontSize: "0.6em" }}>
              {t("pri_mid")}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography>{t("works4_title")}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ textAlign: "left" }}>
            <Typography>{t("works4_des")}</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Works;
