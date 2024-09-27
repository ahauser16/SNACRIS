export interface AcrisRealPropertyRemarks {
    document_id: string; // 16 characters
    record_type: string; // 1 character, 'R' for remarks record
    sequence_number: number; // 2 digits
    remark_text: string; // 232 characters
    good_through_date: string; // 10 characters, Format: MM/DD/YYYY
  }
  