import {Box, Text} from 'ink';
import React, {useState} from 'react';
import {useEffect, type ReactElement} from 'react';
import {useUtility} from '../hooks/useUtility.js';

import {spawn} from 'child_process';
import {cli} from '../program.js';
export function UpdateClippingsPage(): ReactElement {
	const {setTitle} = useUtility();
	const [files, setFiles] = useState<string[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTitle('Scanning Kindle for clippings...');

		const proc = spawn('ssh', [
			'-p',
			cli.flags.sshPort,
			`${cli.flags.sshUser}@${cli.flags.ipAddress}`,
			"find /mnt/us/documents -iname '*clippings*'",
		]);

		let buffer = '';
		let errorBuffer = '';

		proc.stdout.on('data', (chunk: Buffer) => {
			buffer += chunk.toString();
		});
		proc.stderr.on('data', (chunk: Buffer) => {
			errorBuffer += chunk.toString();
		});

		proc.on('close', code => {
			setLoading(false);
			if (code !== 0 || errorBuffer.length > 0) {
				setError(errorBuffer || `Process exited with code ${code}`);
				return;
			}
			const list = buffer
				.split('\n')
				.map(f => f.trim())
				.filter(f => f.length > 0);
			setFiles(list);
		});
	}, []);

	return (
		<Box flexDirection="column" marginTop={1}>
			{loading && <Text color="yellow">Searching...</Text>}
			{error && <Text color="red">Error: {error}</Text>}
			{!loading && !error && files.length === 0 && (
				<Text color="magenta">No clippings files found</Text>
			)}
			{files.map((f, i) => (
				<Text key={i} color="green">
					- {f}
				</Text>
			))}
		</Box>
	);
}
