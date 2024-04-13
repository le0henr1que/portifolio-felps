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
        <div className="about-image-responsive w-[405px] h-[424px] bg-[#D9D9D9] rounded-8"></div>
      </div>
      <div className="w-full">
        <GroupButton.Root>
          <GroupButton.List
            tabs={aboutMe}
            className="group-button-list flex-shrink-0 "
          />
          <GroupButton.Content tabs={aboutMe} />
        </GroupButton.Root>
      </div>
    </div>
  );
}

export default About;
