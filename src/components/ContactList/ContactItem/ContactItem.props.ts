import { IContact } from "interfaces/contact";

export interface ContactItemProps extends IContact {
	onClick?(id: number): void;
	onToggleContact?(id: number): void;
	testId?: string;
}
