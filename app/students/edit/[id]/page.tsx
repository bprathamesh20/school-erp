'use client'

import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import axios from 'axios'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type StudentFormData = {
  registerNo: number
  udiseNo: string
  penNo: string
  studentId: string
  adharNumber: string
  studentFullName: string
  surname: string
  fathersName: string
  mothersName: string
  nationality: string
  motherTongue: string
  religion: string
  caste: string
  subCaste?: string
  placeOfBirth: string
  taluka: string
  district: string
  state: string
  nation: string
  dateOfBirth: string
  lastSchoolAttended: string
  dateOfAdmission: string
  standard: number
  progress: string
  conduct?: string
  dateOfLeaving?: string
  standardStudying?: number
  reasonForLeaving?: string
  remarks?: string
  board: string
  medium: string
}
type Props = {
    params: {
      id: string
    }
  }

export default function EditStudentPage({ params }: Props) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<StudentFormData>()

  const [loading, setLoading] = useState(true)
  const id = params.id
  // Fetch student details when the component mounts
  useEffect(() => {
    if (params.id) {
      axios.get(`/api/students/${id}`)
        .then(response => {
            console.log(response.data)
          reset(response.data) // Prepopulate form with student data
          setLoading(false)
        })
        .catch(error => {
          console.error('Error fetching student details:', error)
          setLoading(false)
        })
    }
  }, [id, reset])

  const onSubmit: SubmitHandler<StudentFormData> = async (data) => {
    try {
      const response = await axios.put(`/api/students/${id}`, data, {
        headers: {
          'Content-Type': 'application/json', // Adjust content type as needed
        }
      })
      console.log('Student updated:', response.data)
    } catch (error) {
      console.error('Error updating student:', error)
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Student</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="registerNo">Register No</Label>
            <Input id="registerNo" type="number" {...register('registerNo', { required: true })} />
            {errors.registerNo && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <Label htmlFor="udiseNo">UDISE No</Label>
            <Input id="udiseNo" {...register('udiseNo', { required: true })} />
            {errors.udiseNo && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <Label htmlFor="penNo">PEN No</Label>
            <Input id="penNo" {...register('penNo', { required: true })} />
            {errors.penNo && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <Label htmlFor="studentId">Student ID</Label>
            <Input id="studentId" {...register('studentId', { required: true })} />
            {errors.studentId && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <Label htmlFor="adharNumber">Adhar Number</Label>
            <Input id="adharNumber" {...register('adharNumber', { required: true })} />
            {errors.adharNumber && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <Label htmlFor="studentFullName">Full Name</Label>
            <Input id="studentFullName" {...register('studentFullName', { required: true })} />
            {errors.studentFullName && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <Label htmlFor="surname">Surname</Label>
            <Input id="surname" {...register('surname', { required: true })} />
            {errors.surname && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <Label htmlFor="fathersName">Father&apos;s Name</Label>
            <Input id="fathersName" {...register('fathersName', { required: true })} />
            {errors.fathersName && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <Label htmlFor="mothersName">Mother&apos;s Name</Label>
            <Input id="mothersName" {...register('mothersName', { required: true })} />
            {errors.mothersName && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <Label htmlFor="nationality">Nationality</Label>
            <Input id="nationality" {...register('nationality', { required: true })} />
            {errors.nationality && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <Label htmlFor="motherTongue">Mother Tongue</Label>
            <Input id="motherTongue" {...register('motherTongue', { required: true })} />
            {errors.motherTongue && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <Label htmlFor="religion">Religion</Label>
            <Input id="religion" {...register('religion', { required: true })} />
            {errors.religion && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <Label htmlFor="caste">Caste</Label>
            <Input id="caste" {...register('caste', { required: true })} />
            {errors.caste && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <Label htmlFor="subCaste">Sub Caste</Label>
            <Input id="subCaste" {...register('subCaste')} />
          </div>
          <div>
            <Label htmlFor="placeOfBirth">Place of Birth</Label>
            <Input id="placeOfBirth" {...register('placeOfBirth', { required: true })} />
            {errors.placeOfBirth && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <Label htmlFor="taluka">Taluka</Label>
            <Input id="taluka" {...register('taluka', { required: true })} />
            {errors.taluka && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <Label htmlFor="district">District</Label>
            <Input id="district" {...register('district', { required: true })} />
            {errors.district && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <Label htmlFor="state">State</Label>
            <Input id="state" {...register('state', { required: true })} />
            {errors.state && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <Label htmlFor="nation">Nation</Label>
            <Input id="nation" {...register('nation', { required: true })} />
            {errors.nation && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <Label htmlFor="dateOfBirth">Date of Birth</Label>
            <Input id="dateOfBirth" type="date" {...register('dateOfBirth', { required: true })} />
            {errors.dateOfBirth && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <Label htmlFor="lastSchoolAttended">Last School Attended</Label>
            <Input id="lastSchoolAttended" {...register('lastSchoolAttended', { required: true })} />
            {errors.lastSchoolAttended && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <Label htmlFor="dateOfAdmission">Date of Admission</Label>
            <Input id="dateOfAdmission" type="date" {...register('dateOfAdmission', { required: true })} />
            {errors.dateOfAdmission && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <Label htmlFor="standard">Standard</Label>
            <Input id="standard" type="number" {...register('standard', { required: true })} />
            {errors.standard && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <Label htmlFor="progress">Progress</Label>
            <Input id="progress" {...register('progress', { required: true })} />
            {errors.progress && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <Label htmlFor="board">Board</Label>
            <Input id="board" {...register('board', { required: true })} />
            {errors.board && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <Label htmlFor="medium">Medium</Label>
            <Input id="medium" {...register('medium', { required: true })} />
            {errors.medium && <span className="text-red-500">This field is required</span>}
          </div>
        </div>
        <Button type="submit" className="mt-4">Update Student</Button>
      </form>
    </div>
  )
}
