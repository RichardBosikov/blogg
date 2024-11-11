export const deleteComment = async (commentId) =>
	fetch(`http://localhost:3006/comments/${commentId}`, {
		method: 'DELETE',
	});
