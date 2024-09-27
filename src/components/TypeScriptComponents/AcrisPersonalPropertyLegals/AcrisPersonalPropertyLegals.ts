export interface AcrisPersonalPropertyLegals {
    document_id: string; // Document identifier
    record_type: string; // 'L' for legals record
    borough: number; // Borough Code: 1=Manhattan, 2=Bronx, 3=Brooklyn, 4=Queens
    block: number; // Block number
    lot: number; // Lot number
    easement: string; // Y=yes, N=no
    partial_lot: string; // P=partial, E=entire
    air_rights: string; // Y=yes, N=no
    subterranean_rights: string; // Y=yes, N=no
    property_type: string; // Code defined in property table
    street_number: string; // Street number for BBL
    street_name: string; // Street name for BBL
    addr_unit: string; // Unit number for BBL
    good_through_date: string; // Date of latest recording or correction
  }
  