import React, { useEffect, useState } from 'react';
import { fetchUsers, updateUser, deleteUser } from '../services/userService';
import { toast } from 'react-hot-toast'; 

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [deletingUserId, setDeletingUserId] = useState(null);

  useEffect(() => {
    loadUsers(page);
  }, [page]);

  const loadUsers = async (pageNum) => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchUsers(pageNum);
      setUsers(data.data);
      setTotalPages(data.total_pages);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateUser = async (id, updatedData) => {
    setLoading(true);
    const result = await updateUser(id, updatedData);
    if (result.success) {
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === id ? { ...user, ...updatedData } : user))
      );
      toast.success('User updated successfully!');
    } else {
      toast.error(result.message); 
    }
    setLoading(false);
  };

  const handleDeleteUser = async (id) => {
    // setLoading(true);
    setDeletingUserId(id);
    const result = await deleteUser(id);
    if (result.success) {
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      toast.success('User deleted successfully!');
    } else {
      toast.error(result.message); 
    }
    // setLoading(false);
    setDeletingUserId(null);
  };

  const goToPage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return { users, page, totalPages, loading, error, goToPage, handleUpdateUser, handleDeleteUser,deletingUserId };
};

export default useUsers;
