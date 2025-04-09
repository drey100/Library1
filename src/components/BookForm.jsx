import React, { useState } from "react";

export default function BookForm({ onAjout }) {
  const [form, setForm] = useState({ titre: "", auteur: "", description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAjout(form);
    setForm({ titre: "", auteur: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Titre"
        value={form.titre}
        onChange={(e) => setForm({ ...form, titre: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Auteur"
        value={form.auteur}
        onChange={(e) => setForm({ ...form, auteur: e.target.value })}
        required
      />
      <textarea
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        required
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}
