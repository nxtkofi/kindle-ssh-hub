import {useApp, useStderr, useInput, Box, Text} from 'ink';
import React from 'react';
import {useEffect, type ReactElement, type ReactNode} from 'react';

export interface catgameProps {
	children: ReactNode;
}

export function Catgame(): ReactElement {
	const {exit} = useApp();
	const [x, setX] = React.useState(1);
	const [y, setY] = React.useState(1);
	const {write} = useStderr();

	useEffect(() => {
		// Write a single message to stderr, above Ink's output
		write('Hello from Ink to stderr\n');
	}, []);

	useInput((input, key) => {
		if (input === 'q') {
			exit();
		}

		if (key.leftArrow) {
			setX(Math.max(1, x - 1));
		}

		if (key.rightArrow) {
			setX(Math.min(20, x + 1));
		}

		if (key.upArrow) {
			setY(Math.max(1, y - 1));
		}

		if (key.downArrow) {
			setY(Math.min(10, y + 1));
		}
	});

	return (
		<Box flexDirection="column">
			<Text>Use arrow keys to move the face. Press “q” to exit.</Text>
			<Box height={12} paddingLeft={x} paddingTop={y}>
				<Text>^_^</Text>
			</Box>
		</Box>
	);
}
