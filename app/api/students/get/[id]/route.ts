import { prisma } from "@/lib/db"

export async function GET(req: Request) {
    const url = new URL(req.url);
    const id = url.searchParams.get('id') || "";
    console.log(id)
    try {
        const student = await prisma.student.findUnique({
            where: {
                id: id
            },
        });

        return Response.json(student);
    } catch (error) {
        console.error('Error fetching student:', error);
        return Response.json({ error: 'Failed to fetch student' }, { status: 500 });
    }
}