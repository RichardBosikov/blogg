import { useStore } from 'react-redux';
import { useEffect } from 'react';

export const useResetForm = (reset) => {
	const store = useStore();

	useEffect(() => {
		let currentWasLogout = store.getState().app.wasLogout;

		return (store.unsubscribe = store.subscribe(() => {
			let previosWaLogout = currentWasLogout;
			currentWasLogout = store.getState().app.wasLogout;

			if (currentWasLogout !== previosWaLogout) {
				reset();
			}
		}));
	}, [reset, store]);
};
