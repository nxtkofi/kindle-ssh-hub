import {Dispatch} from 'react';
import React from 'react';
import {Text, Box, useInput} from 'ink';
import {AppOptionsType} from './types.js';

export interface SelectInputProps {
	selectedIndex: number;
	setSelectedIndex: Dispatch<React.SetStateAction<number>>;
	menuOption: AppOptionsType | undefined;
	setMenuOption: Dispatch<React.SetStateAction<AppOptionsType | undefined>>;
	items: readonly AppOptionsType[];
}

export function SelectInput(props: SelectInputProps) {
	useInput((input, key) => {
		if (key.upArrow || input === 'k') {
			props.setSelectedIndex(previousIndex =>
				previousIndex === 0 ? props.items.length - 1 : previousIndex - 1,
			);
		}

		if (key.downArrow || input === 'j') {
			props.setSelectedIndex(previousIndex =>
				previousIndex === props.items.length - 1 ? 0 : previousIndex + 1,
			);
		}
		if (key.return) {
			props.setMenuOption(props.items[props.selectedIndex]);
		}
	});

	return (
		<Box flexDirection="column" aria-role="list">
			<Text>Select a color:</Text>
			{props.items &&
				props.items.map((item, index) => {
					const isSelected = index === props.selectedIndex;
					const label = isSelected ? `> ${item}` : `  ${item}`;

					return (
						<Box
							key={item}
							aria-role="listitem"
							aria-state={{selected: isSelected}}
						>
							<Text color={isSelected ? 'blue' : undefined}>{label}</Text>
						</Box>
					);
				})}
		</Box>
	);
}
