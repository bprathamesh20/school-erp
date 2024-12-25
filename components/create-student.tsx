'use client'

import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import axios from 'axios'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from 'next/navigation'


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

export function CreateStudent() {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<StudentFormData>({
    defaultValues: {
      udiseNo: '27120512007',
      nationality: 'Indian',
      state: 'Maharastra',
      motherTongue: 'Marathi',
      nation: 'India',
      conduct: 'Good'

    }
  })

  const onSubmit: SubmitHandler<StudentFormData> = async (data) => {
    try {
      const response = await axios.post('/api/students/add', data, {
        headers: {
          'Content-Type': 'multipart/form-data', // Change this to the desired content type
      }
      })

      router.push('/students/list')
      console.log(response.data)
    } catch (error) {
     
      console.error('Error adding student:', error)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create New Student</h1>
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
            <Label htmlFor="penNo">APPAR ID</Label>
            <Input id="udiseNo" {...register('penNo', { required: true })} />
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
            <Select {...register('religion', { required: true })}>
              <SelectTrigger>
                <SelectValue placeholder="Select religion" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hindu">Hindu</SelectItem>
                <SelectItem value="muslim">Muslim</SelectItem>
                <SelectItem value="christian">Christian</SelectItem>
                <SelectItem value="sikh">Sikh</SelectItem>
                <SelectItem value="buddhist">Buddhist</SelectItem>
                <SelectItem value="jain">Jain</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
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
            <Select {...register('district', { required: true })}>
              <SelectTrigger>
                <SelectValue placeholder="Select district" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ahmednagar">Ahmednagar</SelectItem>
                <SelectItem value="akola">Akola</SelectItem>
                <SelectItem value="aurangabad">Aurangabad</SelectItem>
                <SelectItem value="beed">Beed</SelectItem>
                <SelectItem value="bhandara">Bhandara</SelectItem>
                <SelectItem value="bhivandi">Bhivandi</SelectItem>
                <SelectItem value="buldhana">Buldhana</SelectItem>
                <SelectItem value="chandrapur">Chandrapur</SelectItem>
                <SelectItem value="dhule">Dhule</SelectItem>
                <SelectItem value="dharashiv">Dharashiv</SelectItem>
                <SelectItem value="gadchiroli">Gadchiroli</SelectItem>
                <SelectItem value="jalna">Jalna</SelectItem>
                <SelectItem value="jalgaon">Jalgaon</SelectItem>
                <SelectItem value="kolhapur">Kolhapur</SelectItem>
                <SelectItem value="latur">Latur</SelectItem>
                <SelectItem value="mumbai">Mumbai</SelectItem>
                <SelectItem value="nagpur">Nagpur</SelectItem>
                <SelectItem value="nanded">Nanded</SelectItem>
                <SelectItem value="nasik">Nasik</SelectItem>
                <SelectItem value="navi mumbai">Navi Mumbai</SelectItem>
                <SelectItem value="palghar">Palghar</SelectItem>
                <SelectItem value="parbhani">Parbhani</SelectItem>
                <SelectItem value="pune">Pune</SelectItem>
                <SelectItem value="raigad">Raigad</SelectItem>
                <SelectItem value="ratnagiri">Ratnagiri</SelectItem>
                <SelectItem value="sangli">Sangli</SelectItem>
                <SelectItem value="satara">Satara</SelectItem>
                <SelectItem value="solapur">Solapur</SelectItem>
                <SelectItem value="thane">Thane</SelectItem>
                <SelectItem value="wardha">Wardha</SelectItem>
                <SelectItem value="washim">Washim</SelectItem>
                <SelectItem value="yavatmal">Yavatmal</SelectItem>
              </SelectContent>
            </Select>
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
            <Label htmlFor="progress">progress</Label>
            <Select {...register('progress', { required: true })}>
              <SelectTrigger>
                <SelectValue placeholder="Select progress" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="satisfactory">Satisfactory</SelectItem>
                <SelectItem value="unsatisfactory">Unsatisfactory</SelectItem>
              </SelectContent>
            </Select>
            {errors.religion && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <Label htmlFor="conduct">Conduct</Label>
            <Input id="conduct" {...register('conduct',)} />
            {errors.conduct && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <Label htmlFor="dateOfLeaving">Date of Leaving</Label>
            <Input id="dateOfLeaving" type="date" {...register('dateOfLeaving', )} />
            {errors.dateOfLeaving && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <Label htmlFor="standardStudying">Standard Studying</Label>
            <Input id="standardStudying" type="number" {...register('standardStudying',)} />
            {errors.standardStudying && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <Label htmlFor="reasonForLeaving">Reason for Leaving</Label>
            <Input id="reasonForLeaving" {...register('reasonForLeaving')} />
            {errors.reasonForLeaving && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <Label htmlFor="remarks">Remarks</Label>
            <Input id="remarks" {...register('remarks')} />
            {errors.remarks && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <Label htmlFor="board">Board</Label>
            <Input id="board" {...register('board', { required: true })} />
            {errors.board && <span className="text-red-500">This field is required</span>}
          </div>
          <div>
            <Label htmlFor="medium">Medium</Label>
            <Select onValueChange={(value) => register('medium', { value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select medium" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="hindi">Hindi</SelectItem>
                <SelectItem value="marathi">Marathi</SelectItem>
              </SelectContent>
            </Select>
            {errors.medium && <span className="text-red-500">This field is required</span>}
          </div>
        </div>
        <Button type="submit" className="w-full">Create Student</Button>
      </form>
    </div>
  )
}