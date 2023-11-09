import { Star } from "lucide-react";
import { StarIcon } from "./icons/star-icon";

export const Rating = ({ rate }: { rate: number }) => {
  const total = 5;
  const unrated = total - (rate || 0);
  const unratedStars = Array(unrated).fill(<Star size={20} color="#8808e3"/>);
  const ratedStars = Array(rate || 0).fill(<StarIcon />);
  return (
    <div className="flex">
      {rate > 0 &&
        ratedStars.map((item, index) => <div key={index}>{item}</div>)}
      {unrated > 0 &&
        unratedStars.map((item, index) => <div key={index}>{item}</div>)}
    </div>
  );
};
