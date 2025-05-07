import React from 'react';

export const Features: React.FC = () => {
  const features = [
    {
      title: "Personalized Nutrition Plans",
      description: "Receive a tailored nutrition plan designed specifically for your body and goals. Our certified nutritionists will consider your unique needs, dietary preferences, and health conditions to create a plan that suits you best.",
      icon: "https://cdn.builder.io/api/v1/image/assets/87f9af2cf9134ae09cac6960a9a0179c/22cbc13a4af134dde008819b8442e5b23a39710c?placeholderIfAbsent=true",
      bgColor: "rgba(254,95,32,1)"
    },
    {
      title: "Expert-Backed Guidance",
      description: "Receive actionable insights powered by AI and validated by experts. Arthlete provides recommendations to help you stay on track and motivated throughout your fitness journey.",
      icon: "https://cdn.builder.io/api/v1/image/assets/87f9af2cf9134ae09cac6960a9a0179c/c3879508421227f1bc39e7f512e253273b34b500?placeholderIfAbsent=true",
      bgColor: "rgba(254,85,43,1)"
    },
    {
      title: "Smart Food Logging & Analysis",
      description: "Easily track your meals using our app. Arthlete analyzes your intake, detects nutritional gaps, and gives real-time suggestions to improve your diet in sync with your workouts.",
      icon: "https://cdn.builder.io/api/v1/image/assets/87f9af2cf9134ae09cac6960a9a0179c/b1c5755100bd52f92808d42f188d34bc0fe87328?placeholderIfAbsent=true",
      bgColor: "rgba(254,85,43,1)"
    },
    {
      title: "Dynamic Meal Suggestions",
      description: "Explore meals recommended by our AI engine based on your training load, recovery needs, and personal goals. Recipes adapt daily so you stay energized and consistent.",
      icon: "https://cdn.builder.io/api/v1/image/assets/87f9af2cf9134ae09cac6960a9a0179c/557d2e80a096851e4ec8fcffc59b6dfadb3623ca?placeholderIfAbsent=true",
      bgColor: "rgba(254,95,32,1)"
    },
    {
      title: "Habits & Recovery Coaching",
      description: "Fitness is more than workouts—Arthlete helps you build sustainable habits, improve sleep, manage stress, and stay mentally strong with AI-powered behavioral nudges.",
      icon: "https://cdn.builder.io/api/v1/image/assets/87f9af2cf9134ae09cac6960a9a0179c/f11b36d28d1151a601be983c87dea421c1567277?placeholderIfAbsent=true",
      bgColor: "rgba(254,95,32,1)"
    },
    {
      title: "Bite-Sized Learning Modules",
      description: "Learn the science behind what you eat. Unlock micro-courses, tips, and challenges inside the app to make smarter, long-term choices for your health and performance.",
      icon: "https://cdn.builder.io/api/v1/image/assets/87f9af2cf9134ae09cac6960a9a0179c/33117b57405c9b565845237d15875c2222ec70b5?placeholderIfAbsent=true",
      bgColor: "rgba(254,85,43,1)"
    }
  ];

  return (
    <section className="mt-[113px] max-md:max-w-full max-md:mt-10">
      <div className="w-full text-center px-[250px] max-md:max-w-full max-md:px-5">
        <h2 className="text-neutral-800 text-[38px] font-bold max-md:max-w-full">
          Features
        </h2>
        <p className="text-[#333] text-base font-medium mt-1.5 max-md:max-w-full">
          Welcome to the Feature Section of Nutritionist, your ultimate destination for all things nutrition and wellness.
        </p>
      </div>
      <div className="w-full mt-[60px] max-md:max-w-full max-md:mt-10">
        <div className="flex w-full items-stretch gap-5 flex-wrap max-md:max-w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-[color:var(--Green-85,#E5F5BD)] min-w-60 flex-1 shrink basis-[0%] bg-[#F6FBE9] p-10 rounded-[10px] border-solid max-md:max-w-full max-md:px-5"
            >
              <div className="flex w-full items-center gap-2.5 flex-wrap max-md:max-w-full">
                <div
                  className={`bg-[${feature.bgColor}] self-stretch flex items-center gap-2.5 w-[54px] h-[54px] my-auto p-3 rounded-md`}
                >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="aspect-[1] object-contain w-[30px]"
                  />
                </div>
                <h3 className="text-neutral-800 text-xl font-semibold self-stretch flex-1 shrink basis-6 my-auto max-md:max-w-full">
                  {feature.title}
                </h3>
              </div>
              <p className="text-[#333] text-base font-medium leading-6 mt-5 max-md:max-w-full">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
