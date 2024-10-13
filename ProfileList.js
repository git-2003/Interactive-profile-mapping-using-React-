import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileCard from './ProfileCard';

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    // Replace with your API call
    axios.get('/api/profiles')
      .then(response => {
        setProfiles(response.data);
      })
      .catch(error => console.error("Error fetching profiles:", error));
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {profiles.map(profile => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </div>
  );
};

export default ProfileList;
