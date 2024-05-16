import { Link } from "react-scroll";
import { convertedStyle } from "../../utils/convertedStyle";
import Burguer from "./components/burguer/Burguer";

function Header() {
  const headerStyle = convertedStyle([
    "w-full flex items-center justify-center bg-[#000916] py-[20px]  border-b border-[#3C5A85] border-t-[1px] mb-[62px]",
  ]);
  const linkStyle = convertedStyle([
    "body-medium-md text-current no-underline cursor-pointer btn-text ",
  ]);

  return (
    <div id="header" className={headerStyle}>
      <div className="w-[1600px] flex items-center justify-between">
        <div>
          <img src="./icon.svg" className="w-[78px] h-[29px]" />
        </div>
        <Burguer />
        <div className="burguer-response flex justify-between gap-[36px]">
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
    </div>
  );
}

export default Header;
