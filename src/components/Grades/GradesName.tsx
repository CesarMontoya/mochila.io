import { useContext } from "react";
import { GroupsContext } from "../../context/Groups";

export const GradesName = () => {

	const { groupsState } = useContext(GroupsContext);

	// Se debe esperar hasta que el reducer monte la información de la base de datos
	const groups = groupsState.groups;
	const groupName = groups[0].groupName;

  return (
		<div className="grades--name">
			<h2 className="bold">{groupName}</h2>
		</div>
	);
}
