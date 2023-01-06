import { Dispatch } from "react";
import { Icon } from "../../utils/Icon";

interface AddStudentButtonProps {

	setAddStudentButton: Dispatch<React.SetStateAction<boolean>>;
}


export const GradesAddStudentButton = ({ setAddStudentButton }: AddStudentButtonProps) => {

    const onClick = () => {
        setAddStudentButton(true);
    }

	return (
		<div className="addStudentBtn" onClick={onClick}>
			<Icon svg="add" classes="icon" /> Add Student
		</div>
	);
};
