import AppBar from "@/components/app-bar";
import { StudentTable } from "@/components/student-table"
import { Button } from "@/components/ui/button";

export default function StudentList() {
  return (
    <div>
      <AppBar/>
      <StudentTable />
    </div>
  );
}