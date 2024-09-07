import { prisma } from "@/lib/db"


export const getUserbyEmail = async (email: string) => {
    try {
    const response = prisma.user.findUnique({
        where: {
            email,
        },
    })
    return response
    } catch (error) {
        console.log(error)
        return error
    }
}   