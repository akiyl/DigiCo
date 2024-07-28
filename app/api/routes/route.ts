// api/routes/pets.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request, res: Response) {
  const body = await req.json();

  const { name, imgUrl, description } = body;

  try {
    const newPet = await prisma.pet.create({
      data: {
        name,
        imgUrl,
        description,
      },
    });
    console.log("New pet created:", newPet);
    return Response.json(newPet);
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Could not create pet." });
  }
}
