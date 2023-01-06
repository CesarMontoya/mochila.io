import { useEffect, useReducer } from 'react';
import { Groups } from '../../interfaces';
import { getGroups } from "../../services";
import { GroupsContext } from "./GroupsContext"
import { GroupsReducer } from './GroupsReducer';

type props = {
	children: JSX.Element | JSX.Element[];
};

let initialState: Groups = {
	groups: [
		{
			groupId: 0,
			groupName: '',
			groupTabs: [{
				groupTabActivities: [{
					activityId: 0,
					activityName: '',
				}],
				groupTabEndAt: '',
				groupTabStartAt: '',
				groupTabId: 0,
				gruopTapName: '',
			}]
		},
	],
};


export const GroupsProvider = ({children}: props) => {

    useEffect(() => {

			getGroups()
				.then((response) => {

					const data = response.data;
                    groupsDispatch({ type: "mountGroups", payload: data });

				})
				.catch((error) => {
					console.log(error);
				});

		}, []);

    const [groupsState, groupsDispatch] = useReducer(GroupsReducer, initialState);

  return <GroupsContext.Provider value={{groupsState, groupsDispatch}}>{children}</GroupsContext.Provider>;
}
