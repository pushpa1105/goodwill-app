import Image from "next/image";

interface LandingCarouselCardProps {
  label: string;
  description?: string;
  imageUrl: string;
}

export const ProductCarouselCard = ({
  label,
  description,
  imageUrl,
}: LandingCarouselCardProps) => {
  return (
    <div className="relative h-[333px] w-[250px] m-auto">
      <div className="rounded h-[100%] relative group w-[100%]">
        <div className="relative w-full rounded-md overflow-hidden h-[100%] w-[100%]">
          <Image
            fill
            className="w-full h-auto transform-gpu transition duration-500 group-hover:blur-sm duration-150 object-cover"
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
