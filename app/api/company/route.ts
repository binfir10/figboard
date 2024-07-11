import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const data = await req.json();
    if (!userId) {
      return new Response("Unauthorized", { status: 401 });
    }

    const company = await db.company.create({
      data: {
        ...data,
        userId,
      },
    });

    return NextResponse.json(company);
  } catch (error) {
    console.log("[Company]", error);
    return new Response("Internal Error", { status: 500 });
  }
}
