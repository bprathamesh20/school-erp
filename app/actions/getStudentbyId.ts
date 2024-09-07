// app/actions/getStudentbyId.ts
import { prisma } from '@/lib/db'
import { Student } from '@prisma/client'

export const getStudentbyId = async (id: string): Promise<Student | null> => {
  try {
    return await prisma.student.findUnique({
      where: { id }
    }) 
  } catch (error) {
    console.error("Error fetching student by ID:", error)
    return null
  }
}