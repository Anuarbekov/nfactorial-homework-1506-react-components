import { useContext } from "react";
import { ReactComponent as StarWarsBlackLogoSVG } from "../../assets/star-wars.svg";
import { ReactComponent as StarWarsWhiteLogoSVG } from "../../assets/star_wars_logo.svg";
import { ReactComponent as IconSearchSVG } from "../../assets/icon-search.svg";
import { ReactComponent as FacebookLogoSVG } from "../../assets/facebook.svg";
import { ReactComponent as InstagramLogoSVG } from "../../assets/instagram.svg";
import { ReactComponent as TwitterLogoSVG } from "../../assets/twitter.svg";
import { ReactComponent as YoutubeLogoSVG } from "../../assets/youtube.svg";
import { DefaultContext } from "../../Context";
import TextField from "@mui/material/TextField";
import { ReactComponent as ChangeThemeSVG } from "../../assets/toWhite.svg";

const swLinks = [
  {
    url: "https://www.facebook.com/StarWars",
    name: "facebook_logo",
    component: <FacebookLogoSVG />,
  },
  {
    url: "https://www.instagram.com/starwars/",
    name: "instagram_logo",
    component: <InstagramLogoSVG />,
  },
  {
    url: "https://twitter.com/starwars",
    name: "twitter_logo",
    component: <TwitterLogoSVG />,
  },
  {
    url: "https://www.youtube.com/user/starwars",
    name: "youtube_logo",
    component: <YoutubeLogoSVG />,
  },
];
export const Header = () => {
  const { fan } = useContext(DefaultContext);
  const { theme } = useContext(DefaultContext);
  const { handleSetTheme } = useContext(DefaultContext);
  let changeTo = "";
  if(theme === "dark") {
    changeTo = "white";
  } else {
    changeTo = "dark";
  }
  const renderTheme = () => {
    if(theme === "dark") {
      return <StarWarsBlackLogoSVG/>
    } else {
      return <StarWarsWhiteLogoSVG/>
    }
  }
  const renderIconSearch = () => {
    if(theme === "dark") {
      return <IconSearchSVG className="search-icon" />
    } else{
      return 
    }
  }
  return (
    <header className={`${theme==="dark"?"dark":"white"}`}>
      <div className="links-layout">
        {swLinks.map((link) => (
          <a
            key={link.name}
            className="link"
            href={link.url}
            target="_blank"
            alt={link.name}
            rel="noreferrer"
          >
            {link.component}
          </a>
        ))}
        <a
          key="changeTheme"
          className="link change-theme"
          target="_blank"
          alt="alt"
          rel="noreferrer"
          onClick={() => handleSetTheme(changeTo)}
        >
          <ChangeThemeSVG/>
        </a>
      </div>
      {renderTheme()}
      <div className="search-layout">
        {renderIconSearch()}
        
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          size="small"
          sx={{
            backgroundColor: "rgb(200, 200, 200)",
            borderRadius: "10px",
          }}
        />

        <div style={{ color: "white", paddingTop: "1rem" }}>
          <p className={`${theme==="dark"?"dark":"white"}`}>I am fan of: {fan}</p>
        </div>
      </div>
    </header>
  );
};
