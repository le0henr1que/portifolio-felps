export function FloatingImage({ image }: { image?: string }) {
  return (
    <>
      <div className="image-responsive w-[436px] h-[424px] rounded-[8px] ">
        <div className="absolute">
          <div className="top-[280px] left-[-130px] absolute  z-[999] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-float flex w-[auto] justify-between rounded-8 shadow-custom h-[72px] overflow-hidden border border-gray-300 border-[1px]">
            <div className="bg-white p-4 px-5 flex justify-center gap-8 items-center flex-col">
              <div className=" fex justify-center items-center  bg-brand-600 rounded-4 text-center text-[16px] font-semibold text-white p-1 px-3.5">
                AA 4.10:1
              </div>
              <div className="text-[12px] text-[#030712] font-semibold">
                background/primary/default
              </div>
            </div>

            <div className="bg-black p-4 px-5 flex justify-center gap-8 items-center flex-col">
              <div className=" fex justify-center items-center  bg-brand-600 rounded-4 text-center text-[16px] font-semibold text-white p-1 px-3.5">
                AA 4.10:1
              </div>
              <div className="text-[12px] text-[#FFF] font-semibold">
                background/primary/default
              </div>
            </div>
          </div>
          {/* <img
            className="text-[red] z-[999] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-float"
            src="/User.webp"
          /> */}
        </div>
        <img src={image} />
      </div>
    </>
  );
}
