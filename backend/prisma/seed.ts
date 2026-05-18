import { PrismaClient, Department, ToolStatus } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const engineering = await prisma.category.create({
    data: {
      name: 'Development',
    },
  });

  const communication = await prisma.category.create({
    data: {
      name: 'Communication',
    },
  });

  await prisma.tool.createMany({
    data: [
      {
        name: 'Slack',
        description: 'Team messaging platform',
        vendor: 'Slack Technologies',
        websiteUrl: 'https://slack.com',
        monthlyCost: 8,
        ownerDepartment: Department.Engineering,
        status: ToolStatus.active,
        activeUsersCount: 25,
        categoryId: communication.id,
      },
      {
        name: 'GitHub',
        description: 'Code hosting platform',
        vendor: 'GitHub',
        websiteUrl: 'https://github.com',
        monthlyCost: 12,
        ownerDepartment: Department.Engineering,
        status: ToolStatus.active,
        activeUsersCount: 18,
        categoryId: engineering.id,
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
