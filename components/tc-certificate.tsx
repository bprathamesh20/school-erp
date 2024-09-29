'use client'

import { Student } from "@prisma/client";
import { Button } from "./ui/button";
import { useRef } from 'react';
import generatePDF, {Resolution, Margin} from 'react-to-pdf';
import { SchoolInfoType } from "@/lib/school-info";


const SchoolLeavingCertificate = ({ student, schoolInfo }: { student: Student, schoolInfo: SchoolInfoType }) => {
    const targetRef = useRef<HTMLDivElement>(null);
    
    return (
        <div className="flex flex-col items-center justify-center">
        <Button className="my-3 " onClick={() => generatePDF(targetRef, {filename: 'page.pdf'})}>🖨️ Download Certificate</Button>
     
      <div className="max-w-4xl mx-auto p-8 border-2 border-black font-serif" ref={targetRef}>
        <div className="text-center mb-6">
          <h1 className="text-lg font-bold">{schoolInfo.name}</h1>
          <h2 className="text-xl font-bold  py-1 ">{schoolInfo.address}</h2>
          <p>{schoolInfo.district}</p>
          <h2 className="text-xl font-bold py-1 mt-2">APPENDIX-2</h2>
        </div>
        
        <div className="flex justify-between text-sm mb-2">
          <p>Mobile No : {schoolInfo.mobileNo}</p>
          <p>E-Mail : {schoolInfo.email}</p>
        </div>
        
        <div className="flex justify-between text-sm mb-2">
          <p>Register No. : {student.registerNo}</p>
          <p>Discharge No. : {schoolInfo.dischargeNo}</p>
        </div>
        
        <div className="flex justify-between text-sm mb-2">
          <p>School Recognition No. : {schoolInfo.recognitionNo}</p>
          <p>Medium: {student.medium}</p>
        </div>
        
        <div className="flex justify-between text-sm mb-4">
          <p>UDISE No. : {student.udiseNo}</p>
          <p>Board : {student.board}</p>
          <p>Index No.: {schoolInfo.indexNo}</p>
        </div>
        
        <div className="bg-green-100 py-2 text-center font-bold text-xl mb-4">
          SCHOOL LEAVING CERTIFICATE
        </div>
        
        <p className="text-sm mb-4">ORIGINAL ( Vide chapter III Section IV Rule 3A (1))</p>
        
        <table className="w-full border-collapse mb-4">
          <tbody>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">Student ID:</td>
              <td className="p-2 border border-gray-300">{student.studentId}</td>
              <td className="p-2 border border-gray-300 ">Adhar Number:</td>
              <td className="p-2 border border-gray-300 font-bold">{student.adharNumber}</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">Student Full Name:</td>
              <td className="p-2 border border-gray-300 font-bold">{student.studentFullName}</td>
              <td className="p-2 border border-gray-300">Fathers Name:</td>
              <td className="p-2 border border-gray-300 font-bold">{student.fathersName}</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300 ">Surname:</td>
              <td className="p-2 border border-gray-300 font-bold">{student.surname}</td>
              <td className="p-2 border border-gray-300 ">Mothers Name:</td>
              <td className="p-2 border border-gray-300 font-bold">{student.mothersName}</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">Nationality:</td>
              <td className="p-2 border border-gray-300">{student.nationality}</td>
              <td className="p-2 border border-gray-300">Mother Tongue:</td>
              <td className="p-2 border border-gray-300">{student.motherTongue}</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">Religion:</td>
              <td className="p-2 border border-gray-300">{student.religion}</td>
              <td className="p-2 border border-gray-300">Caste:</td>
              <td className="p-2 border border-gray-300">{student.caste}</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">Sub Caste:</td>
              <td className="p-2 border border-gray-300">{student.subCaste || 'N/A'}</td>
              <td className="p-2 border border-gray-300">Place of Birth:</td>
              <td className="p-2 border border-gray-300">{student.placeOfBirth}</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">Taluka:</td>
              <td className="p-2 border border-gray-300">{student.taluka}</td>
              <td className="p-2 border border-gray-300">District:</td>
              <td className="p-2 border border-gray-300">{student.district}</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">State:</td>
              <td className="p-2 border border-gray-300">{student.state}</td>
              <td className="p-2 border border-gray-300">Nation:</td>
              <td className="p-2 border border-gray-300">{student.nation}</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">Date of Birth:</td>
              <td className="p-2 border border-gray-300" colSpan={3} >
                {new Date(student.dateOfBirth).getDate().toString().padStart(2, '0')}/
                {(new Date(student.dateOfBirth).getMonth() + 1).toString().padStart(2, '0')}/
                {new Date(student.dateOfBirth).getFullYear()}
                </td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">Last School attended:</td>
              <td className="p-2 border border-gray-300" colSpan={3}>{student.lastSchoolAttended}</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">Date of admission:</td>
              <td className="p-2 border border-gray-300">
                {new Date(student.dateOfAdmission).getDate().toString().padStart(2, '0')}/
                {(new Date(student.dateOfAdmission).getMonth() + 1).toString().padStart(2, '0')}/
                {new Date(student.dateOfAdmission).getFullYear()}
               </td>
              <td className="p-2 border border-gray-300">Standard:</td>
              <td className="p-2 border border-gray-300">{student.standard}</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">Progress:</td>
              <td className="p-2 border border-gray-300">{student.progress}</td>
              <td className="p-2 border border-gray-300">Conduct:</td>
              <td className="p-2 border border-gray-300">{student.conduct}</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300 ">Date of leaving School:</td>
              <td className="p-2 border border-gray-300 font-bold" colSpan={3}>
                {new Date(student.dateOfLeaving).getDate().toString().padStart(2, '0')}/
                {(new Date(student.dateOfLeaving).getMonth() + 1).toString().padStart(2, '0')}/
                {new Date(student.dateOfLeaving).getFullYear()}
                </td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">Standard in which studying:</td>
              <td className="p-2 border border-gray-300" colSpan={3}>{student.standardStudying}</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">Reason of leaving School:</td>
              <td className="p-2 border border-gray-300" colSpan={3}>{student.reasonForLeaving}</td>
            </tr>
            <tr className="border border-gray-300">
              <td className="p-2 border border-gray-300">Remarks:</td>
              <td className="p-2 border border-gray-300 font-bold" colSpan={3}>{student.remarks}</td>
            </tr>
          </tbody>
        </table>
        
        <p className="mb-4">Certified that the above information is in accordance with the school general register</p>
        
        <div className="flex justify-between text-sm mb-6">
          <p className="font-bold">Place : {schoolInfo.place}</p>
          <p className="font-bold">Date: 
            {new Date(student.dateOfLeaving).getDate().toString().padStart(2, '0')}/
            {(new Date(student.dateOfLeaving).getMonth() + 1).toString().padStart(2, '0')}/
            {new Date(student.dateOfLeaving).getFullYear()}
          </p>
        </div>
        
        <div className="flex justify-between">
          <p className="font-bold">CLERK</p>
          <p className="text-center">
            <span className="font-bold">HEAD MASTER</span><br/>
            ({schoolInfo.headMasterName})
          </p>
        </div>
        
        <p className="text-xs mt-4">
          ( No change in any entry in this certificate shall be made except by authority issuing it and any
          infringement in this requirement is liable to involve the imposition of penality such as that of rustication.)
        </p>
      </div>
      </div>
    );
  };
  
  export default SchoolLeavingCertificate;