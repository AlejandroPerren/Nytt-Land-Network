import { NextResponse } from "next/server";
import { verifyToken } from "@/middleware/authMiddleware";
import prisma from "@/lib/prisma";
import fs from "fs";
import path from "path";


export async function PUT(req, { params }) {
    try {
      const user = verifyToken(req);
      const { id } = params;
      const formData = await req.formData();
      const title = formData.get("title");
      const content = formData.get("content");
      const image = formData.get("image");
  
      let post = await prisma.post.findUnique({ where: { id } });
      if (!post || post.authorId !== user.id) throw new Error("No autorizado");
  
      let imageUrl = post.imageUrl;
      if (image) {
        if (imageUrl) fs.unlinkSync(path.join(process.cwd(), "public", imageUrl));
        const buffer = Buffer.from(await image.arrayBuffer());
        const imagePath = `/public/imagesPost/${Date.now()}-${image.name}`;
        fs.writeFileSync(path.join(process.cwd(), imagePath), buffer);
        imageUrl = imagePath.replace("/public", "");
      }
  
      post = await prisma.post.update({ where: { id }, data: { title, content, imageUrl } });
      return NextResponse.json(post);
    } catch (error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }