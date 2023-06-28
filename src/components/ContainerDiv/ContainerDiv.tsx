import React from "react";
import { Container } from "./ContainerStyle";

export function ContainerDiv({children} : {children: React.ReactElement}) {
    return(
        <Container>
            {children}
        </Container>
    );   
}
