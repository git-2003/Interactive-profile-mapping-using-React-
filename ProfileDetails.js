import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MapComponent from './MapComponent';

const ProfileDetails = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get(`/api/profiles/${id}`)
      .then(response => {
        setProfile(response.data);
      })
      .catch(error => console.error("Error fetching profile:", error));
  }, [id]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>{profile.name}</h2>
      <img src={profile.photo} alt={profile.name} style={{ width: '200px' }} />
      <p>{profile.description}</p>
      <MapComponent address={profile.address} />
    </div>
  );
};

export default ProfileDetails;
