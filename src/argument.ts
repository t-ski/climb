import { ITypeSwitch, createTypeSwitch } from "./util";

const ARGS: string[] = process.argv.slice(2);

function searchIndex(name: string, shorthand?: string): number {
	return Math.max(ARGS.indexOf(name.replace(/^(--)?/, "--")), ARGS.indexOf(shorthand.replace(/^(-)?/, "-")));
}

export function parseFlag(name: string, shorthand?: string): boolean {
	return !!~searchIndex(name, shorthand);
}

export function parseOption(name: string, shorthand?: string): ITypeSwitch | undefined {
	const index: number = searchIndex(name, shorthand);

	if (!~searchIndex) return undefined;

	return createTypeSwitch(ARGS[index + 1]);
}

export function parsePositional(position: number): ITypeSwitch | undefined {
	return createTypeSwitch(ARGS[position]);
}
