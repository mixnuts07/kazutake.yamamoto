import "../App.css";

const Career = ({ t }: any) => {
  return (
    <div className="career">
      <h3 className="title-section">Bio</h3>
      <div className="bio">
        <span className="left">2021.3</span>
        <span className="right">{t("a")}</span>
      </div>
      <div className="bio">
        <span className="left">2021.4</span>
        <span className="right">{t("b")}</span>
        {/* <span className="right">{t("c")}</span> */}
      </div>
      <div className="bio">
        <span className="left"></span>
        <span className="right">{t("c")}</span>
      </div>
      <div className="bio">
        <span className="left">2022.7</span>
        <span className="right">{t("e")}</span>
      </div>
    </div>
  );
};
export default Career;
