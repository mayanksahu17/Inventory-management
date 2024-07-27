"use client"
import Image from "next/image"
import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

interface Resource {
  id: number
  name: string
  image: string
  quantity: number
  type: "perishable" | "non-perishable"
  wasteCategory: "wet" | "dry"
}

export default function WasteBlock() {
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [sortBy, setSortBy] = useState<"name" | "quantity">("name")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")

  // Waste management data
  const resources: Resource[] = [
    {
      "id": 1,
      "name": "Plastic Bottles",
      "image": "/assets/images/plastic bottle.jpeg",
      "quantity": 500,
      "type": "non-perishable",
      "wasteCategory": "dry"
    },
    {
      "id": 2,
      "name": "Food Waste",
      "image": "/assets/images/food waste.jpeg",
      "quantity": 300,
      "type": "perishable",
      "wasteCategory": "wet"
    },
    {
      "id": 3,
      "name": "Cardboard",
      "image": "/assets/images/cardboard.jpeg",
      "quantity": 200,
      "type": "non-perishable",
      "wasteCategory": "dry"
    },
    {
      "id": 4,
      "name": "Metal Cans",
      "image": "/assets/images/metal cans.jpeg",
      "quantity": 150,
      "type": "non-perishable",
      "wasteCategory": "dry"
    },
    {
      "id": 5,
      "name": "Glass Bottles",
      "image": "/assets/images/glass bottle.jpeg",
      "quantity": 250,
      "type": "non-perishable",
      "wasteCategory": "dry"
    },
    {
      "id": 6,
      "name": "Garden Waste",
      "image": "/assets/images/garden waste.jpeg",
      "quantity": 400,
      "type": "perishable",
      "wasteCategory": "wet"
    },
    {
      "id": 7,
      "name": "Textile Waste",
      "image": "/assets/images/textile.jpeg",
      "quantity": 100,
      "type": "non-perishable",
      "wasteCategory": "dry"
    },
    {
      "id": 8,
      "name": "Electronics",
      "image": "/assets/images/e-waste.jpeg",
      "quantity": 50,
      "type": "non-perishable",
      "wasteCategory": "dry"
    },
    {
      "id": 9,
      "name": "Rubber",
      "image": "/assets/images/rubber waste.jpeg",
      "quantity": 80,
      "type": "non-perishable",
      "wasteCategory": "dry"
    },
    {
      "id": 10,
      "name": "Construction Debris",
      "image": "/assets/images/debries.jpeg",
      "quantity": 500,
      "type": "non-perishable",
      "wasteCategory": "dry"
    },
    {
      "id": 11,
      "name": "Paper Waste",
      "image": "/assets/images/paper waste.jpeg",
      "quantity": 300,
      "type": "non-perishable",
      "wasteCategory": "dry"
    },
    {
      "id": 12,
      "name": "Medical Waste",
      "image": "/assets/images/medical waste.jpeg",
      "quantity": 70,
      "type": "perishable",
      "wasteCategory": "wet"
    }
  ]
  
  const filteredResources = useMemo(() => {
    return resources
      .filter((resource) => resource.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return sortOrder === "asc" ? -1 : 1
        if (a[sortBy] > b[sortBy]) return sortOrder === "asc" ? 1 : -1
        return 0
      })
  }, [resources, searchTerm, sortBy, sortOrder])

  return (
    <div className="bg-background min-h-screen">
      <header className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Waste Management</h1>
          <div className="relative flex-1 max-w-md ml-4 md:ml-6">
            <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 w-full rounded-lg bg-primary-foreground text-primary"
            />
          </div>
        </div>
      </header>
      <main className="max-w-6xl mx-auto py-8 px-4 md:px-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <ListOrderedIcon className="h-4 w-4" />
                  Sort by: {sortBy === "name" ? "Name" : "Quantity"}
                  {sortOrder === "asc" ? " (A-Z)" : " (Z-A)"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuRadioGroup value={sortBy} onValueChange={(value) => setSortBy(value as "name" | "quantity")}>
                  <DropdownMenuRadioItem value="name">Name</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="quantity">Quantity</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={sortOrder} onValueChange={(value) => setSortOrder(value as "asc" | "desc")}>
                  <DropdownMenuRadioItem value="asc">Ascending</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="desc">Descending</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div>
            <Button variant="outline" className="flex items-center gap-2">
              <DownloadIcon className="h-4 w-4" />
              Export
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredResources.map((resource) => (
            <Card key={resource.id} className="relative group">
              <Image src={resource.image} alt={resource.name} width={300} height={400} className="w-full h-48 object-cover rounded-t-lg"/>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">{resource.name}</h3>
                <p className="text-muted-foreground">Quantity: {resource.quantity} Kg</p>
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-white bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 ">
                  <h3 className="text-lg font-semibold">{resource.name}</h3>
                  <p className="text-muted-foreground text-gray-700">Quantity: {resource.quantity} Kg</p>
                  <p className="text-muted-foreground text-gray-700">Type: {resource.type}</p>
                  <p className="text-muted-foreground text-gray-700">Waste Category: {resource.wasteCategory}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

function DownloadIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}

function ListOrderedIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  )
}
