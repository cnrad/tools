import styled from 'styled-components';
import Head from "next/head";
import { motion } from 'framer-motion';

export default function App() {

    return ( 
        <>
            <Head>
                <title>cnrad toolkit</title>
            </Head>
            <div>test</div>
        </>
    );
}

const Entire = styled(motion.div)`
    position: fixed;
    width: 100%;
    height: 100%;
    inset: 0;
    background: #18181b;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
