import type { AppProps } from 'next/app';
import styled from 'styled-components';
import Head from "next/head";
import { AnimatePresence, motion } from 'framer-motion';

import Nav from '../src/components/Nav';

const MyApp = ({ Component, pageProps, router }: AppProps) => {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"  />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" /> 
            </Head>

            <Entire>
                <Nav />

                <AnimatePresence exitBeforeEnter>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Entire>
        </>
    )
}

const Entire = styled(motion.div)`
    position: fixed;
    width: 100%;
    height: 100%;
    inset: 0;
    background: #121214;

    display: flex;
    flex-direction: row;
`

export default MyApp;