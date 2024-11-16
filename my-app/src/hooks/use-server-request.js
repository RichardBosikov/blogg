import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { selectUserSession } from '../selectors';
import { server } from '../bff';

export const useServerRequest = (operation, ...params) => {
	const session = useSelector(selectUserSession);

	return useCallback(
		async (operation, ...params) => {
			const request = ['register', 'authorize', 'fetchPost', 'fetchPosts'].includes(
				operation,
			)
				? params
				: [session, ...params];

			return server[operation](...request);
		},
		[session],
	);
};
