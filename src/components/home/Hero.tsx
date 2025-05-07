import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-stretch mt-20 px-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="self-center w-full max-w-[1066px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[69%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch max-md:max-w-full max-md:mt-10">
              <div className="text-white text-xl font-normal self-center ml-7">
                Arthlete
              </div>
              <div className="h-[471px] w-full mt-6 max-md:max-w-full">
                <div className="flex w-full flex-col items-stretch max-md:max-w-full">
                  <div className="w-full max-md:max-w-full">
                    <div className="flex w-full flex-col items-stretch text-[#1A3129] max-md:max-w-full">
                      <div className="text-[#1A3129] border-b-[color:var(--Green-70,#CBEA7B)] gap-2.5 text-[22px] font-semibold py-2 border-b-[3px] border-solid">
                        Transform Your Fitness Journey with
                      </div>
                      <h1 className="text-[#1A3129] text-5xl font-bold mt-2.5 max-md:max-w-full max-md:text-[40px]">
                        AI-Powered Motion Tracking
                      </h1>
                    </div>
                    <p className="text-[#333] text-base font-medium leading-6 mt-4 max-md:max-w-full">
                      Welcome to Arthlete, your intelligent training companion that helps you move better, grow stronger, and stay consistent. Whether you're at home, school, or on the go, our motion-tracking AI guides you with real-time feedback, personalized assessments, and progress tracking — all designed to make fitness fun, smart, and effective.
                      <br />
                      Start your transformation today with science-backed coaching that evolves with you.
                    </p>
                  </div>
                  <div className="flex gap-3.5 text-sm text-white font-semibold mt-10">
                    <button className="self-stretch bg-[rgba(254,95,32,1)] gap-2 px-4 py-3.5 rounded-md">
                      🏁 Start Training
                    </button>
                  </div>
                </div>
                <div className="flex w-full items-center gap-1.5 flex-wrap mt-[50px] max-md:max-w-full max-md:mt-10">
                  <div className="items-center border border-[color:var(--Green-70,#CBEA7B)] self-stretch flex gap-[-17px] my-auto px-2 py-1.5 rounded-[58px] border-solid">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/87f9af2cf9134ae09cac6960a9a0179c/4a5fdb5af0ef3d953de7feb78bd9b1c985b97e49?placeholderIfAbsent=true"
                      alt="User avatar 1"
                      className="aspect-[1] object-contain w-10 self-stretch shrink-0 my-auto rounded-[53px]"
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/87f9af2cf9134ae09cac6960a9a0179c/e16d12c2581447d1d87a5175e71e1bcced911528?placeholderIfAbsent=true"
                      alt="User avatar 2"
                      className="aspect-[1] object-contain w-10 self-stretch shrink-0 my-auto rounded-[53px]"
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/87f9af2cf9134ae09cac6960a9a0179c/43e95603b1202c82ec634ab40bcce39ac08cbeb8?placeholderIfAbsent=true"
                      alt="User avatar 3"
                      className="aspect-[1] object-contain w-10 self-stretch shrink-0 my-auto rounded-[53px]"
                    />
                  </div>
                  <div className="text-[#333333] text-lg font-semibold self-stretch my-auto">
                    <span className="font-bold text-[#468671]">430+</span>{" "}
                    <span className="text-[#234338]">Happy Customers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[31%] ml-5 max-md:w-full max-md:ml-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/87f9af2cf9134ae09cac6960a9a0179c/54978ab086f254e58269e4b6e5517500c1e42277?placeholderIfAbsent=true"
              alt="Hero illustration"
              className="aspect-[0.47] object-contain w-full grow mt-[15px] rounded-[0px_0px_0px_0px] max-md:mt-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
