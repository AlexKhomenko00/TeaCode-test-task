import { useState } from "react";

import { FilterProps } from "./Filter.props";

import { TextField } from "@material-ui/core";

const Filter = ({ onChangeFilter, className }: FilterProps) => {
	const [value, setValue] = useState("");

	const handleChangeFilter = (value: string) => {
		onChangeFilter(value);
		setValue(value);
	};

	return (
		<TextField
			id="contact-filter"
			label="Search for contact..."
			className={className}
			onChange={(e) => handleChangeFilter(e.target.value)}
			value={value}
		/>
	);
};

export default Filter;
