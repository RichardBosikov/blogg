export const getUsers = () =>
	fetch('http://localhost:3006/users').then((loadedUsers) => loadedUsers.json());
