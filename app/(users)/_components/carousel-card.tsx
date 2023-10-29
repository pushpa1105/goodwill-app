import Image from "next/image";

interface CarouselCardProps {
  label: string;
  description?: string;
  imageUrl: string;
}

export const CarouselCard = ({
  label,
  description,
  imageUrl,
}: CarouselCardProps) => {
  return (
    <div className="h-[200px] relative">
      <div className="rounded snip1584 h-[100%]">
        <Image
          src={imageUrl}
          alt="courses"
          width={250}
          height={200}
          className="w-[100%] h-[100%]"
        />
        <div className="caption">
          <h3>{label}</h3>
          {description && <h5>{description}</h5>}
        </div>
      </div>
    </div>
  );
};
