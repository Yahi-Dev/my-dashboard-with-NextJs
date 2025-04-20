import { WidgetsGrid } from "@/components";



export const metadata = {
 title: 'Admin Dashboard',
 description: 'Admin Dashboard',
};

export default function NamePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-xl text-gray-600 mt-2">Información General</p>
      </header>
      
      <WidgetsGrid />
    
    </div>
  );
}