import axios from "axios";

import { BASE_URL } from "../constants";

import { IContact } from "../interfaces/contact";

export const getContactList = async (): Promise<IContact[]> => {
	try {
		const { data } = await axios.get<IContact[]>(`${BASE_URL}/users.json`);
		return data;
	} catch (e) {
		console.log(e);
		throw e;
	}
};
