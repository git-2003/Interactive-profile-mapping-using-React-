import React from 'react';
import { Link } from 'react-router-dom';

const ProfileCard = ({ profile }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px', width: '200px' }}>
      <img src={profile.photo} alt={profile.name} style={{ width: '100%' }} />
      <h3>{profile.name}</h3>
      <p>{profile.description}</p>
      <Link to={`/profile/${profile.id}`}>
        <button>View on Map</button>
      </Link>
    </div>
  );
};

export default ProfileCard;
