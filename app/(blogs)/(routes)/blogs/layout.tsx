import Sidebar from "../../_components/Sidebar";
import { NavBar } from "../../_components/navbar";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      {/* <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50"> */}
      <div className="h-[80px] fixed inset-y-0 w-full z-50">
        <NavBar />
      </div>
      {/* <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div> */}
      <main className="pt-[80px] h-full">{children}</main>
    </div>
  );
};

export default BlogLayout;
