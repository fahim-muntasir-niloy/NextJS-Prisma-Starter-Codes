# Setting up a NextJS app with Prisma

## Basic Setup
To create a next app, run the command and follow the instructions.
```sql
npx create-next-app@latest
```

Intgrating `prisma` with the next app.
```sql
cd app_directory
npm i prisma --save-dev
```
Connect a Database to prisma, here we will use `sqlite`.

```sql
npx prisma init --datasource-provider sqlite
```
- Always hide `.env` file in the gitignore.

## Setting Prisma
Create a model schema
```sql
model TODO{
  id String @id @default(uuid()) // primary key
  title String
  complete Boolean
  created DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```
Migrate the model to Database:
```sql
npx prisma migrate dev --name init
```
This would confirm the migration. Lastly to use the prisma client in the app, create a `db.ts` file in the `src` directory, and import `prisma client`.

```ts
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
```
*In development, the command next dev clears Node.js cache on run. This in turn initializes a new PrismaClient instance each time due to hot reloading that creates a connection to the database. This can quickly exhaust the database connections as each PrismaClient instance holds its own connection pool. Thats why the following code is used.*

Now simply start the application by:
```npm
npm run dev
```