import React from 'react';

const UserCard = ({ user, onEdit, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
      <img src={user.avatar} alt={user.first_name} className="w-16 h-16 rounded-full mb-2" />
      <h3 className="font-bold">{user.first_name} {user.last_name}</h3>
      <p className="text-gray-600">{user.email}</p>
      <div className="mt-2 space-x-2">
        <button onClick={() => onEdit(user)} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
          Edit
        </button>
        <button onClick={() => onDelete(user.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
