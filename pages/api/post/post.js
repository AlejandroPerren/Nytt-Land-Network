import { NextResponse } from "next/server";
import { verifyToken } from "@/middleware/authMiddleware";
import prisma from "@/lib/prisma";
import fs from "fs";
import path from "path";

export async function POST(req) {
  try {
    const user = verifyToken(req);
    const formData = await req.formData();
    const title = formData.get("title");
    const content = formData.get("content");
    const image = formData.get("image");

    if (!title || !content) {
      return NextResponse.json({ message: "Título y contenido requeridos" }, { status: 400 });
    }

    let imageUrl = null;
    if (image) {
      const buffer = Buffer.from(await image.arrayBuffer());
      const imagePath = `/public/imagesPost/${Date.now()}-${image.name}`;
      fs.writeFileSync(path.join(process.cwd(), imagePath), buffer);
      imageUrl = imagePath.replace("/public", "");
    }

    const post = await prisma.post.create({
      data: { title, content, imageUrl, authorId: user.id },
    });

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}