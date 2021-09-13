import { IContact } from "interfaces/contact";

export interface ContactListProps {
	contacts: IContact[];
	onToggleContact?(id: number): void;
}
