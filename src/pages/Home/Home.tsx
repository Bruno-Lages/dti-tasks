import React, {useState} from "react";

import { ContainerDiv } from "../../components/ContainerDiv/ContainerDiv";
import { DoneButton } from "../../components/DoneButton/DoneButton"
import { DateBar } from "../../components/DateBar/DateBar";
import { CustomDatePicker } from "../../components/CustomDatePicker/CustomDatePicker";

import { Main, TaskTitle, Footer, TextArea, CalendarButton, AddTaskButton } from "./HomeStyle"

import {BsCalendar4Event, BsCalendarPlus, BsArrowUpCircleFill} from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'


export function Home() {
    const title = "Begin to do app";
    const date = "28/06/2023"
    
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function handleChange(date: Date) {
        setIsOpen(!isOpen);
        setStartDate(date);
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };
    
    return(
        <Main>    
            
            <div>
                <DateBar date='28/06/2023'/>
                
                <ContainerDiv>
                    <>
                    <div>
                        <TaskTitle>{title}</TaskTitle>
                        <Footer>
                            <BsCalendar4Event/>
                            <p>{date}</p>
                        </Footer>
                    </div>
                    <DoneButton />
                    </>
                </ContainerDiv>
            </div>


            <div>
                {
                isOpen && 
                <CustomDatePicker startDate={startDate} handleChange={handleChange} />
                }        
                <ContainerDiv>
                    <>
                        <CalendarButton 
                        className="example-custom-input" 
                        aria-label="select data" 
                        onClick={handleClick}
                        type="button"
                        >
                            <BsCalendarPlus />
                        </CalendarButton>
                        <TextArea type="text" placeholder="type your task here..." aria-label="type your task here" />

                        <AddTaskButton aria-label="add task">
                            <BsArrowUpCircleFill />
                        </AddTaskButton>

                    </>
                </ContainerDiv>
            </div>

        
        </Main>
    )
}