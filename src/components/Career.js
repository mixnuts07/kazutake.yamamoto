import "../App.css";

// 期限間に合えばt:anyの型定義再考
const Career = ({ t }) => {
  return (
    <div className="career">
      <h3 className="title-section">Bio</h3>
      <div className="bio">
        <span className="left">2021.3</span>
        <span className="right">{t("career1")}</span>
      </div>
      <div className="bio">
        <span className="left">2021.4</span>
        <span className="right">{t("career2")}</span>
        {/* <span className="right">{t("c")}</span> */}
      </div>
      <div className="bio">
        <span className="left"></span>
        <span className="right">{t("career3")}</span>
      </div>
      <div className="bio">
        <span className="left">2022.7</span>
        <span className="right">{t("career4")}</span>
      </div>
    </div>
  );
};
export default Career;
