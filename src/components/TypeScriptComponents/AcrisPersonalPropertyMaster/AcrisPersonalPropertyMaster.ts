export interface AcrisPersonalPropertyMaster {
    document_id: string; // Document Identifier
    record_type: string; // 'A' for master record
    crfn: string; // City Register File Number
    recorded_borough: number; // Borough where document was recorded
    doc_type: string; // Specific type of instrument
    document_amt: number; // Principal debt or obligation
    recorded_datetime: string; // Legal date instrument was recorded
    ucc_collateral: string; // UCC Collateral code
    fedtax_serial_nbr: string; // Federal Tax Lien Serial Number
    fedtax_assessment_date: string; // Federal Tax Lien Assessment Date
    rpttl_nbr: number; // Real Property Transfer Tax Return Number
    modified_date: string; // Date document was modified
    reel_yr: number; // Pre-ACRIS reel year
    reel_nbr: number; // Pre-ACRIS reel number
    reel_pg: number; // Pre-ACRIS reel page
    file_nbr: string; // Pre-ACRIS file number
    good_through_date: string; // Date of latest recording or correction
  }
  