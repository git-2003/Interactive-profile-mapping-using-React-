import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    // Fetch profiles for management
    axios.get('/api/profiles')
      .then(response => {
        setProfiles(response.data);
      })
      .catch(error => console.error("Error fetching profiles:", error));
  }, []);

  const deleteProfile = (id) => {
    axios.delete(`/api/profiles/${id}`)
      .then(() => {
        setProfiles(profiles.filter(profile => profile.id !== id));
      })
      .catch(error => console.error("Error deleting profile:", error));
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <ul>
        {profiles.map(profile => (
          <li key={profile.id}>
            {profile.name} <button onClick={() => deleteProfile(profile.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
