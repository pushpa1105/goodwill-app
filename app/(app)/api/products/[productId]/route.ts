import { db } from "@/lib/db";
import { authMiddleware } from "@/app/(app)/api/_utils/middleware";
import { NextResponse } from "next/server";

export async function PATCH(
    req: Request,
    { params }: { params: { productId: string } }
  ) {
    try {
      const response = await authMiddleware("admin");
      if (response.status !== 200) return response;

      const { productId } = params;
      const values = await req.json();
  
      const product = await db.productPageContent.update({
        where: {
          id: productId,
        },
        data: {
          ...values,
        },
      });
  
      return NextResponse.json(product);
    } catch (error) {
      console.log("[PRODUCT_ID]", error);
      return new NextResponse("Internal Error", { status: 500 });
    }
  }
