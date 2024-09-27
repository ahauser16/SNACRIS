// Next Steps:
// Integrate: Use this interface and dataset to query other datasets in your application that reference property type codes.
// Utility Functions: Consider creating additional utility functions depending on how you interact with the dataset (e.g., filtering by description).
// Unit Tests: Write tests to ensure your utility functions behave as expected.

// Interface for a single Property Type Code object
export interface PropertyTypeCode {
    record_type: string; // 'G' for Property type record
    property_type: string; // Property type code
    description: string; // Property type description
  }
  
  // Example utility function to find a Property Type Code by code
  export const findPropertyTypeCodeByCode = (
    code: string,
    propertyTypeCodes: PropertyTypeCode[]
  ): PropertyTypeCode | undefined => {
    return propertyTypeCodes.find((item) => item.property_type === code);
  };
  
  // Example dataset (this would normally be loaded from a file or API)
  export const PROPERTY_TYPE_CODES: PropertyTypeCode[] = [
    {
      record_type: "G",
      property_type: "CA",
      description: "ADJACENT CONDOMINIUM UNIT TO BE COMBINED",
    },
    {
      record_type: "G",
      property_type: "FS",
      description: "4 FAMILY WITH STORE / OFFICE",
    },
    {
      record_type: "G",
      property_type: "F5",
      description: "5-6 FAMILY WITH STORE / OFFICE",
    },
    {
      record_type: "G",
      property_type: "F1",
      description: "1-3 FAMILY WITH STORE / OFFICE",
    },
    {
      record_type: "G",
      property_type: "F4",
      description: "4-6 FAMILY WITH STORE / OFFICE",
    },
    {
      record_type: "G",
      property_type: "D1",
      description: "DWELLING ONLY - 1 FAMILY",
    },
    {
      record_type: "G",
      property_type: "D2",
      description: "DWELLING ONLY - 2 FAMILY",
    },
    {
      record_type: "G",
      property_type: "D3",
      description: "DWELLING ONLY - 3 FAMILY",
    },
    {
      record_type: "G",
      property_type: "D4",
      description: "DWELLING ONLY - 4 FAMILY",
    },
    {
      record_type: "G",
      property_type: "D5",
      description: "DWELLING ONLY - 5 FAMILY",
    },
    {
      record_type: "G",
      property_type: "D6",
      description: "DWELLING ONLY - 6 FAMILY",
    },
    {
      record_type: "G",
      property_type: "SC",
      description: "SINGLE RESIDENTIAL CONDO UNIT",
    },
    {
      record_type: "G",
      property_type: "MC",
      description: "MULTIPLE RESIDENTIAL CONDO UNT",
    },
    {
      record_type: "G",
      property_type: "SP",
      description: "SINGLE RESIDENTIAL COOP UNIT",
    },
    {
      record_type: "G",
      property_type: "MP",
      description: "MULTIPLE RESIDENTIAL COOP UNIT",
    },
    {
      record_type: "G",
      property_type: "CC",
      description: "COMMERCIAL CONDO UNIT(S)",
    },
    {
      record_type: "G",
      property_type: "AP",
      description: "APARTMENT BUILDING",
    },
    {
      record_type: "G",
      property_type: "OF",
      description: "OFFICE BUILDING",
    },
    {
      record_type: "G",
      property_type: "IB",
      description: "INDUSTRIAL BUILDING",
    },
    {
      record_type: "G",
      property_type: "RB",
      description: "RETAIL BUILDING",
    },
    {
      record_type: "G",
      property_type: "VL",
      description: "VACANT LAND",
    },
    {
      record_type: "G",
      property_type: "MU",
      description: "MULTIPLE PROPERTIES",
    },
    {
      record_type: "G",
      property_type: "OT",
      description: "OTHER",
    },
    {
      record_type: "G",
      property_type: "PA",
      description: "PRE-ACRIS",
    },
    {
      record_type: "G",
      property_type: "MR",
      description: "MAIDS ROOM",
    },
    {
      record_type: "G",
      property_type: "SR",
      description: "STORAGE ROOM",
    },
    {
      record_type: "G",
      property_type: "PS",
      description: "PARKING SPACE",
    },
    {
      record_type: "G",
      property_type: "BS",
      description: "BULK SALE OF CONDOMINIUMS",
    },
    {
      record_type: "G",
      property_type: "RS",
      description: "RELIGIOUS STRUCTURE",
    },
    {
      record_type: "G",
      property_type: "CK",
      description: "CONDO UNIT WITHOUT KITCHEN",
    },
    {
      record_type: "G",
      property_type: "RE",
      description: "REAL ESTATE INVESTMENT TRUST",
    },
    {
      record_type: "G",
      property_type: "R1",
      description: "REAL EST INV TR 1,2,3 FAMILY",
    },
    {
      record_type: "G",
      property_type: "R2",
      description: "REAL EST INV TR 4-6 FAMILY AND COMM.",
    },
    {
      record_type: "G",
      property_type: "RP",
      description: "1-2 FAM WITH ATTCH GAR &/OR VACANT LAND",
    },
    {
      record_type: "G",
      property_type: "GR",
      description: "GARAGE, 1 OR 2 FAMILY ONLY",
    },
    {
      record_type: "G",
      property_type: "NA",
      description: "NOT APPLICABLE",
    },
    {
      record_type: "G",
      property_type: "EA",
      description: "ENTERTAINMENT/AMUSEMENT",
    },
    {
      record_type: "G",
      property_type: "UT",
      description: "UTILITY",
    },
    {
      record_type: "G",
      property_type: "VR",
      description: "RESIDENTIAL VACANT LAND",
    },
    {
      record_type: "G",
      property_type: "VN",
      description: "NON-RESIDENTIAL VACANT LAND",
    },
    {
      record_type: "G",
      property_type: "CP",
      description: "COMMERCIAL COOP UNIT(S)",
    },
    {
      record_type: "G",
      property_type: "CR",
      description: "COMMERCIAL REAL ESTATE",
    },
    {
      record_type: "G",
      property_type: "TS",
      description: "TIMESHARE",
    },
    {
      record_type: "G",
      property_type: "RG",
      description: "1-2 FAMILY DWELLING WITH ATTACHED GARAGE",
    },
    {
      record_type: "G",
      property_type: "RV",
      description: "1-2 FAMILY DWELLING WITH VACANT LAND",
    },
    {
      record_type: "G",
      property_type: "SA",
      description: "ADJACENT COOPERATIVE UNIT TO BE COMBINED",
    },
    {
      record_type: "G",
      property_type: "SM",
      description: "UNDER $1M CONDO IN COMBINED SALE OF $1M+",
    },
    {
      record_type: "G",
      property_type: "HC",
      description: "HDFC EXEMPTION PROPERTY",
    },
    // Add more entries as necessary
  ];
  
  // Explanation and Best Practices:
  // Interface (PropertyTypeCode):
  
  // This defines the shape of each JSON object in the dataset. It includes:
  // record_type: A constant 'G' identifying the record as a property type record.
  // property_type: The property type code (e.g., "CA", "FS").
  // description: The description of the property type (e.g., "ADJACENT CONDOMINIUM UNIT TO BE COMBINED").
  // Constant Dataset (PROPERTY_TYPE_CODES):
  
  // This dataset is static, and can be stored as a constant array. In a real-world application, this might be loaded from a file or database, but since it's static, this is a good approach for now.
  // Utility Function (findPropertyTypeCodeByCode):
  
  // This function allows you to search for a specific property type by its property_type field. This is useful when you need to look up a property type description based on the property type code.
  // Usage in Your Project:
  // Type Checking: The PropertyTypeCode interface will enforce type safety when handling property type codes in your application.
  // Querying: The constant dataset and utility function can be used to easily find or query specific property types when needed (e.g., in your queries across the other datasets).
  // Extendable: This structure is extendable, and you can easily add more property types to the dataset as needed.
  