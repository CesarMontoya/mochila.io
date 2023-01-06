import { Icon } from "../../utils/Icon";
import "../../styles/components/icons.scss";
import { DropdawnMenu } from "../dropdawnMenu/DropdawnMenu";
import { NavItem } from "../dropdawnMenu/NavItem";

type GradesActivitiesHeaderProps = {
	options: {
		type: string;
		title?: string;
		setter?: React.Dispatch<React.SetStateAction<boolean>>;
	};
};

export const GradesActivitiesHeader = (props: GradesActivitiesHeaderProps) => {

	const { type, title, setter } = props.options;

	const onClick = () => {
		setter && setter(true);
	};

	switch (type) {
		case "simple":
			return( <div className="grades--activities__activity-header">{title || ""}</div> );

		case 'addBtn':
			return (
				<div className="grades--activities__activity-header">
					<DropdawnMenu>
						<NavItem>
							<Icon svg="add" classes="icon addActivityBtn" />
						</NavItem>
					</DropdawnMenu>
				</div>
			);

		default:
			return(
				<div className="grades--activities__activity-header">{title || ""}</div>
			);
	}

	
};
