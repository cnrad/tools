import styled from 'styled-components';
import Head from "next/head";
import { motion } from 'framer-motion';
import PageWrapper from "../src/components/PageWrapper";

export default function App() {

    const containerAnim = {
        init: {
            opacity: 1
        },
        load: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    }

    const childAnim = {
        init: {
            opacity: 0,
            y: 15
        },
        load: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        }
    }

    return ( 
        <>
            <Head>
                <title>cnrad toolkit</title>
            </Head>
            <PageWrapper>
                <Main initial="init" animate="load" variants={containerAnim}>
                    <Large variants={childAnim}>
                        tools.<Cnrad>cnrad</Cnrad>.dev
                    </Large>
                    <Desc variants={childAnim}>useful tools for the average developer</Desc>
                    <Demo src="/demo.png" variants={childAnim} />
                </Main>
                <Footer initial="init" animate="load" variants={containerAnim}>
                    Inspired by&nbsp;
                    <motion.a 
                        href="https://uwu.red" 
                        target="blank"
                        style={{color: "#cd2f2f", borderBottom: "solid 1px rgba(198, 0, 0, 0)", textDecoration: "none"}} 
                        whileHover={{borderBottom: "solid 1px rgba(198, 0, 0, 1)"}} 
                        transition={{duration: 0.2, ease: 'easeInOut'}}
                        variants={childAnim}
                    >uwu.red</motion.a>
                    {" "} &#8226; {" "} View the&nbsp;
                    <motion.a 
                        href="https://github.com/cnrad/tools" 
                        target="blank"
                        style={{color: "#414fce", borderBottom: "solid 1px rgba(65, 79, 206, 0)", textDecoration: "none"}} 
                        whileHover={{borderBottom: "solid 1px rgba(65, 79, 206, 1)"}} 
                        transition={{duration: 0.2, ease: 'easeInOut'}}
                        variants={childAnim}
                    >source code</motion.a>
                </Footer>
            </PageWrapper>
        </>
    );
}

const Main = styled(motion.div)`
    color: #fff;
    font-family: -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif;
    text-align: center;
    font-size: 1.5rem;
    margin-top: -25px;
`

const Large = styled(motion.div)`
    font-size: 4rem;
    width: 100%;
    margin-bottom: -10px;
`

const Desc = styled(motion.p)`
    font-size: 1.5rem;
    width: 100%;
    color: #ccc;
    margin-bottom: 50px;
`

const Cnrad = styled(motion.span)`
    background: linear-gradient(270deg, #c700ff, #46a0ff);
    background-clip: text;
    -webkit-background-clip: text;
    color: rgba(0, 0, 0, 0);
    font-weight: 700;
    user-select: none;
`

const Demo = styled(motion.img)`
    width: 700px;
    height: 385px;
`

const Footer = styled(motion.footer)`
    position: absolute;
    color: #999;
    font-size: 1rem;
    font-family: -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif;
    text-align: center;
    width: 100%;

    bottom: 35px;
`