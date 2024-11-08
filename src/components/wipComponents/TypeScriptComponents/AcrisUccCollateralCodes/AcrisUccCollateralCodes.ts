// Next Steps:
// Expand: You can add more utility functions depending on how you need to interact with the dataset (e.g., filtering by description).
// Integration: Use this interface and dataset to query the other datasets as needed, ensuring that any code referencing ucc_collateral_code adheres to the structure defined in this file.

// Interface for a single UCC Collateral Code object
export interface UccCollateralCode {
    record_type: string; // 'U' for Collateral codes record
    ucc_collateral_code: string; // UCC Collateral code
    description: string; // UCC Collateral description
  }
  
  // Example utility function to find a UCC Collateral Code by code
  export const findUccCollateralCodeByCode = (
    code: string,
    uccCollateralCodes: UccCollateralCode[]
  ): UccCollateralCode | undefined => {
    return uccCollateralCodes.find((item) => item.ucc_collateral_code === code);
  };
  
  // Example dataset (this would normally be loaded from a file or API)
  export const UCC_COLLATERAL_CODES: UccCollateralCode[] = [
    {
      record_type: "U",
      ucc_collateral_code: "D",
      description: "TRANSMITTING UTILITIES DBTR",
    },
    {
      record_type: "U",
      ucc_collateral_code: "R",
      description: "CROPS/EXTRACTED/COLLATERAL/TIMBER TO BE CUT",
    },
    {
      record_type: "U",
      ucc_collateral_code: "C",
      description: "COOPERATIVE",
    },
    {
      record_type: "U",
      ucc_collateral_code: "F",
      description: "FIXTURE FILING",
    },
    {
      record_type: "U",
      ucc_collateral_code: "M",
      description: "MANUFACTURED HOUSING",
    },
    {
      record_type: "U",
      ucc_collateral_code: "O",
      description: "OTHER",
    },
    {
      record_type: "U",
      ucc_collateral_code: "A",
      description: "COOPERATIVE WITH ADDENDUM",
    },
    {
      record_type: "U",
      ucc_collateral_code: "P",
      description: "PUBLIC FINANCE",
    },
    // Add more objects as necessary
  ];
  
  // Explanation and Best Practices:
  // Interface (UccCollateralCode):
  
  // The interface defines the structure of each object in the UCC Collateral Codes dataset. It includes:
  // record_type: Identifies the record as a collateral code (U).
  // ucc_collateral_code: The code representing a specific collateral type.
  // description: A description of the collateral type.
  // Constant Dataset (UCC_COLLATERAL_CODES):
  
  // The dataset can be defined as a constant array, assuming it doesn't change dynamically. This can either be loaded from a file or defined statically in the same file.
  // Utility Function (findUccCollateralCodeByCode):
  
  // This function provides a convenient way to search for a specific collateral code by its ucc_collateral_code field. This will be useful when querying or referencing other datasets using this collateral code.
  // Usage in Your Project:
  // The UccCollateralCode interface ensures type safety when handling objects from the UCC Collateral Codes dataset in your application.
  // The UCC_COLLATERAL_CODES array can be imported wherever necessary for querying or referencing.
  // The findUccCollateralCodeByCode utility can be used to find collateral codes programmatically based on the ucc_collateral_code.
  