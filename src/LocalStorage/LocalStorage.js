// src/localStorage/LocalStorage.js
import PropertyTypeCodes from "../components/AcrisData/PropertyTypeCodes.json";
import DocMapClassTypeParties from "../components/AcrisData/DocMapClassTypeParties.json";
import UccCollateralCodes from "../components/AcrisData/UccCollateralCodes.json";
import USstateCodes from "../components/AcrisData/USstateCodes.json";
import CountryCodes from "../components/AcrisData/CountryCodes.json";

let baseLevelValues = {
  ACRIS_REAL_PROPERTY_MASTER: {
    record_type: "A",
    document_id: [],
    crfn: [],
    recorded_borough: [],
    doc_type: [],
    document_date: [],
    document_amt: [],
    recorded_datetime: [],
    modified_date: [],
    reel_yr: [],
    reel_nbr: [],
    reel_pg: [],
    percent_trans: [],
    good_through_date: [],
  },
  ACRIS_REAL_PROPERTY_LEGALS: {
    record_type: "L",
    document_id: [],
    borough: [],
    block: [],
    lot: [],
    easement: [],
    partial_lot: [],
    air_rights: [],
    subterranean_rights: [],
    property_type: [],
    street_number: [],
    street_name: [],
    unit_address: [],
    good_through_date: [],
  },
  ACRIS_REAL_PROPERTY_PARTIES: {
    record_type: "P",
    document_id: [],
    party_type: [],
    name: [],
    address_1: [],
    address_2: [],
    country: [],
    city: [],
    state: [],
    zip: [],
    good_through_date: [],
  },
  ACRIS_REAL_PROPERTY_REFERENCES: {
    record_type: "X",
    document_id: [],
    reference_by_crfn_: [],
    reference_by_doc_id: [],
    reference_by_reel_year: [],
    reference_by_reel_borough: [],
    reference_by_reel_nbr: [],
    reference_by_reel_page: [],
    good_through_date: [],
  },
  ACRIS_REAL_PROPERTY_REMARKS: {
    record_type: "R",
    document_id: [],
    sequence_number: [],
    remark_text: [],
    good_through_date: [],
  },
  DOCUMENT_CONTROL_CODES: {
    record_type: "D",
    doc__type: [],
    doc__type_description: [],
    class_code_description: [],
    party1_type: [],
    party2_type: [],
    party3_type: [],
  },
  UCC_COLLATERAL_CODES: {
    record_type: "U",
    ucc_collateral_code: [],
    description: [],
  },
  PROPERTY_TYPE_CODES: {
    record_type: "G",
    property_type: [],
    description: [],
  },
  STATE_CODES: {
    record_type: "S",
    state_code: [],
    description: [],
  },
  COUNTRY_CODES: {
    record_type: "T",
    country_code: [],
    description: [],
  }
};

export const getBaseLevelValues = () => {
  return new Promise((resolve) => {
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      chrome.storage.local.get('baseLevelValues', (result) => {
        if (result.baseLevelValues) {
          baseLevelValues = result.baseLevelValues;
        }
        resolve(baseLevelValues);
      });
    } else {
      const storedValues = localStorage.getItem('baseLevelValues');
      if (storedValues) {
        baseLevelValues = JSON.parse(storedValues);
      }
      resolve(baseLevelValues);
    }
  });
};

export const saveBaseLevelValues = (values) => {
  return new Promise((resolve) => {
    baseLevelValues = values;
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      chrome.storage.local.set({ baseLevelValues: values }, () => {
        resolve();
      });
    } else {
      localStorage.setItem('baseLevelValues', JSON.stringify(values));
      resolve();
    }
  });
};

const fieldValidations = {
  ACRIS_REAL_PROPERTY_MASTER: {
    document_id: (val) => val.length === 16,
    crfn: (val) => val.length === 13,
    recorded_borough: (val) => [1, 2, 3, 4, 5].includes(Number(val)),
    doc_type: (val) => val.length <= 8,
    document_date: (val) => /^\d{2}\/\d{2}\/\d{4}$/.test(val),
    document_amt: (val) => /^\d+(\.\d{1,2})?$/.test(val),
    recorded_datetime: (val) => /^\d{2}\/\d{2}\/\d{4}$/.test(val),
    modified_date: (val) => /^\d{2}\/\d{2}\/\d{4}$/.test(val),
    reel_yr: (val) => /^\d{4}$/.test(val),
    reel_nbr: (val) => /^\d{5}$/.test(val),
    reel_pg: (val) => /^\d{5}$/.test(val),
    percent_trans: (val) => /^\d+(\.\d{1,6})?$/.test(val),
    good_through_date: (val) => /^\d{2}\/\d{2}\/\d{4}$/.test(val),
  },
  ACRIS_REAL_PROPERTY_LEGALS: {
    document_id: (val) => val.length === 16,
    borough: (val) => [1, 2, 3, 4, 5].includes(Number(val)),
    block: (val) => /^\d{5}$/.test(val),
    lot: (val) => /^\d{4}$/.test(val),
    easement: (val) => ['Y', 'N'].includes(val),
    partial_lot: (val) => ['P', 'E', 'N'].includes(val),
    air_rights: (val) => ['Y', 'N'].includes(val),
    subterranean_rights: (val) => ['Y', 'N'].includes(val),
    property_type: (val) => val.length <= 2,
    street_number: (val) => val.length <= 12,
    street_name: (val) => val.length <= 32,
    unit_address: (val) => val.length <= 7,
    good_through_date: (val) => /^\d{2}\/\d{2}\/\d{4}$/.test(val),
  },
  ACRIS_REAL_PROPERTY_PARTIES: {
    document_id: (val) => val.length === 16,
    party_type: (val) => val.length === 1,
    name: (val) => val.length <= 70,
    address_1: (val) => val.length <= 60,
    address_2: (val) => val.length <= 60,
    country: (val) => val.length === 2,
    city: (val) => val.length <= 30,
    state: (val) => val.length === 2,
    zip: (val) => val.length <= 9,
    good_through_date: (val) => /^\d{2}\/\d{2}\/\d{4}$/.test(val),
  },
  ACRIS_REAL_PROPERTY_REFERENCES: {
    document_id: (val) => val.length === 16,
    reference_by_crfn_: (val) => val.length === 13,
    reference_by_doc_id: (val) => val.length === 16,
    reference_by_reel_year: (val) => /^\d{4}$/.test(val),
    reference_by_reel_borough: (val) => [1, 2, 3, 4, 5].includes(Number(val)),
    reference_by_reel_nbr: (val) => /^\d{5}$/.test(val),
    reference_by_reel_page: (val) => /^\d{5}$/.test(val),
    good_through_date: (val) => /^\d{2}\/\d{2}\/\d{4}$/.test(val),
  },
  ACRIS_REAL_PROPERTY_REMARKS: {
    document_id: (val) => val.length === 16,
    sequence_number: (val) => /^\d{1,2}$/.test(val),
    remark_text: (val) => val.length <= 232,
    good_through_date: (val) => /^\d{2}\/\d{2}\/\d{4}$/.test(val),
  },
  DOCUMENT_CONTROL_CODES: {
    doc__type: (val) => val.length <= 8,
    doc__type_description: (val) => val.length <= 30,
    class_code_description: (val) => val.length <= 30,
    party1_type: (val) => val.length <= 20,
    party2_type: (val) => val.length <= 20,
    party3_type: (val) => val.length <= 20,
  },
  UCC_COLLATERAL_CODES: {
    ucc_collateral_code: (val) => val.length === 1,
    description: (val) => val.length <= 50,
  },
  PROPERTY_TYPE_CODES: {
    property_type: (val) => val.length <= 2,
    description: (val) => val.length <= 50,
  },
  STATE_CODES: {
    state_code: (val) => val.length <= 2,
    description: (val) => val.length <= 50,
  },
  COUNTRY_CODES: {
    country_code: (val) => val.length <= 2,
    description: (val) => val.length <= 50,
  }
};

const validateValue = (dataset, fieldName, value) => {
  if (dataset === "DOCUMENT_CONTROL_CODES") {
    const docType = DocMapClassTypeParties.find(doc => doc.doc__type === value);
    if (!docType) {
      return false;
    }

    if (fieldName === "doc__type_description" && docType.doc__type_description !== value) {
      return false;
    }
    if (fieldName === "class_code_description" && docType.class_code_description !== value) {
      return false;
    }
    if (fieldName === "party1_type" && docType.party1_type !== value) {
      return false;
    }
    if (fieldName === "party2_type" && docType.party2_type !== value) {
      return false;
    }
    if (fieldName === "party3_type" && docType.party3_type !== value) {
      return false;
    }
  }

  if (dataset === "PROPERTY_TYPE_CODES") {
    const propertyType = PropertyTypeCodes.find(type => type.property_type === value);
    if (!propertyType) {
      return false;
    }

    if (fieldName === "description" && propertyType.description !== value) {
      return false;
    }
  }

  if (dataset === "UCC_COLLATERAL_CODES") {
    const uccCollateral = UccCollateralCodes.find(code => code.ucc_collateral_code === value);
    if (!uccCollateral) {
      return false;
    }

    if (fieldName === "description" && uccCollateral.description !== value) {
      return false;
    }
  }

  if (dataset === "STATE_CODES") {
    const stateCode = USstateCodes.find(state => state.state_code === value);
    if (!stateCode) {
      return false;
    }

    if (fieldName === "description" && stateCode.description !== value) {
      return false;
    }
  }

  if (dataset === "COUNTRY_CODES") {
    const countryCode = CountryCodes.find(country => country.country_code === value);
    if (!countryCode) {
      return false;
    }

    if (fieldName === "description" && countryCode.description !== value) {
      return false;
    }
  }

  return fieldValidations[dataset] && fieldValidations[dataset][fieldName]
    ? fieldValidations[dataset][fieldName](value)
    : true;
};

const isDuplicateValue = (dataset, fieldName, value, values) => {
  return values[dataset][fieldName] && values[dataset][fieldName].includes(value);
};

export const addBaseLevelValue = async (dataset, fieldName, value) => {
  const values = await getBaseLevelValues();
  console.log('Before adding value:', values);
  if (!validateValue(dataset, fieldName, value)) {
    throw new Error(`'${value}' cannot be a ${fieldName} because it is not valid.`);
  }
  if (isDuplicateValue(dataset, fieldName, value, values)) {
    throw new Error(`'${value}' is a duplicate entry for ${fieldName} in ${dataset}.`);
  }
  if (!values[dataset][fieldName]) {
    values[dataset][fieldName] = [];
  }
  values[dataset][fieldName].push(value);
  console.log('After adding value:', values);
  await saveBaseLevelValues(values);
};

export const removeBaseLevelValue = async (dataset, fieldName, value) => {
  const values = await getBaseLevelValues();
  if (values[dataset][fieldName]) {
    values[dataset][fieldName] = values[dataset][fieldName].filter(item => item !== value);
    await saveBaseLevelValues(values);
  }
};

export const isValueInLocalStorage = async (dataset, fieldName, value) => {
  const values = await getBaseLevelValues();
  return isDuplicateValue(dataset, fieldName, value, values);
};