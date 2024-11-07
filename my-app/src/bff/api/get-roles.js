export const getRoles = () =>
	fetch('http://localhost:3006/roles').then((loadedRoles) => loadedRoles.json());
