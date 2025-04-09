export default function Api() {
    const [livres, setLivres] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const chargerLivres = async () => {
        try {
          const data = await getLivres();
          setLivres(data);
        } catch (err) {
          console.error("Erreur lors du chargement des livres :", err);
        } finally {
          setLoading(false);
        }
      };
  
      chargerLivres();
    }, []);
  
    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h2>Liste des Livres</h2>
        {loading ? (
          <p>Chargement...</p>
        ) : livres.length === 0 ? (
          <p>Aucun livre trouvé.</p>
        ) : (
          <ul>
            {livres.map((livre) => (
              <li key={livre.id}>
                <strong>{livre.titre}</strong> — {livre.auteur}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }