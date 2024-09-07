'use client'

import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { Skeleton } from "@/components/ui/skeleton"
import { getStudentbyId } from '@/app/actions/getStudentbyId'
import { Student } from '@prisma/client'
import App from 'next/app'
import AppBar from '@/components/app-bar'

type Props = {
  params: {
    id: string
  }
}

export default async function AppStudentsIdPage({ params }: Props) {
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
        <AppBar />
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Student Details</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Register No</TableCell>
                <TableCell>{student.registerNo}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">UDISE No</TableCell>
                <TableCell>{student.udiseNo}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Student ID</TableCell>
                <TableCell>{student.studentId}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Adhar Number</TableCell>
                <TableCell>{student.adharNumber}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Full Name</TableCell>
                <TableCell>{student.studentFullName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Surname</TableCell>
                <TableCell>{student.surname}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Father's Name</TableCell>
                <TableCell>{student.fathersName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Mother's Name</TableCell>
                <TableCell>{student.mothersName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Nationality</TableCell>
                <TableCell>{student.nationality}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Mother Tongue</TableCell>
                <TableCell>{student.motherTongue}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Religion</TableCell>
                <TableCell>{student.religion}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Caste</TableCell>
                <TableCell>{student.caste}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Sub Caste</TableCell>
                <TableCell>{student.subCaste || 'N/A'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Place of Birth</TableCell>
                <TableCell>{student.placeOfBirth}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Taluka</TableCell>
                <TableCell>{student.taluka}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">District</TableCell>
                <TableCell>{student.district}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">State</TableCell>
                <TableCell>{student.state}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Nation</TableCell>
                <TableCell>{student.nation}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Date of Birth</TableCell>
                <TableCell>{new Date(student.dateOfBirth).toLocaleDateString()}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Last School Attended</TableCell>
                <TableCell>{student.lastSchoolAttended}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Date of Admission</TableCell>
                <TableCell>{new Date(student.dateOfAdmission).toLocaleDateString()}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Standard</TableCell>
                <TableCell>{student.standard}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Progress</TableCell>
                <TableCell>{student.progress}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Conduct</TableCell>
                <TableCell>{student.conduct}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Date of Leaving</TableCell>
                <TableCell>{new Date(student.dateOfLeaving).toLocaleDateString()}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Standard Studying</TableCell>
                <TableCell>{student.standardStudying}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Reason for Leaving</TableCell>
                <TableCell>{student.reasonForLeaving}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Remarks</TableCell>
                <TableCell>{student.remarks}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Board</TableCell>
                <TableCell>{student.board}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Medium</TableCell>
                <TableCell>{student.medium}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
    </div>
  )
}

export function Loading() {
  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <Skeleton className="h-8 w-[200px]" />
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {Array(10).fill(null).map((_, i) => (
              <div key={i} className="flex justify-between">
                <Skeleton className="h-4 w-[100px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            ))}
          </div>
        </CardContent>
        </Card>
        </div>
      
      )
    }
    