import {useContext} from 'react';
import {UtilityContext} from '../context/UtilityContext.js';

export const useUtility = () => {
	const ctx = useContext(UtilityContext);
	if (!ctx) {
		throw new Error('useUtility must be used within a UtilityProvider');
	}
	return ctx;
};
