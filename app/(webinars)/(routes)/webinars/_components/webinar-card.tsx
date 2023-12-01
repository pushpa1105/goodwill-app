"use client";

interface WebinarCardProps {
  webinar: {
    id: number;
    level: string;
    langugae: string;
    startAt: string;
    speaker: {
      name: string;
      imageUrl: string;
    };
  };
}

export const WebinarCard = ({ webinar }: WebinarCardProps) => {
    console.log(webinar.level)
  return (
    <div className="w-50 shadow-xl p-4 m-4 rounded bg-custom">
      <div>Card</div>
      <div>{webinar.level}</div>
    </div>
  );
};
