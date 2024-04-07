import CardProject from "../../../Card-project";
import { convertedStyle } from "../../../../utils/convertedStyle";
import { myProjects } from "../../../../data/MyProjects";

function GroupProjects({ type }) {
  const filterProjects = myProjects.filter((item) =>
    type ? item.type === type : true
  );
  const divStyle = convertedStyle([
    "flex w-full flex-wrap justify-start gap-[35px] align-start text-start mt-[56px]",
    {
      xs: "bg-[black]",
      sm: "bg-[green]",
      md: "bg-[orange]",
      lg: "bg-[red]",
      xl: "bg-[red]",
    },
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
