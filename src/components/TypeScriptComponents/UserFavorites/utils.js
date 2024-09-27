import React, { useState, useEffect } from "react";

// Utility functions for Chrome local storage
const loadFavorites = async () => {
  return new Promise((resolve) => {
    chrome.storage.local.get(["user_favorites"], (result) => {
      resolve(result.user_favorites || { categories: [] });
    });
  });
};

const saveFavorites = async (favorites) => {
  return new Promise((resolve) => {
    chrome.storage.local.set({ user_favorites: favorites }, () => {
      resolve();
    });
  });
};

// Component for managing favorites
const FavoritesManager = () => {
  const [favorites, setFavorites] = useState({ categories: [] });
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newItem, setNewItem] = useState({
    document_id: "",
    dataset: "",
    note: "",
  });
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    // Load favorites on component mount
    loadFavorites().then((loadedFavorites) => {
      setFavorites(loadedFavorites);
    });
  }, []);

  const addItemToCategory = async () => {
    const updatedFavorites = { ...favorites };

    const category = updatedFavorites.categories.find(
      (cat) => cat.category_name === selectedCategory
    );
    if (category) {
      category.items.push(newItem);
    } else {
      // Handle the case where a new custom project is being created
      updatedFavorites.categories.push({
        category_name: newCategoryName,
        category_type: "custom",
        items: [newItem],
      });
    }

    await saveFavorites(updatedFavorites);
    setFavorites(updatedFavorites);
    setNewItem({ document_id: "", dataset: "", note: "" });
    setNewCategoryName("");
    setSelectedCategory("");
  };

  return (
    <div>
      <h3>Favorite a Document</h3>
      <input
        type="text"
        placeholder="Document ID"
        value={newItem.document_id}
        onChange={(e) =>
          setNewItem({ ...newItem, document_id: e.target.value })
        }
      />
      <textarea
        placeholder="Add a note"
        value={newItem.note}
        onChange={(e) => setNewItem({ ...newItem, note: e.target.value })}
      />
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        {favorites.categories.map((category) => (
          <option key={category.category_name} value={category.category_name}>
            {category.category_name}
          </option>
        ))}
        <option value="new">Create New Project</option>
      </select>
      {selectedCategory === "new" && (
        <input
          type="text"
          placeholder="New Project Name"
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
        />
      )}
      <button onClick={addItemToCategory}>Add to Favorites</button>

      <h3>Saved Favorites</h3>
      {favorites.categories.map((category) => (
        <div key={category.category_name}>
          <h4>{category.category_name}</h4>
          <ul>
            {category.items.map((item) => (
              <li key={item.document_id}>
                {item.document_id} - {item.note}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FavoritesManager;
