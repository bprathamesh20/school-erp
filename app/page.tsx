import AppBar from "@/components/app-bar";
import SchoolLandingPage from "@/components/school-landing-page";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-between w-full h-16 px-4 py-2 bg-white shadow-sm">
      <div className="flex items-center font-bold">
        <a href="/students/list" className="text-lg md:text-2xl">
          Krushak High School, Chamorshi
          </a>
        </div>
    </div>
      <SchoolLandingPage />
    </div>
  );
}
