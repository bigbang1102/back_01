/*
  Warnings:

  - You are about to drop the `claus` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `claus` DROP FOREIGN KEY `Claus_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `list` DROP FOREIGN KEY `List_more_id_fkey`;

-- DropForeignKey
ALTER TABLE `trainner_payment` DROP FOREIGN KEY `Trainner_payment_claus_id_fkey`;

-- DropTable
DROP TABLE `claus`;

-- CreateTable
CREATE TABLE `Clau` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `details` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `quantity` VARCHAR(191) NOT NULL,
    `user_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `List` ADD CONSTRAINT `List_more_id_fkey` FOREIGN KEY (`more_id`) REFERENCES `Clau`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Clau` ADD CONSTRAINT `Clau_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Trainner_payment` ADD CONSTRAINT `Trainner_payment_claus_id_fkey` FOREIGN KEY (`claus_id`) REFERENCES `Clau`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
