import { ReactNode, useState } from 'react';

import { Container, TitleContainer, ToggleButton, HorizontalLine } from './TasksSectionStyle';

import {SlArrowUp, SlArrowDown} from 'react-icons/sl';
import {BsCalendarWeek} from 'react-icons/bs';

type Props = {
    children: ReactNode;
    date: string;
}

export function TasksSection({date, children} : Props) {
    
    const [toggleShowDate, setToggleShowDate] = useState(true); 
    
    return(
        <>
            <Container>
                <TitleContainer>
                    <BsCalendarWeek />
                    <h1>{date}</h1>
                </TitleContainer>
                
                {/* toggke bar */}
                <ToggleButton 
                type='button' 
                aria-label={(toggleShowDate ? 'Hide' : 'Show') + ' tasks from ' + date} 
                onClick={() => setToggleShowDate(!toggleShowDate)}
                >
                    {toggleShowDate ? <SlArrowUp/> : <SlArrowDown />}
                </ToggleButton>
            
            </Container>
                
                {toggleShowDate && children}
                
            <HorizontalLine />
        </>
    )
}