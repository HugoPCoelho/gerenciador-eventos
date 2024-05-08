// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two initial categories
  const categoria1 = await prisma.categoria.upsert({
    where: { nome: 'Musical' },
    update: {},
    create: {
      nome: 'Musical'
    }
  });

  const categoria2 = await prisma.categoria.upsert({
    where: { nome: 'Covenção' },
    update: {},
    create: {
      nome: 'Covenção'
    }
  });

  console.log({ categoria1, categoria2 });
}

// execute the main function
main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });