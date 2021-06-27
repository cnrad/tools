import styled from 'styled-components';
import Head from "next/head";
import { AnimatePresence, motion } from 'framer-motion';
import {Switch, Route, useLocation} from 'react-router-dom';

import Nav from '../src/components/Nav';
import jsonTs from './tools/jsonTs';
import deviceMockups from './tools/deviceMockups';

function App() {

    const location = useLocation();

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
                    <Switch location={location} key={location.pathname}>
                        <Route exact path="/json-ts" component={jsonTs} />
                        <Route exact path="/mockup" component={deviceMockups} />
                    </Switch>
                </AnimatePresence>
            </Entire>
        </>
    );
}

export default App;

const Entire = styled(motion.div)`
    position: fixed;
    width: 100%;
    height: 100%;
    inset: 0;
    background: #18181b;

    display: flex;
    flex-direction: row;
`
