export interface AcrisPersonalPropertyRemarks {
    document_id: string; // Document Identifier
    record_type: string; // 'R' for remarks record
    sequence_number: number; // Number from 1-20
    remark_text: string; // Remarks
    good_through_date: string; // Date of latest recording or correction
  }
  