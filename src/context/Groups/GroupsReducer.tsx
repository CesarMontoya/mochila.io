import { Groups } from "../../interfaces"

export type GroupsAction = { type: "mountGroups"; payload: Groups };

export const GroupsReducer = (state: Groups, action: GroupsAction): Groups => {
    switch (action.type) {
			case "mountGroups":

				return {
					...state,
					...action.payload
				};

			default:
				return { ...state };
		}
}
