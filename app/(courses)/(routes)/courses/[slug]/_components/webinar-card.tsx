import Image from "next/image";

interface MiniWebinarCardProps {
  imageUrl: string;
}

export const WebinarCard = ({
  imageUrl,
}: MiniWebinarCardProps) => {
  return (
    <div className="group flex flex-start p-[5px] webinar_box_wrapper">
      <div className="relative w-full h-[150px] aspect-video rounded-md overflow-hidden">
        <Image
          fill
          className="object-fit group-hover:scale-110 transition duration-250 rounded"
          alt="webinar"
          src={imageUrl ?? '/webinar.png'}
        />
      </div>
    </div>
  );
};
