import React from 'react';
import ansiEscapes from 'ansi-escapes';
import {UtilityProvider} from './context/UtilityContext.js';
import {Layout} from './pages/Layout.js';

process.stdout.write(ansiEscapes.clearScreen);

export default function App() {
	return (
		<UtilityProvider>
			<Layout />
		</UtilityProvider>
	);
}
