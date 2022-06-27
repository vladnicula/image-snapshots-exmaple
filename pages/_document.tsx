import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { getCssText, darkTheme } from '../src/stitches.config'


export default class Document extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <Head>
                    
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='corssorigin' />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital@0;1&display=swap" rel="stylesheet" />
                    <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
                </Head>
                <body>
                    <script dangerouslySetInnerHTML={{
                        __html: `document.body.classList.add(\'${darkTheme}\')`
                    }}></script>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}