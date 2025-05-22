import React, { useState, useEffect } from "react";
import "./UserCards.css";

function UserCards() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="user-cards-loading">Loading users...</div>;
  }

  if (error) {
    return <div className="user-cards-error">Error: {error}</div>;
  }

  return (
    <div className="user-cards-container">
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <h3>{user.name}</h3>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Company:</strong> {user.company.name}
          </p>
        </div>
      ))}
    </div>
  );
}

export default UserCards;
