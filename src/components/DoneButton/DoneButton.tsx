import { ButtonHTMLAttributes } from "react"
import { Button } from "./DoneButtonStyle"

export function DoneButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
    return(
        <Button type="button" aria-label="mark as done" {...props}/>
    )
}