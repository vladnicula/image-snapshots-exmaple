import { styled } from "../stitches.config"

export const ButtonRoot = styled('button', {
    all: 'unset',
    fontFamily: "$default",
    variants: {
        disabled: {
            true: {
                backgroundColor: "$gray500",
            }
        },
        type: {
            primary: {
                backgroundColor: "$primaryBG",
            },
            secondary: {
                backgroundColor: "$white",
            }
        }
    },

    defaultVariants: {
        type: "secondary"
    }
})


export interface ButtonProps {
    type?: "primary" | "secondary"
    disabled?: boolean
    label: string
}

export const Button = (props: ButtonProps) => {
    return (
        <ButtonRoot disabled={props.disabled} type={props.type}>
            {props.label}
        </ButtonRoot>
    )
}
