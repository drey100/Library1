const API_BASE = "https://books-api-ov9a.onrender.com";

// Connexion de l'utilisateur
export const login = async (email, password) => {
  try {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) throw new Error("Échec de la connexion");

    const data = await res.json();
    localStorage.setItem("token", data.token);
    return data;
  } catch (err) {
    console.error("Erreur login:", err);
    throw err;
  }
};

// Déconnexion
export const logout = () => {
  localStorage.removeItem("token");
};

// Récupérer le token stocké
export const getToken = () => {
  return localStorage.getItem("token");
};

// Vérifie si l'utilisateur est connecté
export const isAuthenticated = () => {
  return !!getToken();
};
