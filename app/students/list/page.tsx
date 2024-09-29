'use client'

import AppBar from "@/components/app-bar";
import { StudentTable } from "@/components/student-table"
import { useSession } from "next-auth/react";



export default function StudentList() {
    const session = useSession();
  return (
    <div>
        
      <AppBar/>
      {session.data?.user && <StudentTable />}

    </div>
  );
}