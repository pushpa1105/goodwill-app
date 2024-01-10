const { PrismaClient } = require("@prisma/client");
const ProductPageContent = {
  userId: "123",
  mainHeading: "Get our product to have a great experience on trading.",
  mainImageUrl:
    "https://next-landing-vpn.vercel.app/_next/image?url=%2Fassets%2FIllustration1.png&w=1920&q=100",
  buttonLabel: "Access Now",
  buttonUrl: "/courses",
  videoUrl: "https://www.youtube.com/embed/_YVQN6_nkfs?si=mm61S9OF17DBdrH7",
};

const ProductDatas = [
  {
    userId: "123",
    title: "Courses",
    description: "Get our product to have a great experience on trading.",
    imageUrl: "/blogs.jpg",
    redirectLink: "/courses",
  },
  {
    userId: "123",
    title: "Trading",
    description: "Get our product to have a great experience on trading.",
    imageUrl: "/blogs.jpg",
    redirectLink: "/courses",
  },
  {
    userId: "123",
    title: "Courses",
    description: "Get our product to have a great experience on trading.",
    imageUrl: "/blogs.jpg",
    redirectLink: "/courses",
  },
  {
    userId: "123",
    title: "Webinars",
    description: "Get our product to have a great experience on trading.",
    imageUrl: "/blogs.jpg",
    redirectLink: "/webinars",
  },
];

const database = new PrismaClient();

async function main() {
  try {
    // await database.category.createMany({
    //   data: [
    //     { name: "Human" },
    //     { name: "Photography" },
    //     { name: "Entertainment" },
    //     { name: "Fitness" },
    //     { name: "Physcology" },
    //     { name: "Women" },
    //     { name: "Life" },
    //     { name: "Tragedy" },
    //   ],
    // });

    // await database.blogCategory.createMany({
    //   data: [
    //     { name: "Human" },
    //     { name: "Photography" },
    //     { name: "Entertainment" },
    //     { name: "Fitness" },
    //     { name: "Physcology" },
    //     { name: "Women" },
    //     { name: "Life" },
    //     { name: "Tragedy" },
    //   ],
    // });

    await database.ProductPageContent.createMany({
      data: [ProductPageContent],
    });

    await database.ProductData.createMany({
      data: ProductDatas,
    });

    console.log("Database seeding completed succesfully.");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();
