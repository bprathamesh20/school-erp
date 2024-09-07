-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL,
    "registerNo" INTEGER NOT NULL,
    "udiseNo" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "adharNumber" TEXT NOT NULL,
    "studentFullName" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "fathersName" TEXT NOT NULL,
    "mothersName" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "motherTongue" TEXT NOT NULL,
    "religion" TEXT NOT NULL,
    "caste" TEXT NOT NULL,
    "subCaste" TEXT,
    "placeOfBirth" TEXT NOT NULL,
    "taluka" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "nation" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "lastSchoolAttended" TEXT NOT NULL,
    "dateOfAdmission" TIMESTAMP(3) NOT NULL,
    "standard" INTEGER NOT NULL,
    "progress" TEXT NOT NULL,
    "conduct" TEXT NOT NULL,
    "dateOfLeaving" TIMESTAMP(3) NOT NULL,
    "standardStudying" INTEGER NOT NULL,
    "reasonForLeaving" TEXT NOT NULL,
    "remarks" TEXT NOT NULL,
    "board" TEXT NOT NULL,
    "medium" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
