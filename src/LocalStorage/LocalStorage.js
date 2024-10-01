// src/localStorage/LocalStorage.js
import CountryCodes from "../components/CountriesCheckboxes/mappedData/CountryCodes.json";

let userFavorites = {
  categories: [
    {
      category_name: "My Countries",
      category_type: "chosen-by-user",
      record_type_origin: "T",
      items: [
        // { country_code: "US", description: "UNITED STATES", record_type: "T" },
        // { country_code: "AR", description: "ARGENTINA", record_type: "T"  }
      ]
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