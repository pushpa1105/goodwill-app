/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { NavBar } from "@/components/nav-items/navbar";
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

const ProductsPage = async ({ searchParams }: BlogPageProps) => {
  const productPageContent = await db.productPageContent.findFirst();
  const products = await db.productData.findMany();

  return (
    <>
      <div className="h-[80px] fixed inset-y-0 w-full z-50">
        <NavBar />
      </div>
      <main>
        <div className="bg-theme">
          <div className="py-[80px] lg:w-[80%] m-auto">
            <div className="mt-12">
              <div className="flex flex-wrap gap-y-8 justify-center max-w-auto md:max-w-[85%] m-auto mt-4">
                <div className="p-4 w-[85%] lg:w-[47%] m-auto">
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
          </div>
        </div>
        <div className="lg:w-[95%] m-auto">
          <div className="md:px-8 lg:w-[95%] mx-auto my-8 py-8 ">
            <div className="flex justify-center mb-8">
              <h1 className="text-theme text-3xl md:text-5xl font-extrabold">
                Our Products
              </h1>
            </div>
            <ProductsCarousel products={products} />
          </div>
          <img
            src="https://stock-logos.dhan.co/static-openweb/dhanBorder.png"
            alt="line"
          />
          {productPageContent?.videoText && (
            <div className="lg:w-[80%] m-auto my-8 text-theme">
              <h1 className="text-center m-auto text-3xl md:text-5xl font-bold">
                {productPageContent?.videoText}
              </h1>
            </div>
          )}
          <div className="mt-12 flex justify-center pb-8 w-[95%] md:w-[90%] lg:w-[80%] mx-auto h-[300px] md:h-[500px] lg:h-[700px]">
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

export default ProductsPage;
