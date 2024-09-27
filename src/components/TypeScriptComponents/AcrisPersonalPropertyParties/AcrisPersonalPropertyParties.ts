export interface AcrisPersonalPropertyParties {
    document_id: string; // Document identifier
    record_type: string; // 'P' for parties record
    party_type: string; // Party type code
    name: string; // Name of the party
    address_1: string; // Name attention/address of party
    address_2: string; // Street address of party
    country: string; // Country location of party
    city: string; // City location of party
    state: string; // State location of party
    zip: string; // Zip code of party
    good_through_date: string; // Date of latest recording or correction
  }
  