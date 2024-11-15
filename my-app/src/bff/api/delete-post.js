export const deletePost = async (postId) =>
	fetch(`http://localhost:3006/posts/${postId}`, {
		method: 'DELETE',
	});
