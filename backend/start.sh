#!/bin/sh

echo "Running Prisma migrations..."
npx prisma migrate deploy

echo "Running database seed..."
npx prisma db seed

echo "Starting NestJS application..."
npm run start:dev