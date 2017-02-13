import styled from 'styled-components';
import Head from "next/head";
import { motion } from 'framer-motion';

export default function App() {

    return ( 
        <>
            <Head>
                <title>cnrad toolkit</title>
            </Head>
            <Entire>
                <h1 style={{color: "#fff"}}>here are some useful tools, ill make a home page later</h1>
            </Entire>
        </>
    );
}

const Entire = styled(motion.div)`
    position: absolute;
    width: calc(100% - 17rem);
    height: 100%;
    left: 17rem;
    background: #18181b;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
