import { GradesActivities, GradesStudents, GradesName, GradesAddStudent } from "./";

import '../styles/pages/grades.scss';
import { StudentsProvider } from "../../context/Students";
import { GroupsProvider } from "../../context/Groups";

export const Grades = () => {

	return (
		<StudentsProvider>
			<GroupsProvider>
				<div className="grades">
					<GradesName />
					<GradesStudents />
					<GradesActivities />
				</div>
			</GroupsProvider>
		</StudentsProvider>
	);
}
