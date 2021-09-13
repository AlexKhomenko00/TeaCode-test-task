import PacmanLoader from "react-spinners/PacmanLoader";

import s from "./MainLoader.module.css";

const MainLoder = (): JSX.Element => {
	return (
		<div className={s.wrapper}>
			<PacmanLoader size="30" color="#6f64f8" />
		</div>
	);
};

export default MainLoder;
