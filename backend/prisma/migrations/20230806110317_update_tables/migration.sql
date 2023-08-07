/*
  Warnings:

  - You are about to alter the column `name` on the `Section` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(140)`.
  - A unique constraint covering the columns `[sectionId]` on the table `Item` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Item` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Made the column `sectionId` on table `Item` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_sectionId_fkey";

-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "name" VARCHAR(140) NOT NULL,
ALTER COLUMN "sectionId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Section" ALTER COLUMN "name" SET DATA TYPE VARCHAR(140);

-- CreateIndex
CREATE UNIQUE INDEX "Item_sectionId_key" ON "Item"("sectionId");

-- CreateIndex
CREATE UNIQUE INDEX "Item_name_key" ON "Item"("name");

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE CASCADE ON UPDATE CASCADE;
