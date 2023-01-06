import { useContext, useState } from 'react';
import { StudentsContext } from "../../context/Students";
import { GradesAddStudent } from "./GradesAddStudent";
import { GradesAddStudentButton } from './GradesAddStudentButton';
import { GradesStudentRow } from "./GradesStudentRow"

export const GradesStudents = () => {

	const [addStudentButton, setAddStudentButton] = useState(false);

	const { studentsState } = useContext(StudentsContext);

  return (
		<div className="grades--students">
			{studentsState.students.map((student, index) => {
				return <GradesStudentRow key={student.userId} student={student} index={index} />;
			})}

			{addStudentButton ? (
				<GradesAddStudent setAddStudentButton={setAddStudentButton} />
			) : (
				<GradesAddStudentButton setAddStudentButton={setAddStudentButton} />
			)}
		</div>
	);
}
