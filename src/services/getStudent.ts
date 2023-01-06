import axios from "axios";
import { Student } from "../interfaces";

type GetStudentsResponse = {
    data: Student[];
}

export const getStudents = async () => {
	const studentsUrl = "http://localhost:3001/students";
	
	return await axios
		.get<GetStudentsResponse>(studentsUrl)
		.then((response) => response)
		.catch((error) => error.message);
};