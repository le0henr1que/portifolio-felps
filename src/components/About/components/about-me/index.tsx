function AboutMe() {
  return (
    <>
      <div className="w-full gap-[17px] flex flex-col justify-start items-start text-start">
        <div className="w-full flex justify-between">
          <div className="flex flex-col">
            <div className="secondary-heading-lg text-neutral-1000">
              Felipe Souza
            </div>
            <div className="body-regular-lg">UX/UI Designer</div>
          </div>
          <div className="flex gap-[4px]">
            <div className="flex items-center gap-[4px]">
              <a
                href="https://www.behance.net/felipedasilv13"
                target="_blank"
                className="m-4"
              >
                <img src="/behance.svg" />
              </a>
              <a
                href="https://www.linkedin.com/in/felipesouza12/"
                target="_blank"
                className="m-4"
              >
                <img src="/linkedin-icon-brand.svg" />
              </a>
            </div>
          </div>
        </div>
        <div className="body-regular-lg">
          Olá, sou Felipe, 21 anos, de Osasco/SP. Sou um UX/UI Designer focado
          em resolver problemas através de interfaces eficazes e agradáveis. Com
          formação em Design e especialização em UX Design, tenho experiência
          significativa no desenvolvimento de softwares e aplicativos
          personalizados, além da criação de Design Systems para garantir
          consistência e eficiência em todas as interfaces. Constantemente busco
          integrar as melhores práticas de UI/UX em meus projetos, visando
          proporcionar experiências digitais excepcionais aos usuários.
        </div>
      </div>
    </>
  );
}

export default AboutMe;
