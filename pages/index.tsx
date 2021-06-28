import styled from 'styled-components';
import Head from "next/head";
import { AnimatePresence, motion } from 'framer-motion';

import Nav from '../src/components/Nav';



function App() {

    return ( 
        <>
            <div>test</div>
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
