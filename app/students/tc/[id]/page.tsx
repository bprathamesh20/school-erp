
import { getStudentbyId } from "@/app/actions/getStudentbyId";
import SchoolLeavingCertificate from "@/components/tc-certificate";
import { Student } from "@prisma/client";
import { schoolInfo } from "@/lib/school-info";
import AppBar from "@/components/app-bar";
import { notFound } from 'next/navigation'

type Props = {
    params: {
      id: string
    }
  }
  
export default async function TCCertificate({ params }: Props) {
    console.log(params.id)
    let student: Student | null = null

    try {
      student = await getStudentbyId(params.id)
      if (!student) {
        notFound()
      }
    } catch (error) {
      notFound()
    }
  

  return (
    <div>
        <AppBar/>
      <SchoolLeavingCertificate schoolInfo={schoolInfo} student={student} />
    </div>
  );
}