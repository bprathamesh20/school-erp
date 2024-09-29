import { prisma } from "@/lib/db"
import { parse } from 'date-format-parse';

export async function PUT(req: Request) {
    const data = await req.formData();
    console.log(data);
    console.log(parse(data.get('dateOfBirth') as string, 'YYYY-MM-DDTHH:MM:SSZ'))


    try {
        const student = await prisma.student.update({
            where: {
                id: data.get('id') as string
            },
            data: {
                registerNo: Number(data.get('registerNo')),
                udiseNo: data.get('udiseNo') as string,
                penNo: data.get('penNo') as string,
                studentId: data.get('studentId') as string,
                adharNumber: data.get('adharNumber') as string,
                studentFullName: data.get('studentFullName') as string,
                surname: data.get('surname') as string,
                fathersName: data.get('fathersName') as string,
                mothersName: data.get('mothersName') as string,
                nationality: data.get('nationality') as string,
                motherTongue: data.get('motherTongue') as string,
                religion: data.get('religion') as string,
                caste: data.get('caste') as string,
                subCaste: data.get('subCaste') as string,
                placeOfBirth: data.get('placeOfBirth') as string,
                taluka: data.get('taluka') as string,
                district: data.get('district') as string,
                state: data.get('state') as string,
                nation: data.get('nation') as string,
                
                // Parse date fields
                dateOfBirth: new Date(data.get('dateOfBirth') as string),
                dateOfAdmission: new Date(data.get('dateOfAdmission') as string),
                dateOfLeaving: new Date(data.get('dateOfLeaving') as string),
                
                lastSchoolAttended: data.get('lastSchoolAttended') as string,
                standard: Number(data.get('standard')),
                progress: data.get('progress') as string,
                conduct: data.get('conduct') as string,
                standardStudying: Number(data.get('standardStudying')),
                reasonForLeaving: data.get('reasonForLeaving') as string,
                remarks: data.get('remarks') as string,
                board: data.get('board') as string,
                medium: data.get('medium') as string,
            },
        });

        return Response.json(student);
    } catch (error) {
        console.error('Error creating student:', error);
        return Response.json({ error: 'Failed to create student' }, { status: 500 });
    }
}