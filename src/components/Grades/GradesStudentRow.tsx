import { Student } from "../../interfaces";

type StudentRowProps = {
	student: Student;
	index: number;
}

export const GradesStudentRow = ({student, index}: StudentRowProps) => {
	return (
		<div className="grades--students-row">
			<div className="grades--students-rowrow__photo"></div>
			<div className="grades--students-row__name">
				{index + 1}. {student.firstname} {student.secondname} {student.lastnameOne} {student.lastnameTwo}
			</div>
		</div>
	);
};
