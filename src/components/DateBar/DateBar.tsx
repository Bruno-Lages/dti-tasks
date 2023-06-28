"use client"

import { useState } from 'react';
import { Container, TitleContainer, ToggleButton, HorizontalLine } from './DateBarStyle';
import {SlArrowUp, SlArrowDown} from 'react-icons/sl';
import {BsCalendarWeek} from 'react-icons/bs';

export function DateBar({date} : {date: string}) {
    
    const [toggleShowDate, setToggleShowDate] = useState(true); 
    
    return(
        <>
            <Container>
                <TitleContainer>
                    <BsCalendarWeek />
                    <h2>
                        {date}
                    </h2>
                </TitleContainer>
                <ToggleButton 
                type='button' 
                aria-label={(toggleShowDate ? 'Hide' : 'Show') + ' tasks from ' + date} 
                onClick={() => setToggleShowDate(!toggleShowDate)}>
                    {toggleShowDate ? <SlArrowUp/> : <SlArrowDown />}
                </ToggleButton>
            </Container>
            {toggleShowDate ? '' : <HorizontalLine />}
        </>
    )
}