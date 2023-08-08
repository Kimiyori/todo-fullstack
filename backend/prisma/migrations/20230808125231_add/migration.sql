/*
  Warnings:

  - You are about to drop the column `text` on the `Item` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "ItemCategory" AS ENUM ('NewTask', 'InProcess', 'Completed');

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "text",
ADD COLUMN     "category" "ItemCategory" NOT NULL DEFAULT 'NewTask';
