import { createInterface } from "readline";

import { ITypeSwitch, createTypeSwitch } from "./util";

const READLINE = createInterface({
	input: process.stdin,
	output: process.stdout
});

export function prompt(query: string): Promise<ITypeSwitch> {
	return new Promise((resolve) => {
		READLINE.question(query, (answer: string) => {
			resolve(createTypeSwitch(answer));
		});
	});
}
