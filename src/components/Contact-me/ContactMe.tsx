import FormContactMe from "./components/form-contact-me";

function ContactMe() {
  return (
    <div
      id="contect-me"
      className="w-full mt-[90px] h-[605px] bg-brand-600 flex justify-center items-center"
    >
      <div
        className="contact-me w-[1112px] h-full bg-center bg-no-repeat bg-cover flex justify-between items-center "
        // style={{ backgroundImage: "url('/')" }}
      >
        <div className="w-[467px] flex flex-col gap-[16px]">
          <div className="primary-heading-lg text-white">
            Vamos trabalhar juntos!
          </div>
          <div className="body-regular-lg text-white">
            Pronto para transformar ideias em realidade? Seja um projeto, uma
            colaboração ou apenas para dizer oi, deixe uma mensagem ao lado. Sou
            todo ouvidos e ansioso para iniciarmos essa jornada juntos!
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/felipesouza12/"
              target="_blank"
            >
              <img src="/linkedin-icon.svg" />
            </a>
          </div>
        </div>
        <div>
          <FormContactMe />
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
