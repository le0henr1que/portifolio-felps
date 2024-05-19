function CardCourses({ title, subtitle, logo }) {
  return (
    <>
      <div className="cord-responsive-corses w-[300px] flex-grow flex p-[20px] px-[16px] items-center gap-[16px] border-[1px] rounded-8 border-neutral-100">
        <div>
          <div>
            <img src={logo} />
          </div>
        </div>

        <div className="flex flex-col text-start">
          <div className="secondary-heading-sm">{title}</div>
          <div className="body-semibold-md ">{subtitle}</div>
        </div>
      </div>
    </>
  );
}

export default CardCourses;
