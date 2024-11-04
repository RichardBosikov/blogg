import { ACTION_TYPE } from './action_type';
import { server } from '../bff';

export const logout = (session) => {
	server.logout(session);

	return {
		type: ACTION_TYPE.LOGOUT,
	};
};
