'use client'
import React, { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { Skeleton } from "@/components/ui/skeleton"
import { Student } from '@prisma/client'
import AppBar from '@/components/app-bar'

type Props = {
  params: {
    id: string
  }
}

export default function ViewStudentPage({ params }: Props) {
  const [student, setStudent] = useState<Student | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStudent() {
      try {
        const response = await fetch(`/api/students/${params.id}`)
        if (!response.ok) {
          notFound()
        }
        const fetchedStudent = await response.json()
        setStudent(fetchedStudent)
      } catch (error) {
        notFound()
      } finally {
        setLoading(false)
      }
    }
    fetchStudent()
  }, [params.id])

  if (loading) {
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

  if (!student) {
    return notFound()
  }

  // Helper function to format date
  const formatDate = (date: Date | string | null) => {
    if (!date) return 'N/A';
    return new Date(date).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

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
                {/* Personal Information */}
                <TableRow>
                  <TableCell className="font-medium">Student Full Name</TableCell>
                  <TableCell>{student.studentFullName}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Surname</TableCell>
                  <TableCell>{student.surname}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Student ID</TableCell>
                  <TableCell>{student.studentId}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Aadhar Number</TableCell>
                  <TableCell>{student.adharNumber}</TableCell>
                </TableRow>

                {/* Family Information */}
                <TableRow>
                  <TableCell className="font-medium">Father's Name</TableCell>
                  <TableCell>{student.fathersName}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Mother's Name</TableCell>
                  <TableCell>{student.mothersName}</TableCell>
                </TableRow>

                {/* Demographic Information */}
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
                {student.subCaste && (
                  <TableRow>
                    <TableCell className="font-medium">Sub Caste</TableCell>
                    <TableCell>{student.subCaste}</TableCell>
                  </TableRow>
                )}

                {/* Birth and Location Information */}
                <TableRow>
                  <TableCell className="font-medium">Date of Birth</TableCell>
                  <TableCell>{formatDate(student.dateOfBirth)}</TableCell>
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

                {/* School Information */}
                <TableRow>
                  <TableCell className="font-medium">Last School Attended</TableCell>
                  <TableCell>{student.lastSchoolAttended}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Date of Admission</TableCell>
                  <TableCell>{formatDate(student.dateOfAdmission)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Board</TableCell>
                  <TableCell>{student.board}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Medium of Instruction</TableCell>
                  <TableCell>{student.medium}</TableCell>
                </TableRow>

                {/* Current Academic Information */}
                <TableRow>
                  <TableCell className="font-medium">Standard</TableCell>
                  <TableCell>{student.standard}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Standard Studying</TableCell>
                  <TableCell>{student.standardStudying}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Progress</TableCell>
                  <TableCell>{student.progress}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Conduct</TableCell>
                  <TableCell>{student.conduct}</TableCell>
                </TableRow>

                {/* Additional Identifiers */}
                <TableRow>
                  <TableCell className="font-medium">Register No</TableCell>
                  <TableCell>{student.registerNo}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">UDISE No</TableCell>
                  <TableCell>{student.udiseNo}</TableCell>
                </TableRow>
                {student.penNo && (
                  <TableRow>
                    <TableCell className="font-medium">PEN No</TableCell>
                    <TableCell>{student.penNo}</TableCell>
                  </TableRow>
                )}

                {/* Leaving Information */}
                {student.dateOfLeaving && (
                  <TableRow>
                    <TableCell className="font-medium">Date of Leaving</TableCell>
                    <TableCell>{formatDate(student.dateOfLeaving)}</TableCell>
                  </TableRow>
                )}
                {student.reasonForLeaving && (
                  <TableRow>
                    <TableCell className="font-medium">Reason for Leaving</TableCell>
                    <TableCell>{student.reasonForLeaving}</TableCell>
                  </TableRow>
                )}

                {/* Remarks */}
                <TableRow>
                  <TableCell className="font-medium">Remarks</TableCell>
                  <TableCell>{student.remarks}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}