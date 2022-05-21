import { useState } from "react";
import "../App.css";
import sample from "../images/mandoPre.jpg";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Modal from "@mui/material/Modal";

const SelfDev = ({ t }: any) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="self-dev">
      <h3 className="title-section">SelfDev</h3>
      <div className="self-dev-list">
        <DesktopMacIcon className="self-dev-item" onClick={handleOpen} />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="div" className="self-dev-modal">
          <Grid container spacing={4} className="dev-container">
            <Grid item xs={3}>
              <Typography component="h4">MY-SITE</Typography>
              <Typography component="h4">released:2022.6</Typography>
            </Grid>
            <Grid item xs={2}>
              <Box component="img" alt="mando" src={sample} className="img" />
            </Grid>
            <Grid item xs={7}>
              <Typography component="h6" className="description">
                React+TypeScript+MUI
              </Typography>
              <Typography component="h6" className="link">
                SOURCE CODE
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography component="h4">WAW</Typography>
              <Typography component="h4">released:2022.6</Typography>
            </Grid>
            <Grid item xs={2}>
              <Box component="img" alt="mando" src={sample} className="img" />
            </Grid>
            <Grid item xs={7}>
              <Typography component="h6" className="description">
                画質向上webアプリ(β)
              </Typography>
              <Typography component="h6" className="link">
                HERE
              </Typography>
            </Grid>
          </Grid>
          <CancelPresentationIcon
            onClick={handleClose}
            className="close-button"
          />
        </Box>
      </Modal>
    </div>
  );
};
export default SelfDev;
