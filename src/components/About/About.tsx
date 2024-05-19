import GroupButton from "../Group-button";
import AboutMe from "./components/about-me";
import Courses from "./components/courses";
import Education from "./components/education";
import Experience from "./components/experience";

const aboutMe = [
  {
    value: "tab1",
    label: "Quem sou",
    content: <AboutMe />,
  },
  {
    value: "tab2",
    label: "Educação",
    content: <Education />,
  },
  {
    value: "tab3",
    label: "Experiência",
    content: <Experience />,
  },
  {
    value: "tab6",
    label: "Cursos ",
    content: <Courses />,
  },
];

function About() {
  return (
    <div id="about" className="about-responsive flex gap-[36px] mt-[64px]">
      <div>
        <div className="about-image-responsive w-[402px] h-[382px] bg-[#D9D9D9] rounded-8 flex justify-center items-center">
          <div className="bg-brand-500 w-[210px] h-[210px] flex-shrink-0 fill-current text-brand-500 filter blur-[138px] absolute z-[1]"></div>
          <img
            src="/felps.png"
            alt="about-me"
            className="about-image-responsive w-[402px] h-[382px]  rounded-8 z-[2] absolute"
          />
        </div>
      </div>
      <div className="w-full">
        <GroupButton.Root>
          <GroupButton.List tabs={aboutMe} className="group-button-list " />
          <GroupButton.Content tabs={aboutMe} />
        </GroupButton.Root>
      </div>
    </div>
  );
}

export default About;
