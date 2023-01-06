import '../../styles/components/form.scss';
import "../../styles/components/button.scss";
import { inputAnimated } from '../../utils';
import { ChangeEvent, Dispatch, FormEvent, MouseEvent, useContext, useState } from 'react';
import { StudentsContext } from '../../context/Students';

interface AddStudentProps {
	setAddStudentButton: Dispatch<React.SetStateAction<boolean>>;
}

export const GradesAddStudent = ({ setAddStudentButton }: AddStudentProps) => {
	const { studentDispatch } = useContext(StudentsContext);

	const [addStudentState, setAddStudentState] = useState({
		firstname: "",
		secondname: "",
		lastnameOne: "",
		lastnameTwo: "",
	});

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setAddStudentState((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		//console.log(addStudentState);
		studentDispatch({ type: "addStudent", payload: addStudentState });
        setAddStudentButton(false);
	};

    const onClick = () => {
        setAddStudentButton(false);
    };

	return (
		<div className="grades--addStudent">
			<form onSubmit={(e) => onSubmit(e)}>
				<div className="input-container outline">
					<label htmlFor="firstname" className="sr-only"></label>
					<input
						type="text"
						id="firstname"
						placeholder="First Name"
						name="firstname"
						onChange={onChange}
						onFocus={(e) => inputAnimated(e, "in")}
						onBlur={(e) => inputAnimated(e, "out")}
					/>
				</div>

				<div className="input-container outline">
					<label htmlFor="midName" className="sr-only"></label>
					<input
						type="text"
						id="midName"
						placeholder="Mid Name"
						name="secondname"
						onChange={onChange}
						onFocus={(e) => inputAnimated(e, "in")}
						onBlur={(e) => inputAnimated(e, "out")}
					/>
				</div>

				<div className="input-container outline">
					<label htmlFor="lastNameOne" className="sr-only"></label>
					<input
						type="text"
						id="lastNameOne"
						placeholder="Last Name One"
						name="lastnameOne"
						onChange={onChange}
						onFocus={(e) => inputAnimated(e, "in")}
						onBlur={(e) => inputAnimated(e, "out")}
					/>
				</div>

				<div className="input-container outline">
					<label htmlFor="lastNameTwo" className="sr-only"></label>
					<input
						type="text"
						id="lastNameTwo"
						placeholder="Last Name Two"
						name="lastnameTwo"
						onChange={onChange}
						onFocus={(e) => inputAnimated(e, "in")}
						onBlur={(e) => inputAnimated(e, "out")}
					/>
				</div>

				<button type="submit" className="btn btn-main btn-addStudent">
					Add
				</button>
				<button type="button" className="btn btn-danger btn-cancelStudent" onClick={onClick}>
					Cancel
				</button>
			</form>
		</div>
	);
};
