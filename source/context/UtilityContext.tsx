import React, {createContext, Dispatch, useState} from 'react';

export interface UtilityContextType {
	title: string;
	setTitle: Dispatch<React.SetStateAction<string>>;
	sideInfo: string;
	setSideInfo: Dispatch<React.SetStateAction<string>>;
}

export const UtilityContext = createContext<UtilityContextType | undefined>(
	undefined,
);

export const UtilityProvider = ({children}: {children: React.ReactNode}) => {
	const [title, setTitle] = useState<string>('KINDLE-SSH-HUB');
	const [sideInfo, setSideInfo] = useState<string>(
		'Select an option from the menu',
	);

	return (
		<UtilityContext.Provider value={{title, setTitle, sideInfo, setSideInfo}}>
			{children}
		</UtilityContext.Provider>
	);
};
