import { convertedStyle } from "../../utils/convertedStyle";
import { FloatingImage } from "./components/Floating-image";
import { Link } from "react-scroll";

const introductionStyle = convertedStyle([
  "introduction-responsive w-full flex items-center justify-between",
]);
const linkStyle = convertedStyle([
  "body-medium-md text-current no-underline cursor-pointer",
]);

function Introduction() {
  return (
    <div id="introduction" className={introductionStyle}>
      <div className="introduction-responsive flex flex-col w-[487px] gap-[32px]">
        <div>
          <div className="body-medium-xxl text-brand-600 mb-[4px]">
            UX/UI Designer
          </div>
          <div className="primary-heading-lg text-white mb-[8px]">
            Olá, meu nome é <br></br>
            <span className="text-brand-600">Felipe Souza</span>
          </div>
          <div className="tex-introduction-responsive text-white body-regular-lg">
            UX/UI Designer pleno, com experiência em softwares personalizados,
            construção e manutenção de Design System e criação de sites.
          </div>
        </div>
        <div className="buttons-responsive flex gap-[16px] w-[322px]">
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={linkStyle}
          >
            <button className="btn-primary large">Meus projetos</button>
          </Link>
          <a href="/IMG_24241.webp" download className={linkStyle}>
            <button className="btn-primary-outlined large">
              Baixar currículo
            </button>
          </a>
        </div>
      </div>
      <FloatingImage image="/IMG_24241.webp" />
    </div>
  );
}

export default Introduction;
