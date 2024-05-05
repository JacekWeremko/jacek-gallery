import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
import { number } from "zod";

export async function getMyImages() {
  const user = auth();

  if (!user.userId) throw new Error("Unauthenticated");

  const images = await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });
  return images;
}

export async function getMyImage(id: string) {
  //const user = auth();
  const imageId = Number(id);
  const image = await db.query.images.findFirst({
    where: (model, { eq }) => eq(model.id, imageId),
  });

  if (!image) {
    throw new Error("Image not found");
  }
  console.log(image.userId);
  //if (user.userId !== image.userId) throw new Error("Unauthorized")

  return image;
}
