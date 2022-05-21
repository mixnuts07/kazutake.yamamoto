import "../App.css";
const Footer = () => {
  const thisYear = new Date().getFullYear();
  return (
    <div className="footer">
      <h3 className="title-section">Contact</h3>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSe9H5_PU3zVRIkv2eEqnWL32teDaO-m4lw2-dC_9La-39vCqg/viewform?usp=pp_url"
        target="_blank"
        rel="noreferrer"
        className="link-name"
      >
        FORM
      </a>
      <h6 className="copy-right">©︎{thisYear} kazutakeyamamoto</h6>
    </div>
  );
};

export default Footer;
