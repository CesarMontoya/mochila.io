import { useContext } from "react";
import { StudentsContext } from "../../context/Students";
import { GradesActivitiesBodyCell } from "./GradesActivitiesBodyCell";

export const GradesActivitiesBody = () => {

		const { studentsState } = useContext(StudentsContext);
		const { students } = studentsState;


  return (
		<div className="grades--activities__activity-body">

			{students.map((students) => {

				return <GradesActivitiesBodyCell key={students.userId + 5} />;

			})}

		</div>
	);
}
