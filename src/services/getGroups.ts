import axios from "axios";
import { Groups } from "../interfaces";

type GetGroupsResponse = {
	data: Groups[];
};

export const getGroups = async () => {
    const groupsUrl = "http://localhost:3001/groups";

    return await axios
		.get<GetGroupsResponse>(groupsUrl)
		.then((response) => response)
		.catch((error) => error.message);
}