import {AppOptionsType} from '../types.js';
import { syncClippingsWithObsidian } from './syncClippingsWithObsidian.js';
import { updateClippings } from './updateClippings.js';

export const performAction = (action: AppOptionsType) => {
	switch (action) {
		case 'Update clippings':
			updateClippings();
			break;
		case 'Sync clippings with obsidian':
			syncClippingsWithObsidian();

			break;
		default:
	}
};
