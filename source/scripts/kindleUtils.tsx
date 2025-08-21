import {spawn} from 'child_process';
import {cli} from '../program.js';

export function initializeConnection() {
	const proc = spawn('ssh', [
		'-p',
		cli.flags.sshPort,
		`${cli.flags.sshUser}@${cli.flags.ipAddress}`,
		"find /mnt/us/documents -iname '*clippings*'",
	]);

	return proc;
}
