import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

import { ContactItemProps } from "./ContactItem.props";
import { Checkbox } from "@material-ui/core";

const ContactItem = ({
	id,
	first_name,
	last_name,
	avatar,
	email,
	checked,

	onToggleContact,
}: ContactItemProps): JSX.Element => {
	const labelId = `checkbox-list-secondary-label-${id}`;

	return (
		<ListItem
			key={id}
			button
			data-testid="contactItem"
			selected={checked}
			onClick={() => onToggleContact && onToggleContact(id)}
		>
			<ListItemAvatar>
				<Avatar alt={`Avatar of${first_name} ${last_name}`} src={avatar} />
			</ListItemAvatar>
			<ListItemText
				id={labelId}
				primary={`${first_name} ${last_name}`}
				secondary={email}
			/>
			<Checkbox checked={checked} name="checkedB" color="primary" />
		</ListItem>
	);
};

export default ContactItem;
