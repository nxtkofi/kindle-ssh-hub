#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './app.js';

const cli = meow(
	`
	Usage
	  $ kindle-ssh-hub

	Options
		--name  Your name

	Examples
	  $ kindle-ssh-hub --name=Jane
	  Hello, Jane
`,
	{
		importMeta: import.meta,
		flags: {
			kindle_ip_address: {
				type: 'string',
			},
			kindle_ssh_port: {
				type: 'string',
				default: '2222',
			},
			kindle_ssh_user: {
				type: 'string',
				default: 'root',
			},
			kindle_ssh_password: {
				type: 'string',
				optional: true,
			},
			copy_clippings_to: {
				type: 'string',
				default: '~/Downloads',
			},
		},
	},
);

render(
	<App
		kindleIpAddress={cli.flags.kindleIpAddress}
		kindleSSHPort={cli.flags.kindleSshPort}
		kindleSshUser={cli.flags.kindleSshUser}
		kindleSshPassword={cli.flags.kindleSshPassword}
		copyClippingsTo={cli.flags.copyClippingsTo}
	/>,
);
