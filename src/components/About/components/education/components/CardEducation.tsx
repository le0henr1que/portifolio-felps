function CardEducation({ title, subtitle, logo }) {
  return (
    <>
      <div className="flex p-16 px-8 items-center gap-8 self-stretch border-[1px] rounded-8 border-neutral-100">
        <div>
          <div className="w-[112px] h-[34px]">
            <img className="w-[112px] h-[34px]" src={logo} />
          </div>
        </div>

        <div className="flex flex-col text-start">
          <div className="secondary-heading-sm">{title}</div>
          <div className="body-regular-md">{subtitle}</div>
        </div>
      </div>
    </>
  );
}

export default CardEducation;
