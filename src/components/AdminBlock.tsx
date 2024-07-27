import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

export default function Component() {
  const departments = [
    {
      id: 1,
      title: "Food",
      href: "/admin/perishable/food",
      description: "The food department ensures the quality and safety of food products.",
    },
    {
      id: 2,
      title: "Waste",
      href: "/admin/non-perishable/waste",
      description: "The waste department manages waste collection and disposal services.",
    },
    {
      id: 3,
      title: "Construction",
      href: "/admin/non-perishable/construction",
      description: "The construction department oversees building projects.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen py-10 px-4 sm:px-6">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">Department Management</h1>
      <div className="flex flex-col items-center gap-6 w-full">
        <main className="flex justify-center items-center w-full lg:ml-96">
          <div className="grid gap-6 w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {departments.map((department) => (
              <Card key={department.id} className="overflow-hidden w-full max-w-sm mx-auto bg-white shadow-lg rounded-lg">
                <CardHeader className="bg-blue-100 px-6 py-4 border-b border-gray-200 rounded-t-lg">
                  <CardTitle className="text-lg font-semibold text-blue-800">{department.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 text-gray-800">
                  <p className="text-sm">{department.description}</p>
                </CardContent>
                <CardFooter className=" bg-blue-100 flex justify-center items-center">
                  <Link
                    href={department.href}
                    className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 mt-4 text-sm font-medium text-white shadow transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600"
                    prefetch={false}
                  >
                    View Department
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
