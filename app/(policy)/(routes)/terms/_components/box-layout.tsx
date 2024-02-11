export const BoxLayout = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="rounded-lg shadow-xl p-4 border my-4 font-light">
      <p className="text-theme font-bold md:text-lg text-base mt-2">{title}</p>
      {children}
    </div>
  );
};
