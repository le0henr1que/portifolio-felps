import CardProject from "../../../components/Card-project";
import { convertedStyle } from "../../../utils/convertedStyle";
import { myProjects } from "../../../utils/projecs";

function Projects({ type }) {
  const filterProjects = myProjects.filter((item) =>
    type ? item.type === type : true
  );
  const divStyle = convertedStyle([
    "flex w-full flex-wrap justify-start gap-[35px] align-start text-start mt-[56px]",
  ]);
  return (
    <div className={divStyle}>
      {filterProjects.map((item, index) => (
        <CardProject
          key={item.id + index}
          banner={item.image}
          description={item.descritption}
          name={item.title}
        />
      ))}
    </div>
  );
}

export default Projects;
