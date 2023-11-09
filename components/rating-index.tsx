import { Rating } from "./rating";
import { Progress } from "./ui/progress";

export const RatingIndex = () => {
  return (
    <>
      <div className="flex w-full justify-end items-center">
        <Progress value={95} className="h-3 w-[60%] mr-4" variant="theme" />
        <Rating rate={5} />
        <span className="ml-4">95%</span>
      </div>
      <div className="flex w-full justify-end items-center">
        <Progress value={85} className="h-3 w-[60%] mr-4" variant="theme" />
        <Rating rate={4} />
        <span className="ml-4">85%</span>
      </div>
      <div className="flex w-full justify-end items-center">
        <Progress value={60} className="h-3 w-[60%] mr-4" variant="theme" />
        <Rating rate={3} />
        <span className="ml-4">60%</span>
      </div>
      <div className="flex w-full justify-end items-center">
        <Progress value={50} className="h-3 w-[60%] mr-4" variant="theme" />
        <Rating rate={2} />
        <span className="ml-4">50%</span>
      </div>
      <div className="flex w-full justify-end items-center">
        <Progress value={35} className="h-3 w-[60%] mr-4" variant="theme" />
        <Rating rate={1} />
        <span className="ml-4">35%</span>
      </div>
    </>
  );
};
