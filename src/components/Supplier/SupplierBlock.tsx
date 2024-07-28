/**
 * v0 by Vercel.
 * @see https://v0.dev/t/13wNEsj13Pg
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Pagination } from "@/components/ui/pagination"

export default function Component() {
  const [suppliers, setSuppliers] = useState([
    {
      id: "SUP001",
      name: "Acme Inc.",
      pickupLocation: "123 Main St, Anytown USA",
      dropoffLocation: "456 Oak Rd, Somewhere Else",
      quantity: 500,
      items: "Widget A, Widget B, Widget C",
    },
    {
      id: "SUP002",
      name: "Global Goods",
      pickupLocation: "789 Elm St, Big City",
      dropoffLocation: "321 Pine Ave, Small Town",
      quantity: 1000,
      items: "Gadget X, Gadget Y, Gadget Z",
    },
    {
      id: "SUP003",
      name: "Reliable Suppliers",
      pickupLocation: "159 Maple Blvd, Metropolis",
      dropoffLocation: "753 Birch Ln, Rural Village",
      quantity: 750,
      items: "Thingamajig 1, Thingamajig 2, Thingamajig 3",
    },
    {
      id: "SUP004",
      name: "Quality Parts",
      pickupLocation: "369 Oak St, Big City",
      dropoffLocation: "852 Elm Rd, Small Town",
      quantity: 300,
      items: "Doohickey A, Doohickey B, Doohickey C",
    },
    {
      id: "SUP005",
      name: "Speedy Deliveries",
      pickupLocation: "741 Maple Dr, Metropolis",
      dropoffLocation: "963 Pine Rd, Rural Village",
      quantity: 1500,
      items: "Whatchamacallit X, Whatchamacallit Y, Whatchamacallit Z",
    },
    {
        id: "SUP006",
        name: "Pradeep",
        pickupLocation: "123 HiLinkCity",
        dropoffLocation: "Airport Road",
        quantity: 250,
        items: "Widget X, Widget X, Widget X",
      },
  ])
  const [searchTerm, setSearchTerm] = useState("")
  const [sortColumn, setSortColumn] = useState("name")
  const [sortDirection, setSortDirection] = useState("asc")
  const [currentPage, setCurrentPage] = useState(1)
  const [suppliersPerPage] = useState(10)
  const filteredSuppliers = suppliers.filter((supplier) =>
    supplier.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )
  const sortedSuppliers = filteredSuppliers.sort((a:any, b:any) => {
    if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1
    if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1
    return 0
  })
  const indexOfLastSupplier = currentPage * suppliersPerPage
  const indexOfFirstSupplier = indexOfLastSupplier - suppliersPerPage
  const currentSuppliers = sortedSuppliers.slice(indexOfFirstSupplier, indexOfLastSupplier)
  const totalPages = Math.ceil(filteredSuppliers.length / suppliersPerPage)
  const handleSearch = (e:any) => {
    setSearchTerm(e.target.value)
    setCurrentPage(1)
  }
  const handleSort = (column:any) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
    setCurrentPage(1)
  }
  const handlePageChange = (page: any) => {
    setCurrentPage(page)
  }
  const handleAddSupplier = () => {}
  const handleEditSupplier = (supplier: any) => {}
  const handleDeleteSupplier = (supplier: any) => {}
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Suppliers</h1>
        <Button onClick={handleAddSupplier}>Add Supplier</Button>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b">
          <div className="flex items-center">
            <SearchIcon className="h-5 w-5 text-gray-400 mr-2" />
            <Input
              type="text"
              placeholder="Search suppliers..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full focus:outline-none"
            />
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="cursor-pointer" onClick={() => handleSort("id")}>
                ID{" "}
                {sortColumn === "id" && <span className="ml-2">{sortDirection === "asc" ? "\u2191" : "\u2193"}</span>}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("name")}>
                Name{" "}
                {sortColumn === "name" && <span className="ml-2">{sortDirection === "asc" ? "\u2191" : "\u2193"}</span>}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("pickupLocation")}>
                Pickup Location{" "}
                {sortColumn === "pickupLocation" && (
                  <span className="ml-2">{sortDirection === "asc" ? "\u2191" : "\u2193"}</span>
                )}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("dropoffLocation")}>
                Dropoff Location{" "}
                {sortColumn === "dropoffLocation" && (
                  <span className="ml-2">{sortDirection === "asc" ? "\u2191" : "\u2193"}</span>
                )}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("quantity")}>
                Quantity{" "}
                {sortColumn === "quantity" && (
                  <span className="ml-2">{sortDirection === "asc" ? "\u2191" : "\u2193"}</span>
                )}
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort("items")}>
                Items{" "}
                {sortColumn === "items" && (
                  <span className="ml-2">{sortDirection === "asc" ? "\u2191" : "\u2193"}</span>
                )}
              </TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentSuppliers.map((supplier) => (
              <TableRow key={supplier.id}>
                <TableCell>{supplier.id}</TableCell>
                <TableCell>{supplier.name}</TableCell>
                <TableCell>{supplier.pickupLocation}</TableCell>
                <TableCell>{supplier.dropoffLocation}</TableCell>
                <TableCell>{supplier.quantity}</TableCell>
                <TableCell>{supplier.items}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleEditSupplier(supplier)}>
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleDeleteSupplier(supplier)}>
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="px-6 py-4 border-t flex justify-end">
          {/* <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} /> */}
        </div>
      </div>
    </div>
  )
}

function SearchIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function XIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}