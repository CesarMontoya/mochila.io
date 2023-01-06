import { GradesActivitiesBody } from "./GradesActivitiesBody";
import { GradesActivitiesHeader } from "./GradesActivitiesHeader";
import { useState } from 'react';

export const GradesAddActivity = () => {

	const [addActivityState, setAddActivityState] = useState(false);

	const type = addActivityState ? 'add' : 'addBtn';

  return (
		<div className="grades--activities__activity">
			<div className="grades--activities__activity">
				<GradesActivitiesHeader options={{ type, setter: setAddActivityState }} />
				{/* <GradesActivitiesBody /> */}
			</div>
		</div>
	);
}
