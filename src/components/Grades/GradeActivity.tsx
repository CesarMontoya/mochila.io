import { GradesActivitiesBody } from "./GradesActivitiesBody";
import { GradesActivitiesHeader } from "./GradesActivitiesHeader";

type GradesActivitiesProps = {
	name: string;
}

export const GradeActivity = (props: GradesActivitiesProps) => {

	return (
		<div className="grades--activities__activity">
			<GradesActivitiesHeader options={{type: 'simple', title: props.name}} />
			<GradesActivitiesBody />
		</div>
	);
};
