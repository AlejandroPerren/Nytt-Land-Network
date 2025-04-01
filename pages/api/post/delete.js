import { NextResponse } from "next/server";
import { verifyToken } from "@/middleware/authMiddleware";
import prisma from "@/lib/prisma";
import fs from "fs";
import path from "path";


export async function DELETE(req, { params }) {
    try {
      const user = verifyToken(req);
      const { id } = params;
      const post = await prisma.post.findUnique({ where: { id } });
      if (!post || post.authorId !== user.id) throw new Error("No autorizado");
  
      if (post.imageUrl) fs.unlinkSync(path.join(process.cwd(), "public", post.imageUrl));
      await prisma.post.delete({ where: { id } });
  
      return NextResponse.json({ message: "Post eliminado" });
    } catch (error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }