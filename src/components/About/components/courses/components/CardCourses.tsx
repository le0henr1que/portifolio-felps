function CardCourses({ title, subtitle, logo }) {
  return (
    <>
      <div className="cord-responsive-corses w-[327px] flex p-[20px] px-[16px] items-center gap-[16px] border-[1px] rounded-8 border-neutral-100">
        <div>
          <div className="w-[48px] h-[48px]">
            <img className="w-[48px] h-[48px]" src={logo} />
          </div>
        </div>

        <div className="flex flex-col text-start">
          <div className="secondary-heading-sm">{title}</div>
          <div className="body-semibold-md">{subtitle}</div>
        </div>
      </div>
    </>
  );
}

export default CardCourses;
