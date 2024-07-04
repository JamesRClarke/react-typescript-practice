import { type PropsWithChildren} from "react"

// type CourseGoalProps = {
//   title: string;
//   description: string;
//   children: ReactNode;
// }

type CourseGoalProps = PropsWithChildren<{
  title: string;
  id: number;
  onDelete: (id: number) => void;
}>

export default function CourseGoal({title, onDelete, id, children}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
        {/* <p>{description}</p> */}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  )
}

// Functional Component import with props
// const CourseGoal: FC<CourseGoalProps> = ({title, children}) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//         {/* <p>{description}</p> */}
//       </div>
//       <button>Delete</button>
//     </article>
//   )
// }

// export default CourseGoal;
