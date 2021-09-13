import axios from "axios";

import { BASE_URL } from "../constants";

import { IFetchedContact } from "../interfaces/contact";

export const getContactList = async (): Promise<IFetchedContact[]> => {
	try {
		const { data } = await axios.get<IFetchedContact[]>(`${BASE_URL}/users.json`);
		return data;
	} catch (e) {
		console.log(e);
		throw e;
	}
};
