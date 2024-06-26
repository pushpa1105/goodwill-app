import { Footer } from "@/components/footer";
import { NavBar } from "@/components/nav-items/navbar";

const WebinarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="h-[80px] fixed inset-y-0 w-full z-50 ">
        <NavBar />
      </div>
      <main className="pt-[80px] h-full">
        <>
          {children}
          <Footer />
        </>
      </main>
    </div>
  );
};

export default WebinarLayout;
