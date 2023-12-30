import Link from "next/link";
import { NavBar } from "../../_components/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ProductsCarousel } from "./_components/product-carousel";
import { db } from "@/lib/db";

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
    const productPageContent = await db.productPageContent.findFirst();
    const products = await db.productData.findMany();

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
                  {productPageContent?.mainHeading}
                </div>
                <div>
                  <Link href={productPageContent?.buttonUrl!}>
                    <Button
                      size="lg"
                      className="rounded-full mt-4 bg-gradient-to-r from-custompurlple to-custompurlplelight shadow-lg text-xl font-bold"
                    >
                      {productPageContent?.buttonLabel}
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mt-8 w-[85%] lg:w-auto p-4">
                <Image
                  src={productPageContent?.mainImageUrl!}
                  alt="VPN Illustrasi"
                  quality={100}
                  width={612}
                  height={383}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
          <div className="md:px-8 lg:w-[85%] mx-auto my-8 py-8">
            <ProductsCarousel products={products}/>
          </div>
          <div className="mt-8 flex justify-center pb-8 w-[95%] md:w-[80%] mx-auto h-[300px] md:h-[500px]">
            <iframe
              width="100%"
              height="100%"
              src={productPageContent?.videoUrl}
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
