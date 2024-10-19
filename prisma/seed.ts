import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

async function main() {

  const admin = await prisma.admin.findFirst();
  if (admin) {
    console.log("Admin already exists");
  } else {

    await prisma.admin.create({
      data: {
        username: "admin",
        password: await bcrypt.hash("admin2024!@", 10),
      },
    });
    
  }
  const consultants = await prisma.consultant.findMany({
    where: {
      active: true,
    },
  });

  if (consultants.length === 0) {
    await prisma.consultant.create({
      data: {
        name: "JK",
        phoneNumber: "010-8448-8075",
        active: true,
      },
    });
  }
  return;
}

main()
  .then(async () => {
    console.log("Seeded");
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
