import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../config/axios';
import { toast } from 'react-toastify';

// task from API
interface ITask {
    _id: string;
    title: string;
    date: string;
}

// Tasks from store state
interface ITasksDates {
    date: string;
    task: Omit<ITask, "date">[];
}

// aux function to sort the Tasks object by date
function sortTasksByDate(tasks: ITasksDates[]): ITasksDates[] {
    const tasksArray = tasks.slice(); // Create a copy of the tasks array
  
    tasksArray.sort((a, b) => {
        const [dayA, monthA, yearA] = a.date.split("/").map(Number);
        const [dayB, monthB, yearB] = b.date.split("/").map(Number);
    
        // Compare years
        if (yearA !== yearB) {
            return yearA - yearB;
        }
    
        // Compare months
        if (monthA !== monthB) {
            return monthA - monthB;
        }
    
        // Compare days
        return dayA - dayB;
    });
  
    return tasksArray;
}

// action to get the tasks from the API
export const getTasks = createAsyncThunk<ITasksDates[], void>('tasks/getTasks', async () => {
        try{

            const tasks = await axios.get<ITask[]>('/tasks');
            
            // group tasks by dates
            const tasksGroupByDate : ITasksDates[] = Object.values(
                tasks.data.reduce((result : Record<string, ITasksDates>, item : ITask) => {
                    const { date, ...rest } = item;
                    
                    if (!result[date]) {
                        result[date] = { date, task: [] };
                    }
                    
                    result[date].task.push(rest);
                    
                    return result;
                }, {} as Record<string, ITasksDates>)
                );
                
                // sort the date groups
                const tasksSortedByDate = sortTasksByDate(tasksGroupByDate);
                
            // store them
            return tasksSortedByDate;
            
        } catch(error) {
            toast.error((error as Error).message + ' Please try again later.');
            throw new Error('An error occurred while getting the tasks.');
        }
            
});
