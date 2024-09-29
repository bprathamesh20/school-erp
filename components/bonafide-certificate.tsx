'use client'

import React, { useRef } from 'react';
import { Student } from "@prisma/client";
import { schoolInfo } from '@/lib/school-info';
import { Button } from './ui/button';
import generatePDF, { Resolution, Margin } from 'react-to-pdf';

const BonafideCertificate = ({ student }: { student: Student }) => {
    const targetRef = useRef<HTMLDivElement>(null);
   

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
    }

    return (
        <div className="flex flex-col items-center justify-center" suppressHydrationWarning>
            <Button className="my-3" onClick={() => generatePDF(targetRef, { filename: 'bonafide_certificate.pdf' })}>Download Certificate</Button>
            <div className="max-w-3xl mx-auto p-8 border-2 border-gray-300 font-serif" ref={targetRef}>
                <div className="text-center mb-4">
                    <h1 className="text-xl font-bold uppercase">{schoolInfo.address}</h1>
                    <p className="text-sm">{schoolInfo.district}</p>
                    <p className="text-sm">U-DISE No. {student.udiseNo}</p>
                </div>
                <p className="text-sm mb-4">S. Index No. {schoolInfo.indexNo}</p>

                <div className="text-center mb-6">
                    <h2 className="text-xl font-bold uppercase border-2 border-black inline-block px-4 py-1">BONAFIDE CERTIFICATE</h2>
                </div>

                <div className="mb-4">
                    <p>Ad. No. {student.registerNo}</p>
                    <p>Dated- {formatDate(new Date().toISOString())}</p>
                </div>

                <div className="mb-6 text-justify">
                    <p>This is to certify Shri/Kumari {student.studentFullName} {student.surname}</p>
                    <p>is/was Bonafide student of this</p>
                    <p>School learning in {student.standardStudying} class</p>
                    <p>from {formatDate(student.dateOfAdmission.toISOString())} to {student.dateOfLeaving ? formatDate(student.dateOfLeaving.toISOString()) : 'Present'}</p>
                    <p>As per admission register He/She belongs {student.caste} {student.subCaste || ''}</p>
                    <p>community and his/her date of Birth is {formatDate(student.dateOfBirth.toISOString())}</p>
                    <p>(in words) .........................................................................................</p>
                </div>

                <div className="mt-12">
                    <p>Dated- {formatDate(new Date().toISOString())}</p>
                </div>

                <div className="mt-8 text-right">
                    <p className="font-bold">Head Master</p>
                    <p>{schoolInfo.address}</p>
                </div>
            </div>
        </div>
    );
};

export default BonafideCertificate;