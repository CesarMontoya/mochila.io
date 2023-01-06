import { Student, StudentsState } from "../../interfaces";

export type StudentsAction =
	| { type: "mountStudents"; payload: StudentsState }
	| { type: "addStudent"; payload: Student }
	| { type: "removeStudent"; payload: Student };

export const studentsReducer = (state: StudentsState, action: StudentsAction): StudentsState => {
	switch (action.type) {
		case "mountStudents":
			const { students, studentsQty } = action.payload;

			return {
				...state,
				students,
				studentsQty,
			};

		case "addStudent":
			return {
				...state,
				students: [...state.students, action.payload],
			};

		default:
			return state;
	}
};