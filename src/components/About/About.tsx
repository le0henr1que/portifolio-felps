import GroupButton from "../Group-button";
import AboutMe from "./components/about-me";

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

function About() {
  return (
    <div id="about" className="about-responsive flex gap-[36px] mt-[64px]">
      <div>
        <div className="about-image-responsive w-[405px] h-[424px] bg-[#D9D9D9] rounded-8"></div>
      </div>
      <div className="w-full">
        <GroupButton.Root>
          <GroupButton.List tabs={aboutMe} />
          <GroupButton.Content tabs={aboutMe} />
        </GroupButton.Root>
      </div>
    </div>
  );
}

export default About;
