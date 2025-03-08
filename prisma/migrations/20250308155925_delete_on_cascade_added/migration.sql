-- DropForeignKey
ALTER TABLE "Directory" DROP CONSTRAINT "Directory_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "Directory" DROP CONSTRAINT "Directory_parentDirectoryId_fkey";

-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_directoryId_fkey";

-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_ownerId_fkey";

-- AddForeignKey
ALTER TABLE "Directory" ADD CONSTRAINT "Directory_parentDirectoryId_fkey" FOREIGN KEY ("parentDirectoryId") REFERENCES "Directory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Directory" ADD CONSTRAINT "Directory_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_directoryId_fkey" FOREIGN KEY ("directoryId") REFERENCES "Directory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
