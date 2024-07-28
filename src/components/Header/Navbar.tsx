"use client";
import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Navbar = () => {
  return (
    <div>
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <WarehouseIcon className="w-6 h-6" />
          <span className="text-lg font-bold">Montery Warehouse</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/admin/perishable/food" className="hover:underline" prefetch={false}>
            Food
          </Link>
          <Link href="/admin/non-perishable/waste" className="hover:underline" prefetch={false}>
            Waste
          </Link>
          <Link href="/admin/non-perishable/construction" className="hover:underline" prefetch={false}>
            Construction
          </Link>
         
          <Link href="#" className="hover:underline" prefetch={false}>
            Inventory
          </Link>
        </nav>
        <Button variant="outline" className="md:hidden">
          <MenuIcon className="w-5 h-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </header>
    </div>
  );
};

const WarehouseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z" />
    <path d="M6 18h12" />
    <path d="M6 14h12" />
    <rect width="12" height="12" x="6" y="10" />
  </svg>
);

const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export default Navbar;
