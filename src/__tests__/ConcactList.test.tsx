import { render } from "@testing-library/react";

import ContactList from "components/ContactList/ContactList";
import { ContactListProps } from "components/ContactList/ContactList.props";

const testData = [
	{
		id: 681,
		first_name: "Amabel",
		last_name: "Aarons",
		email: "aaaronsiw@imageshack.us",
		gender: "Female",
		avatar: "https://robohash.org/magninemoet.png?size=50x50&set=set1",
		checked: true,
	},
	{
		id: 801,
		first_name: "Mikol",
		last_name: "Abbs",
		email: "mabbsm8@skyrock.com",
		gender: "Male",
		avatar: "https://robohash.org/placeatmodioptio.png?size=50x50&set=set1",
		checked: false,
	},
];

function renderContactList(props: Partial<ContactListProps> = {}) {
	const defaultProps: ContactListProps = {
		contacts: [],
	};
	return render(<ContactList {...defaultProps} {...props} />);
}

describe("<ContactList />", () => {
	test(`should display a list with ${testData.length} rows`, async () => {
		const { findAllByTestId } = renderContactList({ contacts: testData });

		const tableRows = await findAllByTestId("contactItem");

		expect(tableRows.length).toEqual(testData.length);
	});
});
