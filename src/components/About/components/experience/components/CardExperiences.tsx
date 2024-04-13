function CardExperiences({ title, subtitle, logo, description }) {
  return (
    <>
      <div className="gap-[16px] flex flex-col items-start text-start p-[24px] border-[1px] rounded-8 border-neutral-100">
        <div>
          <div className="w-[136px] h-[46px]">
            <img className="w-[136px] h-[46px]" src={logo} />
          </div>
        </div>

        <div className="flex flex-col text-start gap-8">
          <div>
            <div className="secondary-heading-sm text-neutral-1000">
              {title}
            </div>
            <div className="body-semibold-md text-brand-600">{subtitle}</div>
          </div>

          <div>
            <div className="body-regular-md text-neutral-800">
              {description}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardExperiences;
