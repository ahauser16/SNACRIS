export interface AcrisRealPropertyMaster {
    document_id: string; // 16 characters
    record_type: string; // 1 character, 'A' for master record
    crfn: string; // 13 characters, Format: YYYYNNNNNNNNN
    recorded_borough: number; // 1 character, 1=Manhattan, 2=Bronx, 3=Brooklyn, 4=Queens, 5=Staten Island
    doc_type: string; // 8 characters, type of instrument
    document_date: string; // 10 characters, Format: MM/DD/YYYY
    document_amt: number; // 16 digits with 2 decimal places
    recorded_datetime: string; // 10 characters, Format: MM/DD/YYYY
    modified_date: string; // 10 characters, Format: MM/DD/YYYY
    reel_yr: number; // 4 digits
    reel_nbr: number; // 5 digits
    reel_pg: number; // 5 digits
    percent_trans: number; // 9 digits with 6 decimal places
    good_through_date: string; // 10 characters, Format: MM/DD/YYYY
  }
  