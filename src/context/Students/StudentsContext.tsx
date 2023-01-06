import { createContext } from "react";
import { StudentsState } from '../../interfaces';
import { StudentsAction } from "./StudentsReducer";

export type StudentsContextProps = {
	studentsState: StudentsState;
	studentDispatch: React.Dispatch<StudentsAction>;
};

export const StudentsContext = createContext<StudentsContextProps>({} as StudentsContextProps);