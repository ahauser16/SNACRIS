// src/localStorage/LocalStorage.js
import PropertyTypeCodes from "../components/AcrisData/PropertyTypeCodes.json";
import DocMapClassTypeParties from "../components/AcrisData/DocMapClassTypeParties.json";
import UccCollateralCodes from "../components/AcrisData/UccCollateralCodes.json";
import USstateCodes from "../components/AcrisData/USstateCodes.json";
import CountryCodes from "../components/AcrisData/CountryCodes.json";


let userFavorites = {
  categories: [
    {
      category_name: "My Countries",
      category_type: "chosen-by-user",
      record_type_origin: "T",
      items: []
    },
    {
      category_name: "My States",
      category_type: "chosen-by-user",
      record_type_origin: "S",
      items: []
    },
    {
      category_name: "My Property Types",
      category_type: "chosen-by-user",
      record_type_origin: "G",
      items: []
    }
  ]
};

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

export const getFavorites = () => {
  return new Promise((resolve) => {
    resolve(userFavorites);
  });
};

export const saveFavorites = (favorites) => {
  return new Promise((resolve) => {
    userFavorites = favorites;
    resolve();
  });
};

export const getBaseLevelValues = () => {
  return new Promise((resolve) => {
    resolve(baseLevelValues);
  });
};

export const saveBaseLevelValues = (values) => {
  return new Promise((resolve) => {
    baseLevelValues = values;
    resolve();
  });
};

const validateValue = (dataset, fieldName, value) => {
  const fieldValidations = {
    crfn: (val) => val.length === 13,
    document_id: (val) => val.length === 16,
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
    doc__type: (val) => val.length <= 8,
    doc__type_description: (val) => val.length <= 30,
    class_code_description: (val) => val.length <= 30,
    party1_type: (val) => val.length <= 20,
    party2_type: (val) => val.length <= 20,
    party3_type: (val) => val.length <= 20,
    ucc_collateral_code: (val) => val.length === 1,
    description: (val) => val.length <= 50,
    property_type: (val) => val.length <= 2,
    state_code: (val) => val.length <= 2,
    country_code: (val) => val.length <= 2,
    // Add other field validations as needed
  };

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

  return fieldValidations[fieldName] ? fieldValidations[fieldName](value) : true;
};

export const addBaseLevelValue = async (dataset, fieldName, value) => {
  const values = await getBaseLevelValues();
  if (!validateValue(dataset, fieldName, value)) {
    throw new Error(`'${value}' cannot be a ${fieldName} because it is not valid.`);
  }
  if (!values[dataset][fieldName]) {
    values[dataset][fieldName] = [];
  }
  values[dataset][fieldName].push(value);
  await saveBaseLevelValues(values);
};

export const removeBaseLevelValue = async (dataset, fieldName, value) => {
  const values = await getBaseLevelValues();
  if (values[dataset][fieldName]) {
    values[dataset][fieldName] = values[dataset][fieldName].filter(item => item !== value);
    await saveBaseLevelValues(values);
  }
};





// Existing methods for adding/removing favorites
export const addFavoriteCountry = async (countryCode) => {
  const favorites = await getFavorites();
  let category = favorites.categories.find(
    (cat) => cat.category_name === "My Countries"
  );

  if (!category) {
    category = {
      category_name: "My Countries",
      category_type: "chosen-by-user",
      record_type_origin: "T",
      items: [],
    };
    favorites.categories.push(category);
  }

  if (!category.items.some((item) => item.country_code === countryCode)) {
    const countryData = CountryCodes.find(
      (country) => country.country_code === countryCode
    );
    if (countryData) {
      category.items.push({
        country_code: countryCode,
        description: countryData.description,
        record_type: countryData.record_type,
      });
    }
  }

  await saveFavorites(favorites);
};

export const addFavoriteState = async (stateCode) => {
  const favorites = await getFavorites();
  let category = favorites.categories.find(
    (cat) => cat.category_name === "My States"
  );

  if (!category) {
    category = {
      category_name: "My States",
      category_type: "chosen-by-user",
      record_type_origin: "S",
      items: [],
    };
    favorites.categories.push(category);
  }

  if (!category.items.some((item) => item.state_code === stateCode)) {
    const stateData = StateCodes.find(
      (state) => state.state_code === stateCode
    );
    if (stateData) {
      category.items.push({
        state_code: stateCode,
        description: stateData.description,
        record_type: stateData.record_type,
      });
    }
  }

  await saveFavorites(favorites);
};

export const addFavoritePropertyType = async (propertyTypeCode) => {
  const favorites = await getFavorites();
  let category = favorites.categories.find(
    (cat) => cat.category_name === "My Property Types"
  );

  if (!category) {
    category = {
      category_name: "My Property Types",
      category_type: "chosen-by-user",
      record_type_origin: "G",
      items: [],
    };
    favorites.categories.push(category);
  }

  if (!category.items.some((item) => item.property_type === propertyTypeCode)) {
    const propertyTypeData = PropertyTypeCodes.find(
      (propertyType) => propertyType.property_type === propertyTypeCode
    );
    if (propertyTypeData) {
      category.items.push({
        property_type: propertyTypeCode,
        description: propertyTypeData.description,
        record_type: propertyTypeData.record_type,
      });
    }
  }

  await saveFavorites(favorites);
};

export const removeFavoriteCountry = async (countryCode) => {
  const favorites = await getFavorites();
  const category = favorites.categories.find(
    (cat) => cat.category_name === "My Countries"
  );

  if (category) {
    category.items = category.items.filter(
      (item) => item.country_code !== countryCode
    );
    await saveFavorites(favorites);
  }
};

export const removeFavoriteState = async (stateCode) => {
  const favorites = await getFavorites();
  const category = favorites.categories.find(
    (cat) => cat.category_name === "My States"
  );

  if (category) {
    category.items = category.items.filter(
      (item) => item.state_code !== stateCode
    );
    await saveFavorites(favorites);
  }
};

export const removeFavoritePropertyType = async (propertyTypeCode) => {
  const favorites = await getFavorites();
  const category = favorites.categories.find(
    (cat) => cat.category_name === "My Property Types"
  );

  if (category) {
    category.items = category.items.filter(
      (item) => item.property_type !== propertyTypeCode
    );
    await saveFavorites(favorites);
  }
};