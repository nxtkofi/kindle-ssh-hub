import React, {useState} from 'react';
import {Box, Text} from 'ink';
import {type ReactElement, type ReactNode} from 'react';
import {SelectInput} from './SelectInput.js';
import {appOptions} from './constants.js';
import {AppOptionsType} from './types.js';
import {UpdateClippingsPage} from './pages/UpdateClippingsPage.js';

export interface MenuProps {
	children: ReactNode;
}

export function Menu(): ReactElement {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [menuOption, setMenuOption] = useState<AppOptionsType | undefined>(
		undefined,
	);

	return (
		<>
			{menuOption === undefined ? (
				<SelectInput
					items={appOptions}
					selectedIndex={selectedIndex}
					setSelectedIndex={setSelectedIndex}
					menuOption={menuOption}
					setMenuOption={setMenuOption}
				/>
			) : (
				<Box flexDirection="row" alignItems="center">
					<Text >You chose</Text>
					<Box
						borderStyle="round"
						borderColor="green"
						paddingX={1}
						marginLeft={1}
					>
						<Text color={'red'}>{menuOption}</Text>
					</Box>
				</Box>
			)}
			{menuOption !== undefined && menuOption == 'Update clippings' ? (
				<UpdateClippingsPage />
			) : null}
		</>
	);
}
