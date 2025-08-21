#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './app.js';

export const cli = meow(
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
			ip_address: {
				type: 'string',
			},
			ssh_port: {
				type: 'string',
				default: '2222',
			},
			ssh_user: {
				type: 'string',
				default: 'root',
			},
			ssh_password: {
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

render(<App />);
