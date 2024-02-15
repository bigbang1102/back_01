/*
  Warnings:

  - You are about to drop the column `user_id` on the `consult` table. All the data in the column will be lost.
  - You are about to drop the column `itemstatus` on the `order_details` table. All the data in the column will be lost.
  - You are about to drop the column `more_id` on the `trainner_payment` table. All the data in the column will be lost.
  - You are about to drop the `more` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `amount` to the `Order_Details` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pay` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `claus_id` to the `Trainner_payment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `consult` DROP FOREIGN KEY `Consult_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `list` DROP FOREIGN KEY `List_more_id_fkey`;

-- DropForeignKey
ALTER TABLE `trainner_payment` DROP FOREIGN KEY `Trainner_payment_more_id_fkey`;

-- AlterTable
ALTER TABLE `consult` DROP COLUMN `user_id`;

-- AlterTable
ALTER TABLE `order_details` DROP COLUMN `itemstatus`,
    ADD COLUMN `amount` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `payment` ADD COLUMN `pay` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `trainner_payment` DROP COLUMN `more_id`,
    ADD COLUMN `claus_id` INTEGER NOT NULL;

-- DropTable
DROP TABLE `more`;

-- CreateTable
CREATE TABLE `Claus` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `details` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `quantity` VARCHAR(191) NOT NULL,
    `user_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `List` ADD CONSTRAINT `List_more_id_fkey` FOREIGN KEY (`more_id`) REFERENCES `Claus`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Claus` ADD CONSTRAINT `Claus_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Trainner_payment` ADD CONSTRAINT `Trainner_payment_claus_id_fkey` FOREIGN KEY (`claus_id`) REFERENCES `Claus`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
