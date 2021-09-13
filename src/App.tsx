import { useEffect, useState } from "react";

import { getContactList } from "api/contact";

import { IContact } from "interfaces/contact";

import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";

import s from "./App.module.css";

const App = () => {
	const [contacts, setContacts] = useState<IContact[]>([]);

	useEffect(() => {
		const fetchAndSetContacts = async () => {
			const fetchedContacts = await getContactList();

			setContacts(
				fetchedContacts.map((contact) => ({ ...contact, checked: false }))
			);
		};

		fetchAndSetContacts();
	}, []);

	const [filterValue, setFilterValue] = useState("");

	const filteredContacts = contacts.filter(
		(contact) =>
			contact.first_name.toLowerCase().includes(filterValue.toLowerCase()) ||
			contact.last_name.toLowerCase().includes(filterValue.toLowerCase())
	);

	return (
		<div className={s.app}>
			<Filter onChangeFilter={setFilterValue} className={s.filter} />

			<ContactList contacts={filteredContacts} />
		</div>
	);
};

export default App;
