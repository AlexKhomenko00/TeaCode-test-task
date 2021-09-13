import { IFetchedContact } from "interfaces/contact";

export const sortContactsByLastName = (contacts: IFetchedContact[]) =>
	contacts.sort((a: IFetchedContact, b: IFetchedContact): number => {
		const departmentNameA = a.last_name ? a.last_name : "";
		const departmentNameB = b.last_name ? b.last_name : "";

		return departmentNameA.localeCompare(departmentNameB);
	});
