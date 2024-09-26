// // AdminProfile.jsx
// import React from 'react';

// const AdminProfile = () => {
//   return (
//     <div className="max-w-md mx-auto p-4 pt-6">
//       <h2 className="text-2xl font-bold mb-4">Profile Details</h2>
//       <div className="bg-white shadow-md rounded px-4 py-6">
//         <div className="flex items-center mb-4">
//           <img
//             src="https://placehold.co/50x50"
//             alt="Admin profile picture"
//             className="rounded-full w-12 h-12 mr-3"
//           />
//           <div>
//             <p className="text-sm">Welcome,</p>
//             <p className="font-bold">Admin</p>
//           </div>
//         </div>
//         <div className="flex flex-wrap -mx-3 mb-6">
//           <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
//               Username
//             </label>
//             <input
//               type="text"
//               value="Admin"
//               disabled
//               className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
//             />
//           </div>
//           <div className="w-full md:w-1/2 px-3">
//             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               value="admin@example.com"
//               disabled
//               className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
//             />
//           </div>
//         </div>
//         <div className="flex flex-wrap -mx-3 mb-6">
//           <div className="w-full px-3">
//             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
//               Password
//             </label>
//             <input
//               type="password"
//               value="********"
//               disabled
//               className="appearance-none block w-full bg-gray- 200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
//             />
//           </div>
//         </div>
//         <button
//           type="button"
//           className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Edit Profile
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AdminProfile;


// AdminProfile.jsx
import React, { useState } from 'react';

const AdminProfile = () => {
  const [profile, setProfile] = useState({
    username: 'Admin',
    email: 'admin@example.com',
    password: '********',
  });

  const [editing, setEditing] = useState(false);
  const [newUsername, setNewUsername] = useState(profile.username);
  const [newEmail, setNewEmail] = useState(profile.email);
  const [newPassword, setNewPassword] = useState(profile.password);

  const handleEditProfile = () => {
    // Switch to editing mode
    console.log("Hello")
    setEditing(true);
  };

  const handleSaveProfile = (event) => {
    event.preventDefault();
    // Update the profile details and exit editing mode
    setProfile({
      username: newUsername,
      email: newEmail,
      password: newPassword,
    });
    setEditing(false);
  };

  const handleUsernameChange = (event) => {
    setNewUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setNewEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  return (
    <div className="max-w-md mx-auto p-4 pt-6">
      <h2 className="text-2xl font-bold mb-4">Profile Details</h2>
      <form onSubmit={handleSaveProfile}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              value={editing ? newUsername : profile.username}
              onChange={handleUsernameChange}
              disabled={!editing}
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white ${editing ? 'focus:border-blue-500' : ''}`}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              value={editing ? newEmail : profile.email}
              onChange={handleEmailChange}
              disabled={!editing}
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white ${editing ? 'focus:border-blue-500' : ''}`}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              value={editing ? newPassword : profile.password}
              onChange={handlePasswordChange}
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white ${editing ? 'focus:border-blue-500' : ''}`}
            />
          </div>
        </div>
        {editing ? (
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Save Profile
          </button>
        ) : (
          <button
            type="button"
            onClick={handleEditProfile}
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            Edit Profile
          </button>
        )}
      </form>
    </div>
  );
};

export default AdminProfile;
