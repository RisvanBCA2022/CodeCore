// EditProfileForm.js
import React from "react";

const EditProfileForm = ({ onCancel }) => {
  return (
    <div>
      <h1 className="edit-profile-title">Edit Your Profile</h1>
      <h2 className="edit-profile-title-2">Public information</h2>
      <form className="edit-profile-form">
        <label htmlFor="name">
          <h3>Display name</h3>
          <input type="text" />
        </label>
        <label htmlFor="about">
          <h3>About me</h3>
          <textarea id="about" cols="30" rows="10"></textarea>
        </label>
        <label htmlFor="tags">
          <h3>Watched tags</h3>
          <p>Add tags separated by 1 space</p>
          <input type="text" id="tags" />
        </label>
        <br />
        <input type="submit" value="Save profile" className="user-submit-btn" />
        <button type="button" className="user-cancel-btn" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditProfileForm;
