import { GradeActivity } from "./GradeActivity";
import { useContext } from 'react';
import { GroupsContext } from "../../context/Groups";
import { GradesAddActivity } from "./GradesAddActivity";

export const GradesActivities = () => {

  const { groupsState } = useContext(GroupsContext);

  // Más adelante, el grupo no es el que esté en la posición 0, sino que hay que traerlo por id
  const activities = groupsState.groups[0].groupTabs[0].groupTabActivities;

  return (
		<div className="grades--activities">
			{activities.map((activity) => {
				const { activityName, activityId } = activity;
				return <GradeActivity key={activityId} name={activityName} />;
			})}

			<GradesAddActivity />
		</div>
	);
}
