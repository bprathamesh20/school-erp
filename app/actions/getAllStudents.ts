"use server"

import { prisma } from "@/lib/db"
import { Student } from "@prisma/client"

// Ensure to use the correct model name
export const getAllStudents = async (): Promise<Student[]> => {
    try {
        const students = await prisma.student.findMany() // Adjust the model name as needed
        return students
    } catch (error) {
        console.error(error)
        return []
    }
}