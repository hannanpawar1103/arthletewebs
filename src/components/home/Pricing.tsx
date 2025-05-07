import React, { useState } from 'react';

export const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      title: "Fitness Plan",
      description: "Get started with AI-powered motion tracking tailored to your workouts. Perfect for solo users looking to improve form and consistency using advanced posture detection.",
      features: [
        "Real-time form correction",
        "Weekly progress insights",
        "Weekly fitness challenges"
      ],
      price: isYearly ? 199 : 249,
    },
    {
      title: "Diet Plan",
      description: "A standalone personalized diet plan built for your fitness goals. Ideal for users who only want nutritional support.",
      features: [
        "Customized meal plans",
        "Weekly fitness challenges",
        "Weekly nutrition tips",
        "Direct dietician-curated updates"
      ],
      price: isYearly ? 159 : 199,
    },
    {
      title: "Ultimate Plan",
      description: "Unlock the complete Arthlete experience – motion tracking + personalized diet plans. The all-in-one plan for serious transformation.",
      features: [
        "Everything in Basic",
        "Everything in Diet Plan",
        "Premium AI Tracker",
        "Weekly fitness challenges"
      ],
      price: isYearly ? 299 : 349,
    }
  ];

  return (
    <section className="flex flex-col relative min-h-[1028px] w-full overflow-hidden pt-[60px] pb-[166px] px-[70px] max-md:pb-[100px] max-md:px-5">
      <div className="w-full text-center px-[250px] max-md:max-w-full max-md:px-5">
        <h2 className="text-neutral-800 text-[38px] font-bold max-md:max-w-full">
          Our Pricing
        </h2>
        <p className="text-[#333] text-base font-medium leading-6 mt-1.5 max-md:max-w-full">
          We provide flexible, affordable options to support your fitness and wellness journey.
          Whether you're just starting or going all-in, we've got a plan for you.
        </p>
      </div>

      <div className="self-center flex w-[311px] max-w-full flex-col items-stretch mt-10">
        <div className="border self-center flex items-center text-sm font-semibold whitespace-nowrap p-2.5 rounded-lg border-[rgba(254,95,32,1)] border-solid">
          <button
            onClick={() => setIsYearly(false)}
            className={`self-stretch gap-2.5 px-6 py-2.5 rounded-md max-md:px-5 ${
              !isYearly
                ? 'bg-[#234338] text-white'
                : 'text-[#4C4C4C]'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`self-stretch gap-2.5 px-6 py-2.5 rounded-[100px] max-md:px-5 ${
              isYearly
                ? 'bg-[#234338] text-white'
                : 'text-[#4C4C4C]'
            }`}
          >
            Yearly
          </button>
        </div>
        <div className="text-[#4C4C4D] text-center text-base font-medium mt-2.5">
          Save 15% on Yearly
        </div>
      </div>

      <div className="flex w-full gap-5 flex-wrap mt-10 max-md:max-w-full">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="border border-[color:var(--Green-90,#EEF8D3)] bg-[#F6FBE9] min-w-60 flex-1 shrink basis-[0%] p-10 rounded-[10px] border-solid max-md:px-5"
          >
            <div className="w-full">
              <h3 className="text-neutral-800 text-2xl font-semibold">
                {plan.title}
              </h3>
              <p className="text-[#4C4C4D] text-base font-medium">
                Up to 15% off on Yearly Plan
              </p>
            </div>
            <p className="text-neutral-800 text-base font-medium leading-6 mt-[30px]">
              {plan.description}
              <br /><br />
              {plan.features.map((feature, i) => (
                <React.Fragment key={i}>
                  {feature}<br />
                </React.Fragment>
              ))}
            </p>
            <div className="flex w-full flex-col items-stretch mt-[30px]">
              <div className="flex items-center gap-0.5 whitespace-nowrap justify-center">
                <div className="text-[#2C5446] text-[40px] font-bold leading-none self-stretch my-auto">
                  ₹{plan.price}
                </div>
                <div className="text-[#333] text-base font-medium self-stretch my-auto">
                  /month
                </div>
              </div>
              <button className="self-stretch bg-[rgba(254,95,32,0.75)] w-full gap-2.5 text-sm text-neutral-800 font-semibold mt-6 px-6 py-3.5 rounded-md max-md:px-5">
                Choose Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
