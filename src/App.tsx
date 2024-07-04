import { useState } from 'react'
import './App.css'
import CourseGoalList from './components/CourseGoalList.tsx'
import NewGoal from './components/NewGoal/NewGoal.tsx'
import Header from './components/Header.tsx';
import goalsImage from './assets/goals.jpg';

export type CourseGoalData = {
  title: string;
  description: string;
  id: number;
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoalData[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals(prevGoals => {
      const newGoal: CourseGoalData = {
        id: Math.random(),
        title: goal,
        description: summary
      };

      return [...prevGoals, newGoal]
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals(prevGoals =>  prevGoals.filter((goal) => goal.id !== id ))
  }

  return (
    <main>
      <Header image={{src: goalsImage, alt: 'A list of goals'}}>
        <h1>Your Course Goals</h1>
      </Header>

      <NewGoal onAddGoal={handleAddGoal}/>
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}/>
    </main>
  )
}
