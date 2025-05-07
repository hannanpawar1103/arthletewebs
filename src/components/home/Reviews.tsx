import React from 'react';

export const Reviews: React.FC = () => {
  const reviews = [
    {
      text: "The Best Train Program!",
      content: "The boxing program helped me build confidence, strength, and endurance. The coaches are supportive and push you to be your best. Highly recommend for anyone serious about their fitness!",
      author: "Stive meloni",
      avatar: "https://cdn.builder.io/api/v1/image/assets/87f9af2cf9134ae09cac6960a9a0179c/a052cf977aa41c74f5fb0820c88e5d927ee592be?placeholderIfAbsent=true",
      rating: 4.5
    },
    // Add more reviews as needed
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1 text-sm whitespace-nowrap">
        {[...Array(5)].map((_, i) => (
          <img
            key={i}
            src={i < Math.floor(rating) ? "https://cdn.builder.io/api/v1/image/assets/87f9af2cf9134ae09cac6960a9a0179c/1044436b9d594cb59bf7079a7a93a9e58beaac15?placeholderIfAbsent=true" : "https://cdn.builder.io/api/v1/image/assets/87f9af2cf9134ae09cac6960a9a0179c/3933413415510e080a1f911965c4fd5eb4f6c230?placeholderIfAbsent=true"}
            alt={`${i < Math.floor(rating) ? "Full" : "Empty"} star`}
            className="aspect-[1.09] object-contain w-3 self-stretch shrink-0 my-auto"
          />
        ))}
        <div className="self-stretch">({rating})</div>
      </div>
    );
  };

  return (
    <section className="mt-20">
      <h2 className="text-black text-4xl font-bold ml-[30px] mt-[55px] max-md:max-w-full max-md:mt-10">
        What Our Users Are Saying
      </h2>
      <p className="text-black text-2xl font-normal ml-[30px] mt-3.5 max-md:max-w-full">
        Real Stories, Real Results – Hear From Our Athletes
      </p>
      <div className="flex flex-wrap gap-6 mt-10 px-20">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-[rgba(254,95,32,1)] flex w-[496px] max-w-full flex-col items-stretch px-[50px] py-[54px] rounded-[25px]"
          >
            <h3 className="text-2xl text-white">{review.text}</h3>
            <p className="text-lg text-white mt-[18px]">{review.content}</p>
            <div className="flex items-stretch gap-5 justify-between mt-[30px]">
              <div className="flex items-stretch gap-[23px] text-2xl text-white">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="aspect-[1] object-contain w-[71px] shrink-0"
                />
                <div className="basis-auto">{review.author}</div>
              </div>
              {renderStars(review.rating)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
