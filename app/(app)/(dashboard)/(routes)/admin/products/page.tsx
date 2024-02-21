import { getAnalytics } from "@/actions/get-analytics";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { DataCard } from "./_components/data-card";
import { Chart } from "./_components/chart";
import { db } from "@/lib/db";
import { TitleForm } from "./_components/title-form";
import { ImageForm } from "./_components/image-form";
import { ButtonForm } from "./_components/button-form";
import { ProductImageForm } from "./_components/product-image-form";
import { ProductTitleForm } from "./_components/product-title-form";
import { ProductDescriptionForm } from "./_components/product-description-form";
import { ProductUrlForm } from "./_components/product-url-form";
import { VideoUrlForm } from "./_components/video-url-form";
import { VideoTextForm } from "./_components/video-text-form";

const ProductsPage = async () => {
  const { userId } = auth();
  if (!userId) redirect("/");

  const productPageDetails = await db.productPageContent.findFirst();
  const products = await db.productData.findMany({ where: { isActive: true } });
  return (
    <div className="p-6">
      <div className="border p-4 grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <TitleForm
            initialData={productPageDetails!}
            productId={productPageDetails?.id!}
          />
          <ButtonForm
            initialData={productPageDetails!}
            productId={productPageDetails?.id!}
          />
          <VideoUrlForm
            initialData={productPageDetails!}
            productId={productPageDetails?.id!}
          />
          <VideoTextForm
            initialData={productPageDetails!}
            productId={productPageDetails?.id!}
          />
        </div>
        <ImageForm
          initialData={productPageDetails!}
          productId={productPageDetails?.id!}
        />
      </div>
      <div className="mt-4 border p-4">
        <h1>Products</h1>
        {products &&
          products.map((product, index) => (
            <div className="border p-4 mt-4" key={index}>
              <h1>Product : {index + 1}</h1>
              <div className="border p-4 grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <ProductTitleForm
                    initialData={product}
                    productId={product.id}
                  />
                  <ProductDescriptionForm
                    initialData={product}
                    productId={product.id}
                  />
                  <ProductUrlForm
                    initialData={product}
                    productId={product.id}
                  />
                </div>
                <ProductImageForm
                  initialData={product}
                  productId={product.id}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductsPage;
