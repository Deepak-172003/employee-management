import React, { useState, useEffect } from 'react';
import useUsers from '../hooks/useUsers';
import UserCard from './UserCard';
import Pagination from './Pagination';
import EditUser from './EditUser';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
  const navigate = useNavigate()
  const {
    users,
    page,
    totalPages,
    loading,
    error,
    goToPage,
    handleUpdateUser,
    handleDeleteUser,
    deletingUserId
  } = useUsers();

  const [editingUser, setEditingUser] = useState(null);
  const [deletingUser,setDeletingUser] = useState(null)
  

  const handleEdit = (user) => {
    setEditingUser(user);
    
  };

  const handleCancle = () => {
    setEditingUser(null)
  }

 

  const handleDeleteConfirm = (userId) => {
    handleDeleteUser(userId)
    setDeletingUser(null)
    
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    navigate('/')
    
    
  };

  return (
    <div className="container mx-auto p-4 bg-gradient-to-r from-blue-500 to-purple-500 ">
      
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">User Details</h2>
        <button 
          onClick={handleLogout} 
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Loading & Error Messages */}
      {loading && <p className="text-center text-gray-500">Loading users...</p>}
      {error && <div className="bg-red-100 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}
      

      {/* User Cards Grid */}
      {users.length > 0 ? (
        <>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {loading
                ? // ✅ Show Skeleton Loader Instead of Flickering
                  Array.from({ length: users.length }).map((_, index) => (
                    <div
                      key={index}
                      className="w-full h-40 bg-gray-300 animate-pulse rounded"
                    />
                  ))
                : users.map((user) => (
                    <UserCard
                      key={user.id}
                      user={user}
                      onEdit={handleEdit}
                      onDelete={handleDeleteConfirm}
                    />
                  ))}
            </div>
          </div>

          {/* Pagination Component */}
          <Pagination page={page} totalPages={totalPages} goToPage={goToPage} />
        </>
      ) : (
        !loading && <p className="text-center text-gray-500">No users found.</p>
      )}


      {/* Edit User Component */}
      {editingUser && <EditUser user={editingUser} handleUpdateUser={handleUpdateUser} onUpdateComplete={() => setEditingUser(null)} onCancel={handleCancle} />}

      {deletingUser && <ConfirmDelete user={deletingUser} onConfirm={handleDeleteConfirm} onCancel={() => setDeletingUser(null)} deletingUserId={deletingUserId} />}
      
    </div>
  );
};

export default UserList;
