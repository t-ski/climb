export interface ITypeSwitch {
	toString: () => string;
	toNumber: () => number;
	toBoolean: () => boolean;
}

export function createTypeSwitch(strData: string | undefined): ITypeSwitch {
	return {
		toString: () => strData.toString(),
		toNumber: () => parseFloat(strData) ?? 0,
		toBoolean: () => strData === "true"
	};
}
