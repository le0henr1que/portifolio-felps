function CardExperiences({ title, subtitle, logo, description }) {
  return (
    <>
      <div className="flex flex-col items-start space-y-4 p-6 flex-grow self-stretch  border-[1px] rounded-8 border-neutral-100 w-[50%] card-xp">
        <div>
          <div>
            <img src={logo} className="mb-[16px]" />
          </div>
        </div>

        <div className="flex flex-col text-start gap-8">
          <div>
            <div className="secondary-heading-sm text-white">{title}</div>
            <div className="body-semibold-md text-brand-600">{subtitle}</div>
          </div>

          <div>
            <div className="body-regular-md text-white ">{description}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardExperiences;
