export interface AcrisRealPropertyReferences {
    document_id: string; // 16 characters
    record_type: string; // 1 character, 'X' for cross reference record
    reference_by_crfn: string; // 13 characters
    reference_by_doc_id: string; // 16 characters
    reference_by_reel_year: number; // 4 digits
    reference_by_reel_borough: number; // 1 digit
    reference_by_reel_nbr: number; // 5 digits
    reference_by_reel_page: number; // 5 digits
    good_through_date: string; // 10 characters, Format: MM/DD/YYYY
  }
  