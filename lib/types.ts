// types/student.ts
export type Student = {
    id: string
    registerNo: number
    udiseNo: string
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
    dateOfBirth: string // Assuming it's in YYYY-MM-DD format
    lastSchoolAttended: string
    dateOfAdmission: string
    standard: number
    progress: string
    conduct: string
    dateOfLeaving: string
    standardStudying: string
    reasonForLeaving: string
    remarks: string
    board: string
    medium: string
  }