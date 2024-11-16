export const getCommentsCount = (comments = [], postId) => {
	const postCooments = comments.filter(
		({ postId: commentPostId }) => commentPostId === postId,
	);

	return postCooments.length;
};
