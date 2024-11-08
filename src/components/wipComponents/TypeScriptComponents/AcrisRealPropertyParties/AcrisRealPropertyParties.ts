export interface AcrisRealPropertyParties {
    document_id: string; // 16 characters
    record_type: string; // 1 character, 'P' for party record
    party_type: string; // 1 character, party type code
    name: string; // 70 characters, name of the party
    address_1: string; // 60 characters
    address_2: string; // 60 characters
    country: string; // 2 characters
    city: string; // 30 characters
    state: string; // 2 characters
    zip: string; // 9 characters
    good_through_date: string; // 10 characters, Format: MM/DD/YYYY
  }
  