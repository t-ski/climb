import { parsePositional } from "./argument";

export function registerCommand(name: string, position: number = 0): Promise<void> {
	return new Promise((resolve) => {
		parsePositional(position).toString() === name && resolve();
	});
}
