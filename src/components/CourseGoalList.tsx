import CourseGoal from "./CourseGoal"
import InfoBox from "./InfoBox.tsx"
import { CourseGoalData } from '../App.tsx'
import {type ReactNode} from 'react'

type CourseGoalListProps = {
  goals: CourseGoalData[];
  onDeleteGoal: (id: number) => void;
}

export default function CourseGoalList({goals, onDeleteGoal}: CourseGoalListProps) {
if (goals.length === 0 ) {
  return ( <InfoBox mode="hint">You have no goals yet</InfoBox> )
}

let warningBox: ReactNode;
if(goals.length >= 4) {
  warningBox = <InfoBox mode="warning" severity="high">You've got a lot of goals, lets refine and prioritise</InfoBox>
}


return (
  <>
    {warningBox}
    <ul>
      {
        goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title} id={goal.id} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
          )
        )
      }
    </ul>
  </>
  )
}