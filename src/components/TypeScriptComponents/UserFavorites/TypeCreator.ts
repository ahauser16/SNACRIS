// TypeCreator.ts
  
  // Example Favorites item for the "My Documents" category
  export interface MyDocumentItem {
    document_id: string;
    dataset: string; // e.g., "Real Property Master"
    doc__type_description: string; // e.g., "AGREEMENT"
  }
  
  // Example Favorites item for the "My Properties" category
  export interface MyPropertyItem {
    document_id: string;
    borough: number;
    block: number;
    lot: number;
    property_type: string; // Property type code from the Property Type Codes dataset
    street_number: string;
    street_name: string;
    unit_address: string;
  }
  
  // Structure for the entire favorites object in local storage
  export interface UserFavorites {
    categories: Array<{
      category_name: string;
      category_type: "default" | "custom";
      project_id?: string; // Only present for custom categories
      items: Array<MyDocumentItem | MyPropertyItem>; // Allow different item types
    }>;
  }
  
  // Explanation of the Changes:
  // RealPropertyMaster:
  
  // Represents the schema for the ACRIS_REAL_PROPERTY_MASTER dataset, reflecting each field accurately.
  // RealPropertyLegals:
  
  // Represents the schema for the ACRIS_REAL_PROPERTY_LEGALS dataset, which is used in the "My Properties" category.
  // DocumentControlCode:
  
  // Represents the structure of the Document Control Codes dataset, specifically the doc__type_description field, which will be used in the "My Documents" category.
  // MyDocumentItem and MyPropertyItem:
  
  // These interfaces represent the individual items within the "My Documents" and "My Properties" categories, respectively, ensuring that items follow the correct structure based on the datasets.
  // UserFavorites:
  
  // This represents the overall structure of the favorites data in Chrome's local storage. It includes both default and custom categories, and the items array supports both MyDocumentItem and MyPropertyItem types.
  // Benefits of this Approach:
  // Type Safety: By creating TypeScript types, you ensure that any data saved to local storage adheres to the structure and data types specified in your dataset schemas.
  // Extensibility: This structure is easy to extend to the other datasets as you work on them. You can create new types for each dataset and integrate them similarly.
  // Consistency: The data structure closely reflects the actual datasets (e.g., using doc__type_description instead of a generic type field), making it more consistent with the source of truth.
  