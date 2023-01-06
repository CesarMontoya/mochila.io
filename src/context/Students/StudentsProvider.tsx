import { useEffect, useReducer } from "react";

import { studentsReducer } from "./StudentsReducer";
import { StudentsContext } from "./StudentsContext";
import { Student, StudentsState } from "../../interfaces";
import { getStudents } from "../../services";

interface props { 
        children: JSX.Element | JSX.Element[];
}

const initialState: StudentsState = {
	students: [],
    studentsQty: 0,
};

export const StudentsProvider = ({ children }: props) => {
	useEffect(() => {
		getStudents()
			.then((response) => {
				const data = response.data;

				const students: Student[] = data.users || [];
				const studentsQty: number = students.length || 0;
				const mountStudents = { students, studentsQty };

				studentDispatch({ type: "mountStudents", payload: mountStudents });
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const [studentsState, studentDispatch] = useReducer(studentsReducer, initialState);

	return <StudentsContext.Provider value={{ studentsState, studentDispatch }}>{children}</StudentsContext.Provider>;
};