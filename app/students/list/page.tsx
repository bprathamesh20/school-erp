import AppBar from "@/components/app-bar";
import { StudentTable } from "@/components/student-table"

export default function StudentList() {
  return (
    <div>
      <AppBar/>
      <StudentTable />
    </div>
  );
}