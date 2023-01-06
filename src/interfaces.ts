export interface Student {
	userId?: number;
	firstname: string;
	secondname: string;
	lastnameOne: string;
	lastnameTwo: string;
}

export interface StudentsState {
    students: Student[];
	studentsQty: number;
}

export interface Groups {
	groups: Group[];
}

export interface Group {
	groupId: number;
	groupName: string;
	groupTabs: Tap[];
}

export interface Tap {
	groupTabId: number;
	gruopTapName: string;
	groupTabStartAt: string;
	groupTabEndAt: string;
	groupTabActivities: Activity[];
}

export interface Activity {
	activityId: number;
	activityName: string;
}