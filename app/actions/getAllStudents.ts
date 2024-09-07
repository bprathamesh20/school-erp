import { prisma } from "@/lib/db"


export const getAllStudents = async () => {
    try {
    const response = await prisma.student.findMany()
    return response
    } catch (error) {
        console.log(error)
        return error
    }
}