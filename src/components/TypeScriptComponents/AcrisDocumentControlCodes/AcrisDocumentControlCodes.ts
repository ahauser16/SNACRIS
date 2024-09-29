// Next Steps:
// Refactor Query Logic: Use this interface to query other datasets and ensure that the doc__type_description you use aligns with the values from this dataset.
// Utility Functions: Consider creating additional utility functions that can filter the dataset or map values from the Document Control Codes dataset to the other datasets.

// Interface for a single Document Control Code
export interface AcrisDocumentControlCode {
    record_type: string; // 'D' for Document control type record
    doc__type: string; // Document type code
    doc__type_description: string; // Document type description
    class_code_description: string; // Document class description
    party1_type: string; // Party type 1 name for this document type
    party2_type?: string; // Optional: Party type 2 name for this document type
    party3_type?: string; // Optional: Party type 3 name for this document type (e.g., for UCC3, etc.)
  }
  
  // Example usage of the interface for utility functions
  // Function to find a Document Control Code by doc__type
  export const findDocumentControlCodeByType = (
    docType: string,
    documentControlCodes: AcrisDocumentControlCode[]
  ): AcrisDocumentControlCode | undefined => {
    return documentControlCodes.find((doc) => doc.doc__type === docType);
  };
  
  // Example dataset (this would normally be loaded from a file or API)
  export const DOCUMENT_CONTROL_CODES: AcrisDocumentControlCode[] = [
    {
      record_type: "D",
      doc__type: "AGMT",
      doc__type_description: "AGREEMENT",
      class_code_description: "MORTGAGES & INSTRUMENTS",
      party1_type: "PARTY 1",
      party2_type: "PARTY 2",
    },
    {
      record_type: "D",
      doc__type: "AMFL",
      doc__type_description: "AMENDMENT OF FEDERAL LIEN",
      class_code_description: "UCC AND FEDERAL LIENS",
      party1_type: "DEBTOR",
      party2_type: "SECURED PARTY",
    },
    {
      record_type: "D",
      doc__type: "ASPM",
      doc__type_description: "ASSUMPTION OF MORTGAGE",
      class_code_description: "MORTGAGES & INSTRUMENTS",
      party1_type: "MORTGAGER/BORROWER",
      party2_type: "MORTGAGEE/LENDER",
    },
    {
      record_type: "D",
      doc__type: "ASST",
      doc__type_description: "ASSIGNMENT, MORTGAGE",
      class_code_description: "MORTGAGES & INSTRUMENTS",
      party1_type: "ASSIGNOR/OLD LENDER",
      party2_type: "ASSIGNEE/NEW LENDER",
    },
    {
      record_type: "D",
      doc__type: "ASTU",
      doc__type_description: "UNIT ASSIGNMENT",
      class_code_description: "DEEDS AND OTHER CONVEYANCES",
      party1_type: "GRANTOR/SELLER",
      party2_type: "GRANTEE/BUYER",
    },
    {
      record_type: "D",
      doc__type: "ASUM",
      doc__type_description: "UCC3 ASSUMPTION",
      class_code_description: "UCC AND FEDERAL LIENS",
      party1_type: "DEBTOR",
      party2_type: "SECURED PARTY",
    },
    {
      record_type: "D",
      doc__type: "BOND",
      doc__type_description: "BOND",
      class_code_description: "OTHER DOCUMENTS",
      party1_type: "DEBTOR",
      party2_type: "SECURED PARTY",
    },
    {
      record_type: "D",
      doc__type: "BRUP",
      doc__type_description: "UCC3 BANKRUPTCY",
      class_code_description: "UCC AND FEDERAL LIENS",
      party1_type: "DEBTOR",
      party2_type: "SECURED PARTY",
    },
    {
      record_type: "D",
      doc__type: "CERR",
      doc__type_description: "CERTIFICATE OF REDUCTION",
      class_code_description: "MORTGAGES & INSTRUMENTS",
      party1_type: "MORTGAGER/BORROWER",
      party2_type: "MORTGAGEE/LENDER",
    },
    {
      record_type: "D",
      doc__type: "CNFL",
      doc__type_description: "CONTINUATION OF FEDERAL LIEN",
      class_code_description: "UCC AND FEDERAL LIENS",
      party1_type: "DEBTOR",
      party2_type: "SECURED PARTY",
    },
    {
      record_type: "D",
      doc__type: "CERT",
      doc__type_description: "CERTIFICATE",
      class_code_description: "OTHER DOCUMENTS",
      party1_type: "PARTY 1",
      party2_type: "PARTY 2",
    },
    {
      record_type: "D",
      doc__type: "CNTR",
      doc__type_description: "CONTRACT OF SALE",
      class_code_description: "DEEDS AND OTHER CONVEYANCES",
      party1_type: "GRANTOR/SELLER",
      party2_type: "GRANTEE/BUYER",
    },
    {
      record_type: "D",
      doc__type: "CODP",
      doc__type_description: "CONDEMNATION PROCEEDINGS",
      class_code_description: "DEEDS AND OTHER CONVEYANCES",
      party1_type: "PARTY 1",
      party2_type: "PARTY 2",
    },
    {
      record_type: "D",
      doc__type: "CONS",
      doc__type_description: "CONSENT",
      class_code_description: "OTHER DOCUMENTS",
      party1_type: "PARTY 1",
    },
    {
      record_type: "D",
      doc__type: "CONT",
      doc__type_description: "UCC3 CONTINUATION",
      class_code_description: "UCC AND FEDERAL LIENS",
      party1_type: "DEBTOR",
      party2_type: "SECURED PARTY",
    },
    {
      record_type: "D",
      doc__type: "CTOR",
      doc__type_description: "COURT ORDER",
      class_code_description: "OTHER DOCUMENTS",
      party1_type: "PARTY 1/GRANTOR",
      party2_type: "PARTY 2/GRANTEE",
    },
    {
      record_type: "D",
      doc__type: "DCTO",
      doc__type_description: "COURT ORDER ADVERSE POSS.",
      class_code_description: "DEEDS AND OTHER CONVEYANCES",
      party1_type: "PARTY 1",
      party2_type: "PARTY 2",
    },
    {
      record_type: "D",
      doc__type: "DECL",
      doc__type_description: "DECLARATION",
      class_code_description: "OTHER DOCUMENTS",
      party1_type: "PARTY 1",
      party2_type: "PARTY 2",
    },
    {
      record_type: "D",
      doc__type: "DEED",
      doc__type_description: "DEED",
      class_code_description: "DEEDS AND OTHER CONVEYANCES",
      party1_type: "GRANTOR/SELLER",
      party2_type: "GRANTEE/BUYER",
    },
    {
      record_type: "D",
      doc__type: "DEMM",
      doc__type_description: "DECLARATION OF MODIFI OF MRT",
      class_code_description: "MORTGAGES & INSTRUMENTS",
      party1_type: "MORTGAGER/BORROWER",
      party2_type: "MORTGAGEE/LENDER",
    },
    {
      record_type: "D",
      doc__type: "DTL",
      doc__type_description: "DISCHARGE OF TAX LIEN",
      class_code_description: "OTHER DOCUMENTS",
      party1_type: "SECURED PARTY",
    },
    {
      record_type: "D",
      doc__type: "EASE",
      doc__type_description: "EASEMENT",
      class_code_description: "DEEDS AND OTHER CONVEYANCES",
      party1_type: "GRANTOR/SELLER",
      party2_type: "GRANTEE/BUYER",
    },
    {
      record_type: "D",
      doc__type: "FL",
      doc__type_description: "FEDERAL LIEN-IRS",
      class_code_description: "UCC AND FEDERAL LIENS",
      party1_type: "DEBTOR",
      party2_type: "SECURED PARTY",
    },
    {
      record_type: "D",
      doc__type: "FTL",
      doc__type_description: "FEDERAL LIEN, OTHER",
      class_code_description: "UCC AND FEDERAL LIENS",
      party1_type: "DEBTOR",
      party2_type: "SECURED PARTY",
    },
    {
      record_type: "D",
      doc__type: "IDED",
      doc__type_description: "IN REM DEED",
      class_code_description: "DEEDS AND OTHER CONVEYANCES",
      party1_type: "GRANTOR/SELLER",
      party2_type: "GRANTEE/BUYER",
    },
    {
      record_type: "D",
      doc__type: "INIC",
      doc__type_description: "INITIAL COOP UCC1",
      class_code_description: "UCC AND FEDERAL LIENS",
      party1_type: "DEBTOR",
      party2_type: "SECURED PARTY",
      party3_type: "ASSIGNEE",
    },
    {
      record_type: "D",
      doc__type: "INIT",
      doc__type_description: "INITIAL UCC1",
      class_code_description: "UCC AND FEDERAL LIENS",
      party1_type: "DEBTOR",
      party2_type: "SECURED PARTY",
      party3_type: "ASSIGNEE",
    },
    {
      record_type: "D",
      doc__type: "JUDG",
      doc__type_description: "JUDGMENT",
      class_code_description: "OTHER DOCUMENTS",
      party1_type: "PARTY 1",
      party2_type: "PARTY 2",
    },
    {
      record_type: "D",
      doc__type: "LDMK",
      doc__type_description: "LANDMARK DESIGNATION",
      class_code_description: "OTHER DOCUMENTS",
      party1_type: "PARTY 1",
      party2_type: "PARTY 2",
    },
    {
      record_type: "D",
      doc__type: "LEAS",
      doc__type_description: "LEASE",
      class_code_description: "DEEDS AND OTHER CONVEYANCES",
      party1_type: "LESSOR/LANDLORD",
      party2_type: "LESSEE/TENANT",
    },
    {
      record_type: "D",
      doc__type: "LIC",
      doc__type_description: "LICENSE",
      class_code_description: "OTHER DOCUMENTS",
      party1_type: "PARTY 1",
      party2_type: "PARTY 2",
    },
    {
      record_type: "D",
      doc__type: "LTPA",
      doc__type_description: "LETTERS  PATENT",
      class_code_description: "DEEDS AND OTHER CONVEYANCES",
      party1_type: "GRANTOR/SELLER",
      party2_type: "GRANTEE/BUYER",
    },
    {
      record_type: "D",
      doc__type: "MAPS",
      doc__type_description: "MAPS",
      class_code_description: "OTHER DOCUMENTS",
      party1_type: "PARTY 1",
    },
    {
      record_type: "D",
      doc__type: "MERG",
      doc__type_description: "MERGER",
      class_code_description: "OTHER DOCUMENTS",
      party1_type: "PARTY 1",
      party2_type: "PARTY 2",
    },
    {
      record_type: "D",
      doc__type: "MISC",
      doc__type_description: "MISCELLANEOUS",
      class_code_description: "OTHER DOCUMENTS",
      party1_type: "PARTY 1",
      party2_type: "PARTY 2",
    },
    {
      record_type: "D",
      doc__type: "MMTG",
      doc__type_description: "MASTER MORTGAGE",
      class_code_description: "MORTGAGES & INSTRUMENTS",
      party1_type: "MORTGAGEE/LENDER",
    },
    {
      record_type: "D",
      doc__type: "MTGE",
      doc__type_description: "MORTGAGE",
      class_code_description: "MORTGAGES & INSTRUMENTS",
      party1_type: "MORTGAGOR/BORROWER",
      party2_type: "MORTGAGEE/LENDER",
    },
    {
      record_type: "D",
      doc__type: "PAT",
      doc__type_description: "POWER OF ATTORNEY",
      class_code_description: "OTHER DOCUMENTS",
      party1_type: "PARTY ONE",
      party2_type: "PARTY TWO",
    },
    {
      record_type: "D",
      doc__type: "PRFL",
      doc__type_description: "PARTIAL RELEASE OF FED LIEN",
      class_code_description: "UCC AND FEDERAL LIENS",
      party1_type: "DEBTOR",
      party2_type: "SECURED PARTY",
    },
    {
      record_type: "D",
      doc__type: "PSAT",
      doc__type_description: "PARTIAL SATISFACTION",
      class_code_description: "MORTGAGES & INSTRUMENTS",
      party1_type: "MORTGAGER/BORROWER",
      party2_type: "MORTGAGEE/LENDER",
    },
    {
      record_type: "D",
      doc__type: "PSGN",
      doc__type_description: "UCC3 PARTIAL ASSIGNMENT",
      class_code_description: "UCC AND FEDERAL LIENS",
      party1_type: "DEBTOR",
      party2_type: "SECURED PARTY",
    },
    {
      record_type: "D",
      doc__type: "REL",
      doc__type_description: "RELEASE",
      class_code_description: "MORTGAGES & INSTRUMENTS",
      party1_type: "PARTY 1",
      party2_type: "PARTY 2",
    },
    {
      record_type: "D",
      doc__type: "RFL",
      doc__type_description: "RELEASE OF FEDERAL LIEN",
      class_code_description: "UCC AND FEDERAL LIENS",
      party1_type: "DEBTOR",
      party2_type: "SECURED PARTY",
    },
    {
      record_type: "D",
      doc__type: "RESO",
      doc__type_description: "RESOLUTION",
      class_code_description: "OTHER DOCUMENTS",
      party1_type: "PARTY 1",
      party2_type: "PARTY 2",
    },
    {
      record_type: "D",
      doc__type: "RFTL",
      doc__type_description: "RELEASE OF FEDERAL TAX LIEN",
      class_code_description: "UCC AND FEDERAL LIENS",
      party1_type: "DEBTOR",
      party2_type: "SECURED PARTY",
    },
    {
      record_type: "D",
      doc__type: "RLSE",
      doc__type_description: "UCC3 RELEASE/UCC AMENDMENT",
      class_code_description: "UCC AND FEDERAL LIENS",
      party1_type: "DEBTOR",
      party2_type: "SECURED PARTY",
    },
    {
      record_type: "D",
      doc__type: "RPAT",
      doc__type_description: "REVOCATION OF POWER OF ATTORNE",
      class_code_description: "OTHER DOCUMENTS",
      party1_type: "PARTY 1",
      party2_type: "PARTY 2",
    },
    {
      record_type: "D",
      doc__type: "RTXL",
      doc__type_description: "RELEASE OF ESTATE TAX LIEN",
      class_code_description: "OTHER DOCUMENTS",
      party1_type: "DECEDENT",
    },
    {
      record_type: "D",
      doc__type: "SAGE",
      doc__type_description: "SUNDRY AGREEMENT",
      class_code_description: "OTHER DOCUMENTS",
      party1_type: "PARTY 1",
      party2_type: "PARTY 2",
    },
    {
      record_type: "D",
      doc__type: "SAT",
      doc__type_description: "SATISFACTION OF MORTGAGE",
      class_code_description: "MORTGAGES & INSTRUMENTS",
      party1_type: "MORTGAGER/BORROWER",
      party2_type: "MORTGAGEE/LENDER",
    },
    {
      record_type: "D",
      doc__type: "SMIS",
      doc__type_description: "SUNDRY MISCELLANEOUS",
      class_code_description: "OTHER DOCUMENTS",
      party1_type: "PARTY 1",
    },
    {
      record_type: "D",
      doc__type: "SMTG",
      doc__type_description: "SUNDRY MORTGAGE",
      class_code_description: "MORTGAGES & INSTRUMENTS",
      party1_type: "MORTGAGER/BORROWER",
      party2_type: "MORTGAGEE/LENDER",
    },
    {
      record_type: "D",
      doc__type: "STP",
      doc__type_description: "STREET PROCEDURE",
      class_code_description: "OTHER DOCUMENTS",
      party1_type: "PARTY 1",
      party2_type: "PARTY 2",
    },
    {
      record_type: "D",
      doc__type: "SUBL",
      doc__type_description: "SUBORDINATION OF LEASE",
      class_code_description: "DEEDS AND OTHER CONVEYANCES",
      party1_type: "PARTY 1",
      party2_type: "PARTY 2",
    },
    {
      record_type: "D",
      doc__type: "SUBO",
      doc__type_description: "UCC3 SUBORDINATION",
      class_code_description: "UCC AND FEDERAL LIENS",
      party1_type: "DEBTOR",
      party2_type: "SECURED PARTY",
    },
    {
      record_type: "D",
      doc__type: "TLS",
      doc__type_description: "TAX LIEN SALE CERTIFICATE",
      class_code_description: "OTHER DOCUMENTS",
      party1_type: "PARTY 1",
      party2_type: "PARTY 2",
    },
    {
      record_type: "D",
      doc__type: "TERM",
      doc__type_description: "UCC3 TERMINATION",
      class_code_description: "UCC AND FEDERAL LIENS",
      party1_type: "DEBTOR",
      party2_type: "SECURED PARTY",
    },
    {
      record_type: "D",
      doc__type: "TERT",
      doc__type_description: "TERMINATION OF TRUST",
      class_code_description: "OTHER DOCUMENTS",
      party1_type: "PARTY 1",
      party2_type: "PARTY 2",
    },
    {
      record_type: "D",
      doc__type: "UCC1",
      doc__type_description: "UNIFORM COMMERCIAL CODE 1",
      class_code_description: "UCC AND FEDERAL LIENS",
      party1_type: "DEBTOR",
      party2_type: "SECURED PARTY",
      party3_type: "ASSIGNEE",
    },
    {
      record_type: "D",
      doc__type: "UCC3",
      doc__type_description: "UNIFORM COMMERCIAL CODE 3",
      class_code_description: "UCC AND FEDERAL LIENS",
      party1_type: "DEBTOR",
      party2_type: "SECURED PARTY",
    },
    {
      record_type: "D",
      doc__type: "VAC",
      doc__type_description: "VACATE ORDER",
      class_code_description: "DEEDS AND OTHER CONVEYANCES",
      party1_type: "PARTY 1",
    },
    {
      record_type: "D",
      doc__type: "WILL",
      doc__type_description: "CERTIFIED COPY OF WILL",
      class_code_description: "OTHER DOCUMENTS",
      party1_type: "PARTY 1",
      party2_type: "PARTY 2",
    },
    {
      record_type: "D",
      doc__type: "ASGN",
      doc__type_description: "UCC3 ASSIGNMENT",
      class_code_description: "UCC AND FEDERAL LIENS",
      party1_type: "DEBTOR",
      party2_type: "SECURED PARTY",
      party3_type: "NEW SECURED PARTY",
    },
    {
      record_type: "D",
      doc__type: "ASSTO",
      doc__type_description: "ASSIGNMENT OF LEASE",
      class_code_description: "OTHER DOCUMENTS",
      party1_type: "PARTY 1",
      party2_type: "PARTY 2",
    },
    {
      record_type: "D",
      doc__type: "WSAT",
      doc__type_description: "WITHHELD SATISFACTION",
      class_code_description: "MORTGAGES & INSTRUMENTS",
      party1_type: "MORTGAGER/BORROWER",
      party2_type: "MORTGAGEE/LENDER",
    },
    {
      record_type: "D",
      doc__type: "RETT",
      doc__type_description: "NYS REAL ESTATE TRANSFER TAX",
      class_code_description: "OTHER DOCUMENTS",
      party1_type: "GRANTOR/SELLER",
      party2_type: "GRANTEE/BUYER",
    },
    {
      record_type: "D",
      doc__type: "RPTT",
      doc__type_description: "NYC REAL PROPERTY TRANSFER TAX",
      class_code_description: "OTHER DOCUMENTS",
      party1_type: "GRANTOR/SELLER",
      party2_type: "GRANTEE/BUYER",
    },
    {
      record_type: "D",
      doc__type: "CDEC",
      doc__type_description: "CONDO DECLARATION",
      class_code_description: "DEEDS AND OTHER CONVEYANCES",
      party1_type: "PARTY 1",
    },
    {
      record_type: "D",
      doc__type: "AL&R",
      doc__type_description: "ASSIGNMENT OF LEASES AND RENTS",
      class_code_description: "MORTGAGES & INSTRUMENTS",
      party1_type: "ASSIGNOR",
      party2_type: "ASSIGNEE",
    },
    {
      record_type: "D",
      doc__type: "DEEDO",
      doc__type_description: "DEED, OTHER",
      class_code_description: "DEEDS AND OTHER CONVEYANCES",
      party1_type: "GRANTOR",
      party2_type: "GRANTEE",
    },
    {
      record_type: "D",
      doc__type: "AMTX",
      doc__type_description: "ADDITIONAL MORTGAGE TAX",
      class_code_description: "MORTGAGES & INSTRUMENTS",
      party1_type: "PAYER",
      party2_type: "PARTY TWO",
    },
    {
      record_type: "D",
      doc__type: "AMND",
      doc__type_description: "UCC3 AMENDMENT",
      class_code_description: "UCC AND FEDERAL LIENS",
      party1_type: "DEBTOR",
      party2_type: "SECURED PARTY",
    },
    {
      record_type: "D",
      doc__type: "AMTL",
      doc__type_description: "AMENDMENT OF TAX LIEN",
      class_code_description: "OTHER DOCUMENTS",
      party1_type: "PARTY 1",
      party2_type: "PARTY 2",
    },
    {
      record_type: "D",
      doc__type: "ATL",
      doc__type_description: "ASSIGNMENT OF TAX LIEN",
      class_code_description: "OTHER DOCUMENTS",
      party1_type: "PARTY 1",
      party2_type: "PARTY 2",
    },
    {
      record_type: "D",
      doc__type: "RPTT&RET",
      doc__type_description: "BOTH RPTT AND RETT",
      class_code_description: "OTHER DOCUMENTS",
      party1_type: "GRANTOR/SELLER",
      party2_type: "GRANTEE/BUYER",
    },
    {
      record_type: "D",
      doc__type: "CORR",
      doc__type_description: "CORRECTION DOC-OFFICE USE ONLY",
      class_code_description: "OTHER DOCUMENTS",
      party1_type: "PARTY 1",
      party2_type: "PARTY 2",
      party3_type: "PARTY 3",
    },
    {
      record_type: "D",
      doc__type: "CORP",
      doc__type_description: "UCC 5 CORRECTION STATEMENT",
      class_code_description: "UCC AND FEDERAL LIENS",
      party1_type: "PARTY 1",
      party2_type: "PARTY 2",
      party3_type: "PARTY 3",
    },
    {
      record_type: "D",
      doc__type: "ZONE",
      doc__type_description: "ZONING LOT DESCRIPTION",
      class_code_description: "OTHER DOCUMENTS",
      party1_type: "PARTY ONE",
    },
    {
      record_type: "D",
      doc__type: "AALR",
      doc__type_description: "ASGN OF ASGN OF L&R",
      class_code_description: "MORTGAGES & INSTRUMENTS",
      party1_type: "ASSIGNOR",
      party2_type: "ASSIGNEE",
    },
    {
      record_type: "D",
      doc__type: "CALR",
      doc__type_description: "CANCEL/TERM ASGN L&R",
      class_code_description: "OTHER DOCUMENTS",
      party1_type: "PARTY ONE",
      party2_type: "PARTY TWO",
    },
    {
      record_type: "D",
      doc__type: "ADEC",
      doc__type_description: "AMENDED CONDO DECLARATION",
      class_code_description: "OTHER DOCUMENTS",
      party1_type: "PARTY ONE",
    },
    {
      record_type: "D",
      doc__type: "LOCC",
      doc__type_description: "LIEN OF COMMON CHARGES",
      class_code_description: "OTHER DOCUMENTS",
      party1_type: "PARTY ONE/DEBTOR",
      party2_type: "PARTY TWO/SECURED PA",
    },
    {
      record_type: "D",
      doc__type: "TOLCC",
      doc__type_description: "TERM OF LIEN OF COMMON CHARGES",
      class_code_description: "OTHER DOCUMENTS",
      party1_type: "PARTY ONE",
      party2_type: "PARTY TWO",
    },
    {
      record_type: "D",
      doc__type: "DEVR",
      doc__type_description: "DEVELOPMENT RIGHTS",
      class_code_description: "DEEDS AND OTHER CONVEYANCES",
      party1_type: "PARTY ONE",
      party2_type: "PARTY TWO",
    },
    {
      record_type: "D",
      doc__type: "DECM",
      doc__type_description: "DECLARATION OF MERGER",
      class_code_description: "DEEDS AND OTHER CONVEYANCES",
      party1_type: "PARTY ONE",
      party2_type: "PARTY TWO",
    },
    {
      record_type: "D",
      doc__type: "MLEA",
      doc__type_description: "MEMORANDUM OF LEASE",
      class_code_description: "DEEDS AND OTHER CONVEYANCES",
      party1_type: "LESSOR",
      party2_type: "LESSEE",
    },
    {
      record_type: "D",
      doc__type: "MCON",
      doc__type_description: "MEMORANDUM OF CONTRACT",
      class_code_description: "DEEDS AND OTHER CONVEYANCES",
      party1_type: "PARTY ONE",
      party2_type: "PARTY TWO",
    },
    {
      record_type: "D",
      doc__type: "M&CON",
      doc__type_description: "MORTGAGE AND CONSOLIDATION",
      class_code_description: "MORTGAGES & INSTRUMENTS",
      party1_type: "MORTGAGOR",
      party2_type: "MORTGAGEE",
    },
    {
      record_type: "D",
      doc__type: "SPRD",
      doc__type_description: "MORTGAGE SPREADER AGREEMENT",
      class_code_description: "MORTGAGES & INSTRUMENTS",
      party1_type: "PARTY ONE/MORTGAGOR",
      party2_type: "PARTY TWO/MORTGAGEE",
    },
    {
      record_type: "D",
      doc__type: "TL&R",
      doc__type_description: "TERMINATION OF ASSIGN OF L&R",
      class_code_description: "OTHER DOCUMENTS",
      party1_type: "PARTY ONE",
      party2_type: "PARTY TWO",
    },
    {
      record_type: "D",
      doc__type: "SUBM",
      doc__type_description: "SUBORDINATION OF MORTGAGE",
      class_code_description: "MORTGAGES & INSTRUMENTS",
      party1_type: "PARTY ONE",
      party2_type: "PARTY TWO",
    },
    {
      record_type: "D",
      doc__type: "PREL",
      doc__type_description: "PARTIAL RELEASE OF MORTGAGE",
      class_code_description: "MORTGAGES & INSTRUMENTS",
      party1_type: "PARTY ONE",
      party2_type: "PARTY TWO",
    },
    {
      record_type: "D",
      doc__type: "ACON",
      doc__type_description: "ASSIGN/TERM OF CONTRACT/BID",
      class_code_description: "DEEDS AND OTHER CONVEYANCES",
      party1_type: "PARTY ONE",
      party2_type: "PARTY TWO",
    },
    {
      record_type: "D",
      doc__type: "CORRD",
      doc__type_description: "CORRECTION DEED",
      class_code_description: "DEEDS AND OTHER CONVEYANCES",
      party1_type: "GRANTOR/SELLER",
      party2_type: "GRANTEE/BUYER",
    },
    {
      record_type: "D",
      doc__type: "CORRM",
      doc__type_description: "CORRECTION MORTGAGE",
      class_code_description: "MORTGAGES & INSTRUMENTS",
      party1_type: "MORTGAGOR/BORROWER",
      party2_type: "MORTGAGEE/LENDER",
    },
    {
      record_type: "D",
      doc__type: "CONDEED",
      doc__type_description: "CONFIRMATORY DEED",
      class_code_description: "DEEDS AND OTHER CONVEYANCES",
      party1_type: "GRANTOR/SELLER",
      party2_type: "GRANTEE/BUYER",
    },
    {
      record_type: "D",
      doc__type: "REIT",
      doc__type_description: "REAL ESTATE INV TRUST DEED",
      class_code_description: "DEEDS AND OTHER CONVEYANCES",
      party1_type: "GRANTOR/SELLER",
      party2_type: "GRANTEE/BUYER",
    },
    {
      record_type: "D",
      doc__type: "TERL",
      doc__type_description: "TERMINATION OF LEASE OR MEMO",
      class_code_description: "OTHER DOCUMENTS",
      party1_type: "LESSOR",
      party2_type: "LESSEE",
    },
    {
      record_type: "D",
      doc__type: "ESTL",
      doc__type_description: "ESTOPPEL FOR OFFICE USE ONLY",
      class_code_description: "OTHER DOCUMENTS",
      party1_type: "MORTGAGOR",
      party2_type: "NYC",
    },
    {
      record_type: "D",
      doc__type: "XXXX",
      doc__type_description: "APPRT BREAKDWN OFFICE USE ONLY",
      class_code_description: "MORTGAGES & INSTRUMENTS",
      party1_type: "MORTGAGOR",
      party2_type: "MORTGAGEE",
    },
    {
      record_type: "D",
      doc__type: "CMTG",
      doc__type_description: "COLLATERAL MORTGAGE",
      class_code_description: "MORTGAGES & INSTRUMENTS",
      party1_type: "MORTGAGOR",
      party2_type: "MORTGAGEE",
    },
    {
      record_type: "D",
      doc__type: "WFL",
      doc__type_description: "WITHDRAWAL OF A FED LIEN",
      class_code_description: "UCC AND FEDERAL LIENS",
      party1_type: "PARTY ONE",
      party2_type: "PARTY TWO",
    },
    {
      record_type: "D",
      doc__type: "ESRM",
      doc__type_description: "ESTOPPAL REMOVAL OFFICE USE ON",
      class_code_description: "OTHER DOCUMENTS",
      party1_type: "PARTY ONE",
      party2_type: "PARTY TWO",
    },
    {
      record_type: "D",
      doc__type: "NTXL",
      doc__type_description: "NOTICE OF  ESTATE TAX LIEN",
      class_code_description: "UCC AND FEDERAL LIENS",
      party1_type: "PARTY ONE",
      party2_type: "IRS",
    },
    {
      record_type: "D",
      doc__type: "NAPP",
      doc__type_description: "NOTICE OF APPROPRIATION",
      class_code_description: "DEEDS AND OTHER CONVEYANCES",
      party1_type: "PARTY ONE",
      party2_type: "PARTY TWO",
    },
    {
      record_type: "D",
      doc__type: "TERA",
      doc__type_description: "TERMINATION OF AGREEMENT",
      class_code_description: "OTHER DOCUMENTS",
      party1_type: "PARTY 1",
      party2_type: "PARTY 2",
    },
    {
      record_type: "D",
      doc__type: "RCRFL",
      doc__type_description: "REVOCATION OF CERTIF. OF RFL",
      class_code_description: "UCC AND FEDERAL LIENS",
      party1_type: "DEBTOR",
      party2_type: "SECURED PARTY",
    },
    {
      record_type: "D",
      doc__type: "DEED COR",
      doc__type_description: "CORRECT  INDEX/DEED-OFFICE USE",
      class_code_description: "DEEDS AND OTHER CONVEYANCES",
      party1_type: "GRANTOR",
      party2_type: "GRANTEE",
    },
    {
      record_type: "D",
      doc__type: "DEED, LE",
      doc__type_description: "LIFE ESTATE DEED",
      class_code_description: "DEEDS AND OTHER CONVEYANCES",
      party1_type: "GRANTOR/SELLER",
      party2_type: "GRANTEE/BUYER",
      party3_type: "LIFE ESTATE RETAINED",
    },
    {
      record_type: "D",
      doc__type: "CORR, LE",
      doc__type_description: "CORRECT LIFE ESTATE OFFICE USE",
      class_code_description: "DEEDS AND OTHER CONVEYANCES",
      party1_type: "GRANTOR/SELLER",
      party2_type: "GRANTEE/BUYER",
      party3_type: "LIFE ESTATE RETAINED",
    },
    {
      record_type: "D",
      doc__type: "DEED, TS",
      doc__type_description: "TIMESHARE DEED",
      class_code_description: "DEEDS AND OTHER CONVEYANCES",
      party1_type: "GRANTOR/SELLER",
      party2_type: "GRANTEE/BUYER",
    },
    {
      record_type: "D",
      doc__type: "UCC ADEN",
      doc__type_description: "UCC COOPERATIVE ADDENDUM",
      class_code_description: "UCC AND FEDERAL LIENS",
      party1_type: "DEBTOR",
      party2_type: "SECURED PARTY",
    },
    {
      record_type: "D",
      doc__type: "TERDECL",
      doc__type_description: "TERM. OF CONDO DECLARATION",
      class_code_description: "OTHER DOCUMENTS",
      party1_type: "PARTY 1",
      party2_type: "PARTY 2",
    },
    {
      record_type: "D",
      doc__type: "NAFTL",
      doc__type_description: "CERT NONATTCHMENT FED TAX LIEN",
      class_code_description: "UCC AND FEDERAL LIENS",
      party1_type: "PARTY ONE",
      party2_type: "PARTY TWO",
    },
    {
      record_type: "D",
      doc__type: "APPRT",
      doc__type_description: "APP. ORDER BREAKDWN OFFICE USE",
      class_code_description: "MORTGAGES & INSTRUMENTS",
      party1_type: "MORTGAGER/BORROWER",
      party2_type: "MORTGAGEE/LENDER",
    },
    {
      record_type: "D",
      doc__type: "AIRRIGHT",
      doc__type_description: "AIR RIGHTS",
      class_code_description: "DEEDS AND OTHER CONVEYANCES",
      party1_type: "GRANTOR/SELLER",
      party2_type: "GRANTEE/BUYER",
    },
    {
      record_type: "D",
      doc__type: "SI CORR",
      doc__type_description: "SI BILLING UPDATE OFFICE USE",
      class_code_description: "DEEDS AND OTHER CONVEYANCES",
      party1_type: "GRANTOR",
      party2_type: "GRANTEE",
    },
    {
      record_type: "D",
      doc__type: "PWFL",
      doc__type_description: "PARTIAL WITHDRAWL OF FED LIEN",
      class_code_description: "UCC AND FEDERAL LIENS",
      party1_type: "PARTY ONE",
      party2_type: "PARTY TWO",
    },
    {
      record_type: "D",
      doc__type: "PRCFL",
      doc__type_description: "PARTIAL REVOCATION OF CERT RFL",
      class_code_description: "UCC AND FEDERAL LIENS",
      party1_type: "DEBTOR",
      party2_type: "SECURED PARTY",
    },
    {
      record_type: "D",
      doc__type: "DPFTL",
      doc__type_description: "DISCHARGE OF PROPERTY FROM FTL",
      class_code_description: "UCC AND FEDERAL LIENS",
      party1_type: "DEBTOR",
      party2_type: "SECURED PARTY",
    },
    {
      record_type: "D",
      doc__type: "DEEDP",
      doc__type_description: "DEED, PRE RPT TAX",
      class_code_description: "DEEDS AND OTHER CONVEYANCES",
      party1_type: "GRANTOR/SELLER",
      party2_type: "GRANTEE/BUYER",
    },
    {
      record_type: "D",
      doc__type: "TORREN",
      doc__type_description: "TORREN",
      class_code_description: "DEEDS AND OTHER CONVEYANCES",
      party1_type: "PARTY  1",
      party2_type: "PARTY  2",
    },
    {
      record_type: "D",
      doc__type: "DEED, RC",
      doc__type_description: "DEED WITH RESTRICTIVE COVENANT",
      class_code_description: "DEEDS AND OTHER CONVEYANCES",
      party1_type: "GRANTOR/SELLER",
      party2_type: "GRANTEE/BUYER",
    },
    {
      record_type: "D",
      doc__type: "SCDEC",
      doc__type_description: "DECLARATION OF CONDO IN CONDO",
      class_code_description: "DEEDS AND OTHER CONVEYANCES",
      party1_type: "PARTY 1",
    },
    {
      record_type: "D",
      doc__type: "TODD",
      doc__type_description: "TRANSFER ON DEATH DEED",
      class_code_description: "DEEDS AND OTHER CONVEYANCES",
      party1_type: "TRANSFEROR",
      party2_type: "DESGNTD BENEFICIARY",
    },
    {
      record_type: "D",
      doc__type: "RTOD",
      doc__type_description: "REVOCATION OF TOD DEED",
      class_code_description: "DEEDS AND OTHER CONVEYANCES",
      party1_type: "TRANSFEROR",
      party2_type: "DESGNTD BENEFICIARY",
    },
  ];
  
  // Explanation and Best Practices:
  // Interface (AcrisDocumentControlCode):
  
  // This defines the shape of each document control code object, specifying that record_type, doc__type, doc__type_description, class_code_description, and party1_type are required fields. Since some entries have optional fields (party2_type and party3_type), they are marked as optional with the ? symbol.
  // Constant Dataset (DOCUMENT_CONTROL_CODES):
  
  // The dataset can be defined as a constant array if it's static and won't change. This can be stored either in the same file or in a separate utility file to avoid clutter.
  // Utility Function:
  
  // The findDocumentControlCodeByType function provides a way to search for a document control code by doc__type. This could be useful in your extension for querying specific document types across the 10 datasets you are working with.
  // Optional Fields:
  
  // Since not all JSON objects contain party2_type or party3_type, these fields are optional in the interface. This is marked using the ? operator, which ensures TypeScript enforces these values only when present.
  // Usage in Other Parts of Your Project
  // When dealing with querying or interacting with this dataset in other parts of your project, you'll import the interface (AcrisDocumentControlCode) and the constant (DOCUMENT_CONTROL_CODES) as needed.
  // This approach ensures consistency when querying other datasets using doc__type_description, and TypeScript will enforce the structure across your codebase.
  