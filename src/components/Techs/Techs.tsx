import { myTechs } from "../../data/MyTechs";
import { Carousel } from "./components/Infinit-cards";

function Techs() {
  return (
    <div id="techs" className="w-full mt-[64px]">
      <Carousel items={myTechs} />
    </div>
  );
}
export default Techs;
