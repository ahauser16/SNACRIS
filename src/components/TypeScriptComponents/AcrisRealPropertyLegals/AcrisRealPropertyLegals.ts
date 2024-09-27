export interface AcrisRealPropertyLegals {
    document_id: string; // 16 characters
    record_type: string; // 1 character, 'L' for lot record
    borough: number; // 1=Manhattan, 2=Bronx, 3=Brooklyn, 4=Queens, 5=Staten Island
    block: number; // 5 digits
    lot: number; // 4 digits
    easement: string; // Y=yes, N=no
    partial_lot: string; // P=partial, E=entire, N=not applicable
    air_rights: string; // Y=yes, N=no
    subterranean_rights: string; // Y=yes, N=no
    property_type: string; // 2 characters, code defined in property codes record
    street_number: string; // 12 characters
    street_name: string; // 32 characters
    unit_address: string; // 7 characters
    good_through_date: string; // 10 characters, Format: MM/DD/YYYY
  }
  