export const deleteUser = (userId) =>
	fetch(`http://localhost:3006/users/${userId}`, {
		method: 'DELETE',
	});
