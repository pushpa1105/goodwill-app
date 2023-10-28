const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Human" },
        { name: "Photography" },
        { name: "Entertainment" },
        { name: "Fitness" },
        { name: "Physcology" },
        { name: "Women" },
        { name: "Life" },
        { name: "Tragedy" },
      ],
    });

    console.log("Database seeding completed succesfully.");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();
