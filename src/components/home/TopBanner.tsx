import React from 'react';

export const TopBanner: React.FC = () => {
  return (
    <div className="justify-center items-stretch border-b-[color:var(--Dark-Green-20,#234338)] bg-[#E8DCDC] flex w-full flex-col text-base text-white font-medium px-[70px] py-3.5 border-b border-solid max-md:max-w-full max-md:px-5">
      <div className="border border-[color:var(--Dark-Green-25,#2C5446)] bg-[#FE5F20] flex w-[1280px] max-w-full items-stretch gap-5 overflow-hidden flex-wrap justify-between px-[53px] rounded-md border-solid max-md:px-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/87f9af2cf9134ae09cac6960a9a0179c/9da39699478cb51eb3bf5e592d79c62407993811?placeholderIfAbsent=true"
          alt="Left decoration"
          className="aspect-[3.6] object-contain w-36 shrink-0 max-w-full"
        />
        <div className="flex items-stretch gap-5 flex-wrap my-auto max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/87f9af2cf9134ae09cac6960a9a0179c/18c2c84eb9ef7e55b0577a71755a650f3b48d45e?placeholderIfAbsent=true"
            alt="Icon"
            className="aspect-[1] object-contain w-5 shrink-0"
          />
          <div className="text-white basis-auto grow shrink max-md:max-w-full">
            Try Arthlete's Free AI-Powered Workout Demo – Built Just for You
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/87f9af2cf9134ae09cac6960a9a0179c/97bd73e28471657dc8996caef99a8b837d552644?placeholderIfAbsent=true"
          alt="Right decoration"
          className="aspect-[3.6] object-contain w-36 shrink-0 max-w-full"
        />
      </div>
    </div>
  );
};
