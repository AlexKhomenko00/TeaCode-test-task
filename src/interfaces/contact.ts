export interface IFetchedContact {
	id: number;
	first_name: string;
	last_name: string;
	email: string;
	gender: string;
	avatar: string;
}

export interface IContact extends IFetchedContact {
	checked: boolean;
}
