export const deleteSession = async (sessionId) =>
	fetch(`http://localhost:3006/sessions/${sessionId}`, {
		method: 'DELETE',
	});
