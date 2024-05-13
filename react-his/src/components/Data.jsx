import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const url = "http://localhost:5000/enthis";

    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setUsers(json);
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>{JSON.stringify(users)}</p>
    </div>
  );
};

export default App;