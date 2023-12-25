import Link from "next/link";
import { NavBar } from "../../_components/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ProductsCarousel } from "./_components/product-carousel";

interface BlogPageProps {
  searchParams: {
    title: string;
    categoryId: string;
  };
}

const BlogsPage = async ({ searchParams }: BlogPageProps) => {
  //   const blogs = (await getBlogs({
  //     ...searchParams,
  //   })) as Array<
  //     Blog & {
  //       category: BlogCategory;
  //     }
  //   >;

  //   const latestBlogs = (await getBlogs({})) as Array<
  //     Blog & {
  //       category: BlogCategory;
  //     }
  //   >;
  //   const categories = await db.blogCategory.findMany({});

  return (
    <>
      <div className="h-[80px] fixed inset-y-0 w-full z-50">
        <NavBar />
      </div>
      <main className=" pt-[80px] bg-theme">
        <div className="lg:w-[80%] m-auto">
          <div className="mt-12">
            <div className="flex flex-wrap gap-y-8 justify-center max-w-auto md:max-w-[85%] m-auto mt-4">
              <div className="p-4 w-[85%] lg:w-[50%] m-auto">
                {/* <div className="text-3xl font-semibold">
                Want to have a product for trading?
              </div> */}
                <div className="text-5xl font-bold">
                  Get our product to have a great experience on trading.
                </div>
                <div>
                  <Link href="/courses">
                    <Button
                      size="lg"
                      className="rounded-full mt-4 bg-gradient-to-r from-custompurlple to-custompurlplelight shadow-lg text-xl font-bold"
                    >
                      Access Now
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mt-8 w-[85%] lg:w-auto p-4">
                <Image
                  src="https://next-landing-vpn.vercel.app/_next/image?url=%2Fassets%2FIllustration1.png&w=1920&q=100"
                  alt="VPN Illustrasi"
                  quality={100}
                  width={612}
                  height={383}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
          <div className="md:px-8 lg:w-[85%] mx-auto mt-8 ">
            <ProductsCarousel />
          </div>
          <div className="mt-8 flex justify-center pb-8">
            <iframe
              width="80%"
              height="500"
              src="https://www.youtube.com/embed/_YVQN6_nkfs?si=mm61S9OF17DBdrH7"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogsPage;
