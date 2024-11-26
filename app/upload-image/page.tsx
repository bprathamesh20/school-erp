'use client'
import AppBar from "@/components/app-bar";
import UploadImage from "@/components/upload-image";
import { useSession } from "next-auth/react";



export default function StudentList() {
    const session = useSession();
  return (
    <div>
        
      <AppBar/>
      <UploadImage/>

    </div>
  );
}