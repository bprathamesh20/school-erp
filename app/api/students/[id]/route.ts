import { NextRequest, NextResponse } from 'next/server';
import { prisma } from "@/lib/db"

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const id = params.id;
    console.log(id);

    try {
        const student = await prisma.student.findUnique({
            where: {
                id: id
            },
        });

       
        return NextResponse.json(student);
    } catch (error) {
        console.error('Error fetching student:', error);
        return NextResponse.json({ error: 'Failed to fetch student' }, { status: 500 });
    }
}