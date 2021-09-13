import { makeStyles } from "@material-ui/core";

import { ContactListProps } from "./ContactList.props";

import List from "@material-ui/core/List";
import ContactItem from "./ContactItem/ContactItem";

const ContactList = ({
	contacts,
	onToggleContact,
}: ContactListProps): JSX.Element => {
	const useStyles = makeStyles((theme) => ({
		root: {
			width: "100%",

			backgroundColor: theme.palette.background.paper,
		},
	}));

	const classes = useStyles();

	return (
		<List dense className={classes.root}>
			{contacts.map((contact) => {
				return (
					<ContactItem
						onToggleContact={onToggleContact}
						key={contact.id}
						{...contact}
					/>
				);
			})}
		</List>
	);
};

export default ContactList;
