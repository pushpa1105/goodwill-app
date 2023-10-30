import Image from "next/image";

interface LandingCarouselCardProps {
  label: string;
  description?: string;
  imageUrl: string;
}

export const LandingCarouselCard = ({
  label,
  description,
  imageUrl,
}: LandingCarouselCardProps) => {
  return (
    <div className="relative">
      <div className="rounded h-[100%] relative group">
        <div className="relative w-full aspect-video rounded-md overflow-hidden">
          <Image
            fill
            className="w-full h-auto transform-gpu transition duration-500 group-hover:blur-sm duration-150"
            alt="explore"
            src={imageUrl}
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100 duration-150">
          <h3 className="font-normal text-xl text-white">{label}</h3>
          {description && <h5>{description}</h5>}
        </div>
      </div>
    </div>
  );
};
