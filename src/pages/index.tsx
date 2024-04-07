import CardProject from "../components/Card-project";
import { FloatingImage } from "../components/Floating-image";
import GroupButton from "../components/Group-button";
import { Carousel } from "../components/Infinit-cards";
import { projectType } from "../enum/project-type";
import { convertedStyle } from "../utils/convertedStyle";
import AboutMe from "./components/about-me";
import Projects from "./components/projects";

const screenMain = convertedStyle([
  "w-full  flex justify-center flex-col items-center",
  {
    xs: "px-[16px]",
    sm: "px-[16px]",
    md: "px-[40px]",
  },
]);

const defaultDiv = convertedStyle([
  "  w-full max-w-screen-xl flex flex-col justify-start items-start items-center",
]);

const headerStyle = convertedStyle([
  "w-full flex items-center justify-between mt-[36px] mb-[73px]",
]);

const linkStyle = convertedStyle(["body-medium-md text-current no-underline"]);

const introductionStyle = convertedStyle([
  "w-full flex items-center justify-between",
]);

const myTechs = [
  {
    title: "Handoff",
    icon: (
      <>
        <h1>n</h1>
      </>
    ),
  },
  {
    title: "Responsividade",
    icon: (
      <>
        <h1>n</h1>
      </>
    ),
  },
  {
    title: "Design System",
    icon: (
      <>
        <h1>n</h1>
      </>
    ),
  },
  {
    title: "Variable & Tokens",
    icon: (
      <>
        <h1>n</h1>
      </>
    ),
  },
  {
    title: "Web & Mobile",
    icon: (
      <>
        <h1>n</h1>
      </>
    ),
  },
  {
    title: "Componentes",
    icon: (
      <>
        <h1>n</h1>
      </>
    ),
  },
  {
    title: "Microinterações",
    icon: (
      <>
        <h1>n</h1>
      </>
    ),
  },
  {
    title: "Gestalt",
    icon: (
      <>
        <h1>n</h1>
      </>
    ),
  },
  {
    title: "Dashboard",
    icon: (
      <>
        <h1>n</h1>
      </>
    ),
  },
  {
    title: "UX Research",
    icon: (
      <>
        <h1>n</h1>
      </>
    ),
  },
  {
    title: "SaaS",
    icon: (
      <>
        <h1>n</h1>
      </>
    ),
  },
  {
    title: "Style Guide",
    icon: (
      <>
        <h1>n</h1>
      </>
    ),
  },
  {
    title: "Ícones",
    icon: (
      <>
        <h1>n</h1>
      </>
    ),
  },
  {
    title: "Processos",
    icon: (
      <>
        <h1>n</h1>
      </>
    ),
  },
];

const aboutMe = [
  {
    value: "tab1",
    label: "Quem sou",
    content: <AboutMe />,
  },
  {
    value: "tab2",
    label: "Educação",
    content: <>2</>,
  },
  {
    value: "tab3",
    label: "Experiência",
    content: <>3</>,
  },
  {
    value: "tab6",
    label: "Cursos ",
    content: <>4</>,
  },
];

const tabProject = [
  {
    value: "tab1",
    label: "Todos",
    content: <Projects type="" />,
  },
  {
    value: "tab2",
    label: "pessoais",
    content: <Projects type={projectType.PESSOAL} />,
  },
  {
    value: "tab3",
    label: "Profissionais",
    content: <Projects type={projectType.PROFISSIONAL} />,
  },
];

export default function Home() {
  return (
    <>
      <div className={screenMain}>
        <div className={defaultDiv}>
          <div className="w-[1112px]">
            <div id="header" className={headerStyle}>
              <div>
                <img src="./icon.svg" />
              </div>
              <div className="flex justify-between gap-[36px]">
                <a href="#" className={linkStyle}>
                  Sobre min
                </a>
                <a href="#" className={linkStyle}>
                  Projetos
                </a>
                <a href="#" className={linkStyle}>
                  Contato
                </a>
              </div>
            </div>

            <div id="introduction" className={introductionStyle}>
              <div className="flex flex-col w-[487px] gap-[32px]">
                <div>
                  <div className="body-medium-xxl text-brand-600 mb-[4px]">
                    UX/UI Designer
                  </div>
                  <div className="primary-heading-xl text-neutral-900 mb-[8px]">
                    Olá, meu nome é{" "}
                    <span className="text-brand-600">Felipe Souza</span>
                  </div>
                  <div className="text-neutral-500 body-regular-lg">
                    UX/UI Designer pleno, com experiência em softwares
                    personalizados, construção e manutenção de Design System e
                    criação de sites.
                  </div>
                </div>
                <div className="flex gap-[16px] w-[322px]">
                  <button className="btn-primary large">Meus projetos</button>
                  <button className="btn-primary-outlined large">
                    Baixar currículo
                  </button>
                </div>
              </div>
              <FloatingImage image="/IMG_24241.webp" />
            </div>

            <div id="techs" className="w-full mt-[64px]">
              <Carousel items={myTechs} />
            </div>

            <div id="about" className="flex  gap-[36px] mt-[64px]">
              <div>
                <div className="w-[405px] h-[424px] bg-[#D9D9D9] rounded-8"></div>
              </div>
              <div className="w-full">
                <GroupButton.Root>
                  <GroupButton.List tabs={aboutMe} />
                  <GroupButton.Content tabs={aboutMe} />
                </GroupButton.Root>
              </div>
            </div>

            <div id="projects" className="mt-[72px]">
              <div>
                <GroupButton.Root>
                  <div className="w-full flex justify-between text-center items-center">
                    <div className="secondary-heading-xl text-neutral-900">
                      Meus <span className="text-brand-600">Projetos</span>
                    </div>
                    <div>
                      {" "}
                      <GroupButton.List tabs={tabProject} />
                    </div>
                  </div>
                  <div>
                    <GroupButton.Content tabs={tabProject} />
                  </div>
                </GroupButton.Root>
              </div>
            </div>
          </div>
        </div>
        <div
          id="contect-me"
          className="w-full mt-[90px] h-[605px] bg-brand-600 flex justify-center items-center"
        >
          <div
            className="w-[1112px] h-full bg-center bg-no-repeat bg-cover flex justify-between items-center "
            style={{ backgroundImage: "url('/background.svg')" }}
          >
            <div>
              <div>Vamos trabalhar juntos!</div>
              <div>
                Pronto para transformar ideias em realidade? Seja um projeto,
                uma colaboração ou apenas para dizer oi, deixe uma mensagem ao
                lado. Sou todo ouvidos e ansioso para iniciarmos essa jornada
                juntos!
              </div>
              <div>Icon linkedin</div>
            </div>
            <div>
              <div className="w-[500px] bg-white h-[500px]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
