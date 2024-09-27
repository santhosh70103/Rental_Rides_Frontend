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
import axios from "axios";
import React, { useEffect, useState } from "react";

const AdminProfile = (Id) => {
  const [editing, setEditing] = useState(false);
  const [newUsername, setNewUsername] = useState();
  const [newEmail, setNewEmail] = useState();
  const [newPhone, setNewPhone] = useState();
  const [newPassword, setNewPassword] = useState();

  const AdminId = parseInt(Id.Id);
  console.log( AdminId);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const AdminResponse = await axios.get(
          `https://localhost:7208/api/Admins/${AdminId}`
        );
        console.log(AdminResponse.data);
        setNewUsername(AdminResponse.data.Admin_Name);
        setNewEmail(AdminResponse.data.Admin_Email);
        setNewPassword(AdminResponse.data.Admin_Password);
        console.log(newEmail);
        console.log(newUsername);
        console.log(newPassword);
      } catch (error) {
        console.error("Error fetching admin profile:", error);
      }
    };

    fetchAdminData();
  }, [AdminId]);

  const handleEditProfile = () => {
    // Switch to editing mode

    console.log("Hello");
    setEditing(true);
  };

  const handleSaveProfile = async (event) => {
    event.preventDefault();

    if (editing) {
      const Newdata = {
        Admin_ID: AdminId,
        Admin_Name: newUsername,
        Admin_Email: newEmail,
        Admin_PhoneNo: newPhone,
        Admin_Password: newPassword,
        Role: "Admin",
      };

      const UpdateResponse = await axios.put(
        "https://localhost:7208/api/Admins/UpdateById",
        Newdata
      );

      console.log(UpdateResponse.data);

      if(UpdateResponse.data.flag == true)
      {
        setEditing(false)
      }
    }
  };

  const handleUsernameChange = (event) => {
    setNewUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setNewEmail(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  return (
    <div className="max-w-md mx-auto p-4 pt-6">
      <h2 className="text-2xl font-bold mb-4">Profile Details</h2>
      <form>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              value={newUsername}
              onChange={handleUsernameChange}
              disabled={!editing}
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white ${
                editing ? "focus:border-blue-500" : ""
              }`}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              value={newEmail}
              onChange={handleEmailChange}
              disabled={!editing}
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white ${
                editing ? "focus:border-blue-500" : ""
              }`}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              phoneNo
            </label>
            <input
              type="text"
              value={newPhone}
              onChange={handlePhoneChange}
              disabled={!editing}
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white ${
                editing ? "focus:border-blue-500" : ""
              }`}
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
              value={newPassword}
              disabled={!editing}
              onChange={handlePasswordChange}
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white ${
                editing ? "focus:border-blue-500" : ""
              }`}
            />
          </div>
        </div>
        {editing ? (
          <button
            type="button"
            onClick={handleSaveProfile}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Save Profile
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              setEditing(true);
            }}
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
