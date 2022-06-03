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

const SelfDev = ({ t }) => {
  const [expanded, setExpanded] = useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="self-dev">
      <h3 className="title-section">SelfDev</h3>
      <div className="accordion">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>#1 WAW</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ textAlign: "left" }}>
              {t("self_dev_title1")}
            </Typography>
            <div className="link-name-cancel">HERE</div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>#2 MY-SITE</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ textAlign: "left" }}>
              {t("self_dev_title2")}
            </Typography>
            <a
              href="https://mixnuts07.github.io/kazutake.yamamoto/"
              target="_blank"
              rel="noreferrer"
              className="link-name"
            >
              SOURCE CODE
            </a>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default SelfDev;
