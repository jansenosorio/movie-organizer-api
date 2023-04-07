/*
  Warnings:

  - You are about to drop the `Comments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Movies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Platforms` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_movieId_fkey";

-- DropForeignKey
ALTER TABLE "Movies" DROP CONSTRAINT "Movies_platformId_fkey";

-- DropTable
DROP TABLE "Comments";

-- DropTable
DROP TABLE "Movies";

-- DropTable
DROP TABLE "Platforms";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "users" (
    "userId" SERIAL NOT NULL,
    "userName" TEXT NOT NULL,
    "userEmail" VARCHAR(20) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "movies" (
    "movieId" SERIAL NOT NULL,
    "movieName" TEXT NOT NULL,
    "genreType" TEXT NOT NULL,
    "status" "Types" NOT NULL DEFAULT 'WAITING',
    "platformId" INTEGER NOT NULL,

    CONSTRAINT "movies_pkey" PRIMARY KEY ("movieId")
);

-- CreateTable
CREATE TABLE "comments" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authorId" INTEGER NOT NULL,
    "movieId" INTEGER NOT NULL,
    "comment" VARCHAR(150) NOT NULL,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "platforms" (
    "platformId" SERIAL NOT NULL,
    "platformName" TEXT NOT NULL,

    CONSTRAINT "platforms_pkey" PRIMARY KEY ("platformId")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_userEmail_key" ON "users"("userEmail");

-- AddForeignKey
ALTER TABLE "movies" ADD CONSTRAINT "movies_platformId_fkey" FOREIGN KEY ("platformId") REFERENCES "platforms"("platformId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "movies"("movieId") ON DELETE RESTRICT ON UPDATE CASCADE;
