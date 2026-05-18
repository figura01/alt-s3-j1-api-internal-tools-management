-- CreateEnum
CREATE TYPE "Department" AS ENUM ('Engineering', 'Sales', 'Marketing', 'HR', 'Finance', 'Operations', 'Design');

-- CreateEnum
CREATE TYPE "ToolStatus" AS ENUM ('active', 'deprecated', 'trial');

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tools" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "vendor" TEXT NOT NULL,
    "website_url" TEXT,
    "monthly_cost" DECIMAL(10,2) NOT NULL,
    "owner_department" "Department" NOT NULL,
    "status" "ToolStatus" NOT NULL DEFAULT 'active',
    "active_users_count" INTEGER NOT NULL DEFAULT 0,
    "category_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tools_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usage_metrics" (
    "id" SERIAL NOT NULL,
    "tool_id" INTEGER NOT NULL,
    "period" TEXT NOT NULL,
    "total_sessions" INTEGER NOT NULL,
    "avg_session_minutes" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usage_metrics_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "tools_name_key" ON "tools"("name");

-- AddForeignKey
ALTER TABLE "tools" ADD CONSTRAINT "tools_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usage_metrics" ADD CONSTRAINT "usage_metrics_tool_id_fkey" FOREIGN KEY ("tool_id") REFERENCES "tools"("id") ON DELETE CASCADE ON UPDATE CASCADE;
