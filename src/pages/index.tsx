import { useEffect } from "react";
import About from "../components/About/About";
import ContactMe from "../components/Contact-me/ContactMe";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Introduction from "../components/Introduction/Introduction";
import Projects from "../components/Projects/Projects";
import Techs from "../components/Techs/Techs";
import { convertedStyle } from "../utils/convertedStyle";
import { cursor, useCursor } from "react-cursor";

const screenMain = convertedStyle([
  "main-1 w-full flex justify-center flex-col items-center ",
  {
    xs: "",
    sm: "",
    md: "",
    lg: "",
  },
]);

const defaultDiv2 = convertedStyle([
  "main-2",
  {
    xs: "",
    sm: "",
    md: "",
    lg: "w-full",
    xl: "w-[1112px]",
  },
]);

export default function Home() {
  useEffect(() => {
    document.body.style.cursor = "url(/cursor-custom.svg), auto";
  }, []);

  return (
    <>
      <div className={screenMain}>
        <div className={defaultDiv2}>
          <Header />

          <Introduction />

          <Techs />
          <About />
          <Projects />
        </div>

        {/*<ContactMe />*/}

        <div className={defaultDiv2}>
          <div className="max-w-[1112px]">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
