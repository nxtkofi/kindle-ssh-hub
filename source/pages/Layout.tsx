import {Box, Text} from 'ink';
import React, {useEffect} from 'react';
import {type ReactElement, type ReactNode} from 'react';
import {Menu} from '../Menu.js';
import {useUtility} from '../hooks/useUtility.js';

export interface HomePageProps {
	children: ReactNode;
}

export function Layout(): ReactElement {
	const {title, setTitle} = useUtility();
	useEffect(() => {
		setTitle('KINDLE-SSH-HUB');
	}, []);
	return (
		<>
			<Box
				borderColor="blue"
				borderStyle={'double'}
				justifyContent="center"
				display="flex"
				flexDirection="column"
				padding={1}
			>
				<Box alignSelf="center">
					<Text backgroundColor="blue" bold color={'black'}>
						{title}
					</Text>
				</Box>
				<Menu />
			</Box>
		</>
	);
}
