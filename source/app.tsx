import React from 'react';
import {Menu} from './Menu.js';
import {Box, Text} from 'ink';

type Props = {
	kindleIpAddress: string | undefined;
	kindleSSHPort: string | undefined;
	kindleSshUser: string | undefined;
	kindleSshPassword: string | undefined;
	copyClippingsTo: string | undefined;
};

process.stdout.write('\x1Bc');

export default function App({}: Props) {
	return (
		<Box
			borderColor="blue"
			borderStyle={'double'}
			justifyContent="center"
			display="flex"
			flexDirection="column"
			padding={1}
		>
			<Box alignSelf="center">
				<Text backgroundColor="cyanBright" color={'black'} bold>
					KINDLE-SSH-HUB
				</Text>
			</Box>
			<Menu />
		</Box>
	);
}
