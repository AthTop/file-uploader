-- CreateTable
CREATE TABLE "ShareSession" (
    "id" TEXT NOT NULL,
    "directoryId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ShareSession_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ShareSession" ADD CONSTRAINT "ShareSession_directoryId_fkey" FOREIGN KEY ("directoryId") REFERENCES "Directory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
