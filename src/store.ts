import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './reducers/taskReducer';

interface ITask {
    _id: string;
    title: string;
    date: string;
  }
  
interface ITasksDates {
    date: string;
    task: Omit<ITask, "date">[];
}
  
  export interface ITaskState {
      tasks: ITasksDates[];
  }

export interface RootState {
    tasks: ITaskState
}

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
});

export default store;
