'use client'

import React, { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronDown, ChevronUp, ChevronsUpDown } from 'lucide-react'

// Mock data for demonstration
const mockStudents = Array(50).fill(null).map((_, index) => ({
  id: `student-${index + 1}`,
  registerNo: 1000 + index,
  studentFullName: `Student ${index + 1}`,
  fathersName: `Father ${index + 1}`,
  dateOfBirth: new Date(1990 + Math.floor(index / 12), index % 12, 1).toISOString().split('T')[0],
  standard: Math.floor(Math.random() * 12) + 1,
  medium: ['English', 'Hindi', 'Marathi'][Math.floor(Math.random() * 3)],
}))

type Student = typeof mockStudents[0]

type SortConfig = {
  key: keyof Student
  direction: 'asc' | 'desc'
}

export function StudentTable() {
  const [students, setStudents] = useState(mockStudents)
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: 'registerNo', direction: 'asc' })
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const studentsPerPage = 10

  const sortedStudents = React.useMemo(() => {
    let sortableStudents = [...students]
    if (searchTerm) {
      sortableStudents = sortableStudents.filter(student => 
        student.studentFullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.fathersName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    sortableStudents.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1
      }
      return 0
    })
    return sortableStudents
  }, [students, sortConfig, searchTerm])

  const currentStudents = sortedStudents.slice(
    (currentPage - 1) * studentsPerPage,
    currentPage * studentsPerPage
  )

  const totalPages = Math.ceil(sortedStudents.length / studentsPerPage)

  const requestSort = (key: keyof Student) => {
    let direction: 'asc' | 'desc' = 'asc'
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  const getSortIcon = (key: keyof Student) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'asc' ? <ChevronUp className="inline" /> : <ChevronDown className="inline" />
    }
    return <ChevronsUpDown className="inline" />
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Student Table</h1>
      <Input
        type="text"
        placeholder="Search by student or father's name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead onClick={() => requestSort('registerNo')} className="cursor-pointer">
              Register No {getSortIcon('registerNo')}
            </TableHead>
            <TableHead onClick={() => requestSort('studentFullName')} className="cursor-pointer">
              Full Name {getSortIcon('studentFullName')}
            </TableHead>
            <TableHead onClick={() => requestSort('fathersName')} className="cursor-pointer">
              Father's Name {getSortIcon('fathersName')}
            </TableHead>
            <TableHead onClick={() => requestSort('dateOfBirth')} className="cursor-pointer">
              Date of Birth {getSortIcon('dateOfBirth')}
            </TableHead>
            <TableHead onClick={() => requestSort('standard')} className="cursor-pointer">
              Standard {getSortIcon('standard')}
            </TableHead>
            <TableHead onClick={() => requestSort('medium')} className="cursor-pointer">
              Medium {getSortIcon('medium')}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentStudents.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.registerNo}</TableCell>
              <TableCell>{student.studentFullName}</TableCell>
              <TableCell>{student.fathersName}</TableCell>
              <TableCell>{student.dateOfBirth}</TableCell>
              <TableCell>{student.standard}</TableCell>
              <TableCell>{student.medium}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-between items-center mt-4">
        <Button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span>Page {currentPage} of {totalPages}</span>
        <Button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  )
}