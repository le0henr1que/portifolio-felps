function CardEducation({ title, subtitle, logo }) {
  return (
    <>
      <div className="flex p-16 px-8 items-center gap-8 self-stretch border-[1px] rounded-8 border-neutral-100">
        <div>
          <div>
            <img src={logo} />
          </div>
        </div>

        <div className="flex flex-col text-start">
          <div className="secondary-heading-sm">{title}</div>
          <div className="body-regular-md text-brand-500">{subtitle}</div>
        </div>
      </div>
    </>
  );
}

export default CardEducation;
