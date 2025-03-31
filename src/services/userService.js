import API from '../utils/axios.js';


//  Fetch Users
export const fetchUsers = async (page) => {
  try {
    const response = await API.get(`/api/users?page=${page}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
};

// Update User
export const updateUser = async (id, updatedData) => {
  try {
    await API.put(`/api/users/${id}`, updatedData);
    return { success: true, message: 'User updated successfully' };
  } catch (error) {
    return { success: false, message: 'Failed to update user' };
  }
};

//  Delete User
export const deleteUser = async (id) => {
  try {
    await API.delete(`/api/users/${id}`);
    return { success: true, message: 'User deleted successfully' };
  } catch (error) {
    return { success: false, message: 'Failed to delete user' };
  }
};
