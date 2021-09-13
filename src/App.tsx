import { useEffect, useState } from "react";

import { getContactList } from "api/contact";
import { sortContactsByLastName } from "helpers";
import { PER_PAGE_COUNT } from "./constants";

import { IContact } from "interfaces/contact";

import { Pagination } from "@material-ui/lab";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";

import s from "./App.module.css";
import MainLoder from "components/MainLoader/MainLoder";

const App = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [contacts, setContacts] = useState<IContact[]>([]);

	useEffect(() => {
		const fetchAndSetContacts = async () => {
			const fetchedContacts = await getContactList();

			const sortedContacts = sortContactsByLastName(fetchedContacts);

			setContacts(
				sortedContacts.map((contact) => ({ ...contact, checked: false }))
			);
			setIsLoading(false);
		};

		fetchAndSetContacts();
	}, []);

	const handleToggleContact = (id: number) => {
		setContacts((prevContacts) =>
			prevContacts.map((c) => (c.id === id ? { ...c, checked: !c.checked } : c))
		);
		console.log("Checked contact ID:", id);
	};

	const [page, setPage] = useState(0);

	const handleChangePage = (
		event: React.ChangeEvent<unknown>,
		value: number
	) => {
		setPage(value);
	};

	const [filterValue, setFilterValue] = useState("");

	const filteredContacts = contacts.filter(
		(contact) =>
			contact.first_name.toLowerCase().includes(filterValue.toLowerCase()) ||
			contact.last_name.toLowerCase().includes(filterValue.toLowerCase())
	);

	if (isLoading) return <MainLoder />;

	return (
		<div className={s.app}>
			<Filter onChangeFilter={setFilterValue} className={s.filter} />

			<Pagination
				className={s.pagination}
				count={filteredContacts.length / PER_PAGE_COUNT}
				onChange={handleChangePage}
				page={page}
			/>

			<ContactList
				contacts={filteredContacts.splice(page, PER_PAGE_COUNT)}
				onToggleContact={handleToggleContact}
			/>
		</div>
	);
};

export default App;
