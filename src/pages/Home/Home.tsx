import React, {useState, useEffect} from "react";

import axios from "../../config/axios";

import { toast } from 'react-toastify';

import {BsCalendar4Event, BsArrowUpCircleFill} from 'react-icons/bs'

import { ContainerDiv } from "../../components/ContainerDiv/ContainerDiv";
import { DoneButton } from "../../components/DoneButton/DoneButton"
import { TasksSection } from "../../components/TasksSection/TasksSection";
import { CustomDatePicker } from "../../components/CustomDatePicker/CustomDatePicker";

import { 
    Main, TasksDataContainer, TaskTitle, Footer, TextArea, AddTaskButton, NoTasksWarning, FormContainer, TasksContainer 
} from "./HomeStyle"

import { useDispatch, useSelector } from 'react-redux';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { getTasks } from '../../actions/getTaskAction';
import { RootState } from "../../store";

interface ITask {
    _id: string,
    title: string,
    date: string // Date string in the format "dd/mm/yyyy"
}

interface INewTask {
    title: string,
    date: string // Date string in the format "dd/mm/yyyy"
}

export function Home() {
    
    const [title, setTitle] = useState<string>('');
    
    const [chosenDate, setChosenDate] = useState<Date>(new Date());
    
    const tasks = useSelector((state : RootState)  => state.tasks.tasks)

    const dispatch = useDispatch();

    function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setTitle(e.target.value);
    }
    
    function handleDateChange(date: Date) {
        setChosenDate(date);
    };

    const handleFetchData = () => {
        dispatch(getTasks() as unknown as AnyAction);
    };
    
    async function postTask(task : INewTask) {
        try{
            await axios.post('/tasks/new', task);
        } catch(error) {
            throw new Error('An error occurred while creating the new task.');
        }
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        try {

            e.preventDefault();
            
            if (title.trim() === '') return;
            
            const task = {'title': title, 'date': chosenDate.toLocaleDateString('en-GB')};
            await postTask(task);
            
            setChosenDate(new Date());
            setTitle('');
            handleFetchData();

        } catch(error) {
            toast.error((error as Error).message + ' Please try again later.');
        }
        
    };
    
    async function deleteTask(id : string) {
        try{
            await axios.delete('/tasks/done/' + id);
        } catch(error) {
            throw new Error('An error occurred while deleting the task.');
        }
    }

    async function handleDoneButton(id : string) {
        try {
            await deleteTask(id);
            handleFetchData();
        } catch(error) {
            toast.error((error as Error).message + ' Please try again later.');
        }
    }
    
    useEffect(() => {
        handleFetchData();
    }, [dispatch]);

    return(
        <Main>    
            
            <TasksContainer>
                
                {
                    tasks.length == 0 ?
                    (<NoTasksWarning>
                        <h1>Nothing here</h1>
                        <p>add some tasks in the tasks bar</p>
                    </NoTasksWarning>)
                    : null
                }
                
                {
                    tasks.map((element) => {
                        return (
                            <React.Fragment key={element.date}>
                                <TasksSection date={element.date}>
                                {
                                    element.task.map((tasks) => {
                                        return (
                                            <ContainerDiv key={tasks._id}>
                                                <>
                                                    <TasksDataContainer>
                                                        <TaskTitle>{tasks.title}</TaskTitle>
                                                        <Footer>
                                                            <BsCalendar4Event/>
                                                            <p>{element.date}</p>
                                                        </Footer>
                                                    </TasksDataContainer>
                                                    
                                                    <DoneButton onClick={() => handleDoneButton(tasks._id)} />
                                                </>
                                            </ContainerDiv>
                                        )
                                    })   
                                }
                                </TasksSection>
                            </React.Fragment>
                        )
                    })
                }

            </TasksContainer>


            <div>
       
                <ContainerDiv>
                    <FormContainer onSubmit={handleSubmit}>
                        <CustomDatePicker startDate={chosenDate} handleChange={handleDateChange} ariaLabel="select data" />
                        
                        <TextArea 
                        type="text" 
                        placeholder="type your task here..." 
                        aria-label="type your task here" 
                        value={title}
                        onChange={handleTitleChange}
                        required
                        />

                        <AddTaskButton aria-label="add task" type="submit" isFormValid={title.trim() !== ''}>
                            <BsArrowUpCircleFill />
                        </AddTaskButton>

                    </FormContainer>
                </ContainerDiv>
            </div>

        
        </Main>
    )
}