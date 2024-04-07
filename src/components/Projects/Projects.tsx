import GroupButton from "../Group-button";
import { projectType } from "../../enum/project-type";
import GroupProjects from "./components/group-projects";

const tabProject = [
  {
    value: "tab1",
    label: "Todos",
    content: <GroupProjects type="" />,
  },
  {
    value: "tab2",
    label: "pessoais",
    content: <GroupProjects type={projectType.PESSOAL} />,
  },
  {
    value: "tab3",
    label: "Profissionais",
    content: <GroupProjects type={projectType.PROFISSIONAL} />,
  },
];
function Projects() {
  return (
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
  );
}

export default Projects;
