'use client'

import React from 'react';
import { Student } from '@prisma/client';
import { schoolInfo } from '@/lib/school-info';
import { useRef } from 'react';
import { Button } from './ui/button';
import generatePDF, {Resolution, Margin} from 'react-to-pdf';


const BonafideCertificate = ({ student, schoolInfo }: { student: Student, schoolInfo: any } ) => {
    const targetRef = useRef<HTMLDivElement>(null);
    const options = {
        resolution: Resolution.HIGH,
        page:{
            margin: Margin.SMALL,
            size: 'A4',
        }
    }
    const today = new Date();
    const formattedDate = `${today.getDate().toString().padStart(2, '0')}/${
      (today.getMonth() + 1).toString().padStart(2, '0')
    }/${today.getFullYear()}`;
    console.log(formattedDate)

  return (
    <div className="flex flex-col items-center justify-center" suppressHydrationWarning>
     <Button className="my-3 " onClick={() => generatePDF(targetRef, {filename: 'page.pdf'})}>Download Certificate</Button>
    <div className="max-w-3xl mx-auto p-8 border-4 font-serif" ref={targetRef}>
      <div className="text-center mb-6">
        <h1 className="text-sm font-bold">{schoolInfo.name}</h1>
        <p className="text-2xl font-semibold mt-2">{schoolInfo.address}</p>
        <p className="text-sm">{schoolInfo.contact}</p>
      </div>
      
      <div className="text-center mb-8">
        <h2 className="text-xl font-bold underline">BONAFIDE CERTIFICATE</h2>
      </div>
      
      <div className="mb-4">
        <p className="text-right">Date: {new Date().toLocaleDateString()}</p>
        <p className="text-right">Certificate No: BON/{student.registerNo}</p>
      </div>
      
      <div className="mb-6 text-justify">
        <p>This is to certify that <span className="font-bold">{student.studentFullName} {student.surname}</span>, 
        son/daughter of <span className="font-bold">{student.fathersName}</span>, 
        with Register No. <span className="font-bold">{student.registerNo}</span>, 
        is a bonafide student of our school.</p>
      </div>
      
      <div className="mb-6">
        <p><span className="font-bold">Class:</span> {student.standardStudying}</p>
        <p><span className="font-bold">Date of Birth:</span> {new Date(student.dateOfBirth).toLocaleDateString()}</p>
        <p><span className="font-bold">UDISE No:</span> {student.udiseNo}</p>
      </div>
      
      <div className="mb-6 text-justify">
        <p>{student.studentFullName} has been a student of this school 
        from  {new Date(student.dateOfAdmission).getDate().toString().padStart(2, '0')}/
        {(new Date(student.dateOfAdmission).getMonth() + 1).toString().padStart(2, '0')}/
        {new Date(student.dateOfAdmission).getFullYear()} to date. 
        {student.conduct && ` The student's conduct during this period has been ${student.conduct}.`}</p>
      </div>
      
      <div className="mb-6">
        <p><span className="font-bold">Nationality:</span> {student.nationality}</p>
        <p><span className="font-bold">Religion:</span> {student.religion}</p>
        <p><span className="font-bold">Caste:</span> {student.caste}</p>
        {student.subCaste && <p><span className="font-bold">Sub Caste:</span> {student.subCaste}</p>}
      </div>
      
      <div className="mb-6 text-justify">
        <p>This certificate is issued upon the request of the student for general purposes.</p>
      </div>
      
      <div className="mt-12 flex justify-between items-end">
        <div>
          <p className="font-bold">Date:
          {new Date().toLocaleDateString()}
           </p>
          <p className="font-bold">Place: {student.district}</p>
        </div>
        <div className="text-center">
          <p className="font-bold">{schoolInfo.principalName}</p>
          <p>Principal</p>
        </div>
      </div>
      
    </div>
    </div>
  );
};

export default BonafideCertificate;