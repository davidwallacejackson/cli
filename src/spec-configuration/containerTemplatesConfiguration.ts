export interface Template {
	id: string;
	version?: string;
	name?: string;
	description?: string;
	documentationURL?: string;
	licenseURL?: string;
	type?: string;
	fileCount?: number;
	featureIds?: string[];
	options?: Record<string, TemplateOption>;
	platforms?: string[];
	publisher?: string;
	keywords?: string[];
}

export type TemplateOption = {
	type: 'boolean';
	default: boolean;
	description?: string;
} | {
	type: 'string';
	default: boolean;
	enum?: string[];
	description?: string;
} | {
	type: 'string';
	default: boolean;
	proposals?: string[];
	description?: string;
};
