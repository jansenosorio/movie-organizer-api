-- CreateEnum
CREATE TYPE "Types" AS ENUM ('WATCHED', 'WAITING');

-- CreateTable
CREATE TABLE "User" (
    "userId" SERIAL NOT NULL,
    "userName" TEXT NOT NULL,
    "userEmail" VARCHAR(20) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Movies" (
    "movieId" SERIAL NOT NULL,
    "movieName" TEXT NOT NULL,
    "genreType" TEXT NOT NULL,
    "status" "Types" NOT NULL DEFAULT 'WAITING',
    "platformId" INTEGER NOT NULL,

    CONSTRAINT "Movies_pkey" PRIMARY KEY ("movieId")
);

-- CreateTable
CREATE TABLE "Comments" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authorId" INTEGER NOT NULL,
    "movieId" INTEGER NOT NULL,

    CONSTRAINT "Comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Platforms" (
    "platformId" SERIAL NOT NULL,
    "platformName" TEXT NOT NULL,

    CONSTRAINT "Platforms_pkey" PRIMARY KEY ("platformId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userEmail_key" ON "User"("userEmail");

-- AddForeignKey
ALTER TABLE "Movies" ADD CONSTRAINT "Movies_platformId_fkey" FOREIGN KEY ("platformId") REFERENCES "Platforms"("platformId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movies"("movieId") ON DELETE RESTRICT ON UPDATE CASCADE;
