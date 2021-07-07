import styled from 'styled-components';
import Head from "next/head";
import { motion } from 'framer-motion';
import PageWrapper from "../src/components/PageWrapper";

export default function App() {

    return ( 
        <>
            <Head>
                <title>cnrad toolkit</title>
            </Head>
            <PageWrapper>
                <Main>
                    <Large>
                        <Cnrad>cnrad</Cnrad> toolkit
                    </Large>
                    useful tools for the average developer
                </Main>
                <Footer>Inspired by&nbsp;
                    <motion.a 
                        href="https://uwu.red" 
                        style={{color: "#cd2f2f", borderBottom: "solid 1px rgba(198, 0, 0, 0)", textDecoration: "none"}} 
                        whileHover={{borderBottom: "solid 1px rgba(198, 0, 0, 1)"}} 
                        transition={{duration: 0.2, ease: 'easeInOut'}}
                    >uwu.red</motion.a>
                </Footer>
            </PageWrapper>
        </>
    );
}

const Main = styled.div`
    color: #fff;
    font-family: -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif;
    text-align: center;
    font-size: 1.5rem;
`

const Large = styled.div`
    font-size: 4rem;
    width: 100%;
`

const Cnrad = styled(motion.span)`
    background: linear-gradient(270deg, #c700ff, #46a0ff);
    background-clip: text;
    -webkit-background-clip: text;
    color: rgba(0, 0, 0, 0);
    font-weight: 700;
    user-select: none;
`

const Footer = styled.footer`
    position: absolute;
    color: #999;
    font-size: 1rem;
    font-family: -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif;
    text-align: center;
    width: 100%;

    bottom: 25px;
`