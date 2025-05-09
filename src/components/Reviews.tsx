
import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface Review {
  id: number;
  name: string;
  occupation: string;
  rating: number;
  comment: string;
  headline: string;
  frame: number;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Dhruv Sidhpura",
    occupation: "Athlete",
    rating: 4.5,
    headline: "\"It's like having a personal trainer in my pocket\"",
    comment: "The AI motion tracking is incredibly accurate. It corrected my posture in real-time and actually helped me feel the difference. I don't have to worry about gym timings anymore. Super useful for someone like me who prefers working out at home.",
    frame: 31
  },
  {
    id: 2,
    name: "Abhishek Dubey",
    occupation: "Student",
    rating: 4,
    headline: "\"Finally, an app that keeps me consistent!\"",
    comment: "The gamified experience is addictive! Watching my rank go up on the leaderboard every week actually pushes me to work out daily. The points and progress system make fitness fun again",
    frame: 31
  },
  {
    id: 3,
    name: "Madhuri Gedam",
    occupation: "Teacher",
    rating: 4.5,
    headline: "\"Perfect for beginners and hostel life\"",
    comment: "I didn't have access to a gym, but Arthlete made it easy to stay on track. The exercises are guided and safe, and I love how the app gives instant feedback. Excited to see where it goes next.",
    frame: 31
  },
  {
    id: 4,
    name: "Yash Ekke",
    occupation: "Student",
    rating: 4,
    headline: "\"Finally, an app that keeps me consistent!\"",
    comment: "Arthlete completely changed my home workout game! The AI motion tracking is super accurate and keeps me motivated every day.",
    frame: 30
  },
  {
    id: 5,
    name: "Priya Sharma",
    occupation: "Software Engineer",
    rating: 5,
    headline: "\"The smartest fitness app I've ever used\"",
    comment: "As someone with a busy schedule, Arthlete has been a game-changer. The personalized workout plans adapt to my progress, and the AI feedback is like having a coach with me at all times.",
    frame: 29
  },
  {
    id: 6,
    name: "Rajesh Patel",
    occupation: "Business Owner",
    rating: 4.5,
    headline: "\"Transformed my fitness journey\"",
    comment: "After trying dozens of fitness apps, Arthlete is the only one I've stuck with for more than a month. The community features and challenges keep me engaged, and I've seen real results.",
    frame: 28
  }
];

const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <Card className="bg-black text-white p-6 rounded-xl flex flex-col min-h-[320px] md:min-h-[350px] border-none shadow-xl relative">
      <div className="text-xs text-slate-400 absolute top-6 right-6">Frame {review.frame}</div>
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-4">{review.headline}</h3>
        <p className="text-sm text-slate-300 mb-8">{review.comment}</p>
      </div>
      <div className="mt-auto flex items-center">
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
          {review.name.charAt(0)}
        </div>
        <div className="ml-3">
          <p className="font-medium">{review.name}</p>
          <p className="text-sm text-slate-400">{review.occupation}</p>
        </div>
        <div className="ml-auto flex items-center">
          {Array(5).fill(0).map((_, i) => (
            <span key={i} className="text-yellow-400">
              {i < Math.floor(review.rating) ? "★" : i < review.rating ? "★" : "☆"}
            </span>
          ))}
          <span className="ml-1 text-sm text-slate-300">({review.rating})</span>
        </div>
      </div>
    </Card>
  );
};

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [activeIndex, autoplay]);

  const reviewsPerPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % totalPages);
  };
  
  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const visibleReviews = [];
  for (let i = 0; i < reviewsPerPage; i++) {
    const index = (activeIndex * reviewsPerPage + i) % reviews.length;
    visibleReviews.push(reviews[index]);
  }

  return (
    <section className="py-16 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">What Our Users Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join thousands of satisfied users who have transformed their fitness journey with Arthlete.
          </p>
        </div>
        
        <div className="relative">
          <button 
            onClick={() => {
              prevSlide();
              setAutoplay(false);
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 p-2 rounded-full text-white -ml-4 hover:bg-blue-700 transition-all"
            style={{
              boxShadow: '0 0 15px rgba(37, 99, 235, 0.5)'
            }}
          >
            <ChevronLeftIcon size={24} />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
          
          <button 
            onClick={() => {
              nextSlide();
              setAutoplay(false);
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 p-2 rounded-full text-white -mr-4 hover:bg-blue-700 transition-all"
            style={{
              boxShadow: '0 0 15px rgba(37, 99, 235, 0.5)'
            }}
          >
            <ChevronRightIcon size={24} />
          </button>
        </div>
        
        <div className="mt-6 flex justify-center gap-2">
          {Array(totalPages).fill(0).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveIndex(i);
                setAutoplay(false);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                activeIndex === i ? "bg-blue-500 w-6" : "bg-gray-700"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
