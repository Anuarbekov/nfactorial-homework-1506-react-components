import { useContext } from "react";
import { DefaultContext } from "../../Context";
export const Footer = () => {
  const { theme } = useContext(DefaultContext);
  return (
    <footer className={`${theme==="dark"?"dark":"white"}`}>
      <a
        className={`footer-link-${theme==="dark"?"dark":"white"}`}
        href="https://en.wikipedia.org/wiki/Star_Wars"
        target="_blank"
        rel="noreferrer"
      >
        Wikipedia Star Wars
      </a>
      <h4 className={`${theme==="dark"?"dark":"white"}`}>All rights are reserved &copy;</h4>
      <a
        className={`footer-link-${theme==="dark"?"dark":"white"}`}
        href="https://www.starwars.com/"
        target="_blank"
        rel="noreferrer"
      >
        Official Star Wars Website
      </a>
    </footer>
  );
};
