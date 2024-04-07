import { Link } from "react-scroll";
import { convertedStyle } from "../../utils/convertedStyle";

function Header() {
  const headerStyle = convertedStyle([
    "w-full flex items-center justify-between mt-[36px] mb-[73px]",
  ]);
  const linkStyle = convertedStyle([
    "body-medium-md text-current no-underline cursor-pointer",
  ]);

  return (
    <div id="header" className={headerStyle}>
      <div>
        <img src="./icon.svg" />
      </div>
      <div className="flex justify-between gap-[36px]">
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={linkStyle}
        >
          Sobre min
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={linkStyle}
        >
          Projetos
        </Link>
        <Link
          activeClass="active"
          to="contect-me"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={linkStyle}
        >
          Contato
        </Link>
      </div>
    </div>
  );
}

export default Header;
