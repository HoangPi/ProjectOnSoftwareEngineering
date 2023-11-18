import React, { useState } from "react";

function ProfilePage() {
  const [profileUser, setProfileUser] = useState({
    ID: 1,
    name: "Tokuda Sensei",
    email: "@tokudass",
    image: "https://i.imgur.com/fzEuoDu.png",
    createdDate: "10/11/2023 - 13:59:12",
    updatedDate: "12/11/2023 - 13:59:12",
  });

  const [editing, setEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(profileUser);

  const handleEdit = () => {
    setEditing(true);
    setUpdatedUser(profileUser);
  };

  const handleInputChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };
  const handleCancel = () => {
    setEditing(false);
  };

  const handleSave = () => {
    setProfileUser(updatedUser);
    setEditing(false);
  };

  return (
    <div className="profile-page rel">
      <h2 className="title s34 fontb cdef">Profile</h2>
      <div className="profile-section">
        <div className="avatar">
          <img src={profileUser.image} alt="Avatar" />
        </div>
        <div className="profile-info als">
          <div className="link noul flex c33 align-center">
            <h2 className="txt accountid s30 fontb cdef">User ID:</h2>
            {editing ? (
              <input
                type="text"
                name="ID"
                value={updatedUser.ID}
                onChange={handleInputChange}
              />
            ) : (
              <h2 className="txt accountid s30 fontn c33">{profileUser.ID}</h2>
            )}
          </div>
          <div className="link noul flex c33 align-center">
            <h2 className="txt accountid s30 fontb cdef">Name:</h2>
            {editing ? (
              <input
                type="text"
                name="name"
                value={updatedUser.name}
                onChange={handleInputChange}
              />
            ) : (
              <h2 className="txt accountid s30 fontn c33">{profileUser.name}</h2>
            )}
          </div>
          <div className="link noul flex c33 align-center">
            <h2 className="txt accountid s30 fontb cdef">Email:</h2>
            {editing ? (
              <input
                type="text"
                name="email"
                value={updatedUser.email}
                onChange={handleInputChange}
              />
            ) : (
              <h2 className="txt accountid s30 fontn c33">{profileUser.email}</h2>
            )}
          </div>
          <div className="link noul flex c33 align-center">
            <h2 className="txt accountid s30 fontb cdef">Created Date:</h2>
            <h2 className="txt accountid s30 fontn c33">{profileUser.createdDate}</h2>
          </div>
          <div className="link noul flex c33 align-center">
            <h2 className="txt accountid s30 fontb cdef">Updated Date:</h2>
            <h2 className="txt accountid s30 fontn c33">{profileUser.updatedDate}</h2>
          </div>
          {editing ? (
            <div className="edit">
                <button className="btn-save cff s34" onClick={handleCancel}>
              Cancel
            </button>
                <button className="btn-save cff s34" onClick={handleSave}>
                Save
                </button>
            </div>
            
            
          ) : (
            <button className="btn-edit cff s34" onClick={handleEdit}>
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;