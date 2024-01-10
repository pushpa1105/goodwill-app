import { db } from "@/lib/db";
import { getData } from "@/lib/zoom";
import { auth } from "@clerk/nextjs";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { authToken, url } = await req.json();

    if (!userId && !authToken)
      return new NextResponse("Unauthorized", { status: 401 });

    let data;
    await axios({
      url,
      headers: {
        Authorization: "Bearer " + authToken,
      },
    })
      .then((res) => {
        data = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return NextResponse.json(data || []);
  } catch (error) {
    console.log("[ZOOM]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
