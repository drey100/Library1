import axios from "axios";

const API_BASE = "https://ton-api.com";

export const getLivres = async () => {
  try {
    const res = await axios.get(`${API_BASE}/livres`);
    return res.data;
  } catch (err) {
    console.error("Erreur getLivres:", err);
    throw err;
  }
};

export const ajouterLivre = async (livre) => {
  try {
    const res = await axios.post(`${API_BASE}/livres`, livre, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (err) {
    console.error("Erreur ajouterLivre:", err);
    throw err;
  }
};


export default App

