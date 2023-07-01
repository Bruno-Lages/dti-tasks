import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getTasks } from '../actions/getTaskAction'

interface ITask {
  _id: string;
  title: string;
  date: string;
}

interface ITasksDates {
    date: string;
    task: Omit<ITask, "date">[];
}

interface ITaskState {
    tasks: ITasksDates[];
}

const initialTaskState: ITaskState = {
    tasks: [],
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: initialTaskState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTasks.fulfilled, (state, action: PayloadAction<ITasksDates[]>) => {
                state.tasks = action.payload || [];
            })
      },
});

export default tasksSlice.reducer;
