import { useEffect, useState } from "react";
import About from "../components/About/About";
import ContactMe from "../components/Contact-me/ContactMe";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Introduction from "../components/Introduction/Introduction";
import Projects from "../components/Projects/Projects";
import Techs from "../components/Techs/Techs";
import { convertedStyle } from "../utils/convertedStyle";
import Cookies from "js-cookie";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

const screenMain = convertedStyle([
  "main-1 w-full flex justify-center flex-col items-center ",
  {
    xs: "",
    sm: "",
    md: "",
    lg: "w-full",
    xl: "w-[1200px]",
  },
]);

const defaultDiv2 = convertedStyle([
  "main-2 ",
  {
    xs: "",
    sm: "",
    md: "",
    lg: "w-full",
    xl: "w-[1200px]",
  },
]);

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  useEffect(() => {
    const lastSent = Cookies.get("lastSent");

    if (lastSent && new Date().getTime() - Number(lastSent) < 40 * 60 * 1000) {
      setMessageSent(true);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);

    const email = formData.get("email");
    const message = formData.get("message");
    const subject = formData.get("subject");
    const name = formData.get("name");

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        message,
        subject,
        name,
      }),
    });
    if (response.ok) {
      // alert("Message sent successfully.");
      Cookies.set("lastSent", String(new Date().getTime()));
      setMessageSent(true);
      event.target.reset();
    } else {
      alert("Message not sent.");
    }

    setLoading(false);
  };

  return (
    <>
      <div className={screenMain}>
        <Header />
        <div className={defaultDiv2}>
          <Introduction />
          <Techs />
          <About />
        </div>
      </div>

      <div className="w-full flex items-center justify-center mt-[72px] ">
        <div className="w-[1200px]" id="projects">
          <div className="w-full flex justify-between items-start">
            <div className=" justify-start">
              <div className="secondary-heading-xl text-white title-responsive">
                Meus <span className="text-brand-500">Projetos</span>
              </div>
              <div className="body-regular-lg">
                Explore essa seleção de projetos pessoais e profisisonais
              </div>
            </div>
            <div className="w-[202px] button-responsive">
              <a href="/projetos">
                <button className="btn-primary-outlined large">
                  Ver todos os projetos
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="swiper mt-[30px]">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="h-[560px] w-[1320px]"
        >
          <SwiperSlide>
            <div className="w-[1200px] h-[483px] rounded-[17px] gradient-radial border border-solid border-[#3083BF]">
              <div className="flex w-full h-full justify-between items-center p-[38px] ">
                <div className="flex flex-col w-[579px] h-full justify-center">
                  <div className="border-b border-b-brand-500 pb-[12px]">
                    <div className="text-brand-500 secondary-heading-xs">
                      CASE DE SUCESSO
                    </div>
                    <div className="secondary-heading-xl">
                      Originar Design System
                    </div>
                  </div>
                  <div className="mt-[20px]">
                    <div className="secondary-heading-sm mb-[12px]">
                      Sobre o projeto
                    </div>
                    <div className="body-regular-md">
                      Olá, sou Felipe, 21 anos, de Osasco/SP. Sou um UX/UI
                      Designer focado em resolver problemas através de
                      interfaces eficazes e agradáveis. Com formação em Design e
                      especialização em UX Design, tenho experiência
                      significativa no desenvolvimento de softwares e
                      aplicativos personalizados, além da criação de Design
                      Systems para garantir consistência e eficiência em todas
                      as interfaces. Constantemente busco integrar as melhores
                      práticas de UI/UX em meus projetos.
                    </div>
                  </div>
                  <div className="w-[201px] mt-[35px]">
                    <a href="/projetos">
                      <button className="btn-primary-outlined large">
                        Ver projeto completo
                      </button>
                    </a>
                  </div>
                </div>
                <div className="absolute right-[60px]">
                  <img src="./project-exemple.png" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[1200px] h-[483px] rounded-[17px] gradient-radial border border-solid border-[#3083BF]"></div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={screenMain} id="contect-me">
        <div className={defaultDiv2}>
          <div className="w-full flex justify-between mt-[73px] responsive-form">
            <div>
              <div className="secondary-heading-xl mb-[16px]">
                Vamos trabalhar <span className="text-brand-500">juntos!</span>
              </div>
              <div className="body-regular-lg w-[443.926px]">
                Pronto para transformar ideias em realidade? Seja um projeto,
                uma colaboração ou apenas para dizer oi, deixe uma mensagem ao
                lado. Sou todo ouvidos e ansioso para iniciarmos essa jornada
                juntos!
              </div>
              <div className="mt-[38px]  w-full">
                <ul className="body-regular-lg flex flex-col gap-[34px] responsive-list">
                  <a
                    href="https://www.linkedin.com/in/felipesouza12/"
                    target="_blank"
                  >
                    <li className="flex items-center gap-[16px]">
                      <img src="./linkedin-icon.svg" />
                      /felipesouza12
                    </li>
                  </a>
                  <a href="mailto:felipe.silva346@hotmail.com" target="_blank">
                    <li className="flex items-center gap-[16px]">
                      <img src="./email.svg" />
                      felipe.silva346@hotmail.com
                    </li>
                  </a>
                  <a
                    href="https://www.google.com.br/maps/place/osasco/data=!4m2!3m1!1s0x94ce5583db0fdfef:0x90ee3c33b723aa9c?sa=X&ved=1t:155783&ictx=111"
                    target="_blank"
                  >
                    <li className="flex items-center gap-[16px]">
                      <img src="./local.svg" />
                      Osasco, São Paulo - Brasil
                    </li>
                  </a>
                </ul>
              </div>
            </div>

            <div className="w-[471px] responsive-form-input">
              <div className="secondary-heading-sm mb-[16px]">
                Entre em contato comigo!
              </div>

              <form
                className="mt-4 flex flex-col gap-[20px] "
                onSubmit={handleSubmit}
              >
                <div>
                  <input
                    type="text"
                    id="nome"
                    name="name"
                    required
                    placeholder="Digite seu nome"
                    disabled={messageSent}
                  />
                </div>

                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Digite seu email"
                    disabled={messageSent}
                  />
                </div>

                <div>
                  <input
                    type="text"
                    id="assunto"
                    name="subject"
                    required
                    placeholder="Digite o assunto"
                    disabled={messageSent}
                  />
                </div>

                <div>
                  <textarea
                    id="mensagem"
                    name="message"
                    rows={5}
                    required
                    placeholder="Sua mensagem..."
                    disabled={messageSent}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={messageSent}
                  className="large btn-primary"
                >
                  {loading
                    ? "Enviando..."
                    : messageSent
                    ? "Mensagem enviada com sucesso"
                    : "Enviar"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t  solid border-solid border-[#22406C] w-full flex items-center justify-center mt-[84px]">
        <Footer />
      </div>
    </>
  );
}
