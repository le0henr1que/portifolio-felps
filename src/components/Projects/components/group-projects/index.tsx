import CardProject from "../../../Card-project";
import { convertedStyle } from "../../../../utils/convertedStyle";
import { myProjects } from "../../../../data/MyProjects";

function GroupProjects({ type }) {
  const filterProjects = myProjects.filter((item) =>
    type ? item.type === type : true
  );
  const divStyle = convertedStyle([
    "grid-car-responsive grid-cols-1 md:grid-cols-2 gap-[35px] w-full flex w-full flex-wrap justify-start align-start text-start mt-[56px] gap-[35px]",
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

export default GroupProjects;
