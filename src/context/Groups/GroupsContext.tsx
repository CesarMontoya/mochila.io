import { createContext } from "react";
import { Groups } from "../../interfaces";
import { GroupsAction } from "./GroupsReducer";

export type GroupsContextProps = {
	groupsState: Groups;
	groupsDispatch: React.Dispatch<GroupsAction>
};

export const GroupsContext = createContext<GroupsContextProps>({} as GroupsContextProps);