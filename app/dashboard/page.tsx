import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';
import { Users, Upload } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <Link href="/students/list" className="transition-transform duration-200 hover:scale-105">
          <Card className="h-full hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center space-x-4 p-6">
              <Users size={48} className="text-blue-500" />
              <div>
                <CardTitle className="text-2xl font-semibold text-gray-800">Manage Students</CardTitle>
                <CardDescription className="text-gray-600 mt-2">
                  View and edit student records, track progress, and manage enrollments.
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        </Link>
        <Link href="/list-images" className="transition-transform duration-200 hover:scale-105">
          <Card className="h-full hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center space-x-4 p-6">
              <Upload size={48} className="text-green-500" />
              <div>
                <CardTitle className="text-2xl font-semibold text-gray-800">Upload Images</CardTitle>
                <CardDescription className="text-gray-600 mt-2">
                  Upload and manage images for students, events, or course materials.
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        </Link>
      </div>
    </div>
  );
}

