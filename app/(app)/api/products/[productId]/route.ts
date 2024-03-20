import { isAdmin } from "@/lib/admin";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(
    req: Request,
    { params }: { params: { productId: string } }
  ) {
    try {
      const { userId } = auth();
      const { productId } = params;
      const values = await req.json();
  
      const isAuthorized = await isAdmin();
  
      if (!userId || !isAuthorized) {
        return new NextResponse("Unauthorized", { status: 401 });
      }
  
    //   if (values.videoUrl) {
    //     const existingMuxData = await db.courseVideo.findFirst({
    //       where: {
    //         productId,
    //       },
    //     });
  
    //     if (existingMuxData) {
    //       await Video.Assets.del(existingMuxData.assetId);
    //       await db.courseVideo.delete({
    //         where: {
    //           id: existingMuxData.id,
    //         },
    //       });
    //     }
  
    //     const asset = await Video.Assets.create({
    //       input: values.videoUrl,
    //       playback_policy: "public",
    //       test: false,
    //     });
  
    //     await db.courseVideo.create({
    //       data: {
    //         courseId,
    //         assetId: asset.id,
    //         playbackId: asset.playback_ids?.[0]?.id,
    //       },
    //     });
    //   }
  
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
