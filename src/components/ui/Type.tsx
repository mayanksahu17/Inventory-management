// types.ts
export type Resource = {
    name: string;
    quantity: number;
  };
  
  export type ResourceDetail = {
    name: string;
    category: 'Perishable' | 'Non-Perishable';
    expiryDate: string;
    quantity: number; // quantity in measuring capacity, e.g., liters, kilograms
  };
  
  export type Warehouse = {
    name: string;
    resources: Resource[];
    resourceDetails: Record<string, ResourceDetail>; // maps resource names to details
  };
  