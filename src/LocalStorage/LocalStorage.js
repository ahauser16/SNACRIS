// src/localStorage/LocalStorage.js
import CountryCodes from "../components/CountriesCheckboxes/mappedData/CountryCodes.json";
import StateCodes from "../components/StatesCheckboxes/mappedData/States.json";
import PropertyTypeCodes from "../components/PropertyTypeCheckboxes/PropertyTypeCodes.json";

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