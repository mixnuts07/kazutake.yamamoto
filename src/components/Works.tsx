import { useState } from "react";
import "../App.css";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const Works = ({ t }: any) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="works">
      <h3 className="title-section">Works</h3>
      <div className="work-list">
        <DesktopMacIcon className="work-item" onClick={handleOpen} />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="div" className="works-modal">
          <table className="modal-table">
            <tr>
              <td>
                <h4 className="cases">{t("block")}</h4>
                <div className="priority">
                  <h6>{t("blockdes")}</h6>
                  <h6>{t("prihigh")} </h6>
                </div>
              </td>
              <td>
                <h4 className="cases">{t("webdev")} </h4>
                <div className="priority">
                  <h6>
                    {t("webdevdes1")}..React {t("webdevdes2")}..Python)
                  </h6>
                  <h6>{t("prihigh")}</h6>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <h4 className="cases">{t("tool")} </h4>
                <div className="priority">
                  <h6>{t("tooldev")} </h6>
                  <h6>{t("primid")}</h6>
                </div>
              </td>
              <td>
                <h4 className="cases">{t("website")}</h4>
                <div className="priority">
                  <h6>{t("websitedes")} </h6>
                  <h6>{t("prilow")}</h6>
                </div>
              </td>
            </tr>
          </table>
          <div className="close-button">
            <CancelPresentationIcon onClick={handleClose} />
          </div>
        </Box>
      </Modal>
    </div>
  );
};
export default Works;
