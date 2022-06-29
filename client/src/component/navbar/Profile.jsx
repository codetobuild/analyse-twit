import React from 'react'

const Profile = () => {
  return (
    <div>
      <div className="w-12 h-12 rounded-full overflow-hidden absolute left-6 bottom-[-25%]">
        <img
          src="https://picsum.photos/200"
          alt="twitter_profile"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

export default Profile