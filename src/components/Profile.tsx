import "../App.css";
import face from "../images/pexels-photo-614810.webp";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import YouTubeIcon from "@mui/icons-material/YouTube";

const Profile = ({ t }: any) => {
  const birthday = {
    year: 1998,
    month: 7,
    date: 19,
  };
  const getAge = (birthday: any) => {
    const today = new Date();
    const thisYearsBirthday = new Date(
      today.getFullYear(),
      birthday.month - 1,
      birthday.date
    );
    let age = today.getFullYear() - birthday.year;
    if (today < thisYearsBirthday) {
      age--;
    }
    return age;
  };
  return (
    <div className="profile">
      <h1 className="name">Kazutake Yamamoto</h1>
      <p className="my-birth">1998.07.19({getAge(birthday)})</p>
      <div className="sns-icon">
        <a
          href="https://twitter.com/mixed_nuts_nuts"
          target="_blank"
          rel="noreferrer"
          className="icon-style"
        >
          <TwitterIcon className="sns-icon-el " />
        </a>
        <a
          href="https://www.instagram.com/mixed_nuts_nuts/"
          target="_blank"
          rel="noreferrer"
          className="icon-style"
        >
          <InstagramIcon className="sns-icon-el" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100070009847029"
          target="_blank"
          rel="noreferrer"
          className="icon-style"
        >
          <FacebookIcon className="sns-icon-el" />
        </a>
        <a
          href="https://www.linkedin.com/in/kazutake-yamamoto-096059224?original_referer="
          target="_blank"
          rel="noreferrer"
          className="icon-style"
        >
          <LinkedInIcon className="sns-icon-el" />
        </a>
        {/* <YouTubeIcon className="sns-icon-el" /> */}
      </div>
      <div className="face-des">
        <img src={face} alt="face" />
        <div className="description">
          <p>
            {t(1)}
            <br />
            {t(5)}
            <br />
            <a
              href="https://solidity-jp.readthedocs.io/ja/latest/"
              target="_blank"
              rel="noreferrer"
              className="link-name"
            >
              Solidity
            </a>
            {t(6)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
