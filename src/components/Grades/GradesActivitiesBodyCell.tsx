import { GradesActivitiesBodyCellIcon } from './GradesActivitiesBodyCellIcon';
import { GradesActivitiesBodyCellValue } from './GradesActivitiesBodyCellValue';
export const GradesActivitiesBodyCell = () => {
  return <div className="grades--activities__activity-body-cell">
    <GradesActivitiesBodyCellValue />
    <GradesActivitiesBodyCellIcon />
  </div>;
}
