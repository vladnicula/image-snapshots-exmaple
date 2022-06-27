import { createStitches } from "@stitches/react"

export const { styled, css, createTheme, getCssText } = createStitches({
    theme: {
        colors: {
            gray500: 'hsl(206,10%,76%)',
            blue500: 'hsl(206,100%,50%)',
            purple500: 'hsl(252,78%,60%)',
            green500: 'hsl(148,60%,60%)',
            red500: 'hsl(352,100%,62%)',
            white: "#fff",
            black: "#000",

            primaryBG: "$colors$white"
        },
        space: {
            1: '5px',
            2: '10px',
            3: '15px',
        },
        fontSizes: {
            1: '12px',
            2: '13px',
            3: '15px',
        },
        fonts: {
            default: 'Roboto, apple-system, sans-serif',
            mono: 'Söhne Mono, menlo, monospace',
        },
    },
})

export const darkTheme = createTheme({
    colors: {
        primaryBG: "#000"
    },
    space: {},
    fonts: {},
})

