import React from 'react';

const ConfirmDelete = ({ user, onConfirm, onCancel, deletingUserId }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-lg font-bold mb-4">Are you sure?</h3>
        <p className="text-gray-600">
          Do you really want to delete <strong>{user.first_name} {user.last_name}</strong>?
        </p>

        <div className="mt-4 flex justify-center space-x-4">
          <button 
            onClick={() => onConfirm(user.id)} 
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            disabled={deletingUserId === user.id} 
          >
            {deletingUserId === user.id ? "Deleting..." : "Yes, Delete"}
          </button>
          <button 
            onClick={onCancel} 
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            disabled={deletingUserId === user.id} 
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
