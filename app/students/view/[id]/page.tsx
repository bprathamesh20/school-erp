'use client'

import React, { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { Skeleton } from "@/components/ui/skeleton"
import { getStudentbyId } from '@/app/actions/getStudentbyId'
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
        const fetchedStudent = await getStudentbyId(params.id)
        if (!fetchedStudent) {
          notFound()
        }
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
                {/* Render student details here */}
                <TableRow>
                  <TableCell className="font-medium">Register No</TableCell>
                  <TableCell>{student.registerNo}</TableCell>
                </TableRow>
                {/* Add more rows for other student details */}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
