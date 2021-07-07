//thanks again github.com/alii @ uwu.red

import { motion } from 'framer-motion';
import Head from 'next/head';
import styled from 'styled-components';
import { useCallback, useEffect, useState } from "react";
import PageWrapper from "../src/components/PageWrapper";

export default function JsonTs() {

    const [inputValue, setInputValue] = useState("");
    const [result, setResult] = useState("");
    const [copyState, setCopyState] = useState("Copy");

    const transformer = useCallback(async ({ inputValue }) => {
        const { run: compile } = await import("json_typegen_wasm");
    
        try {
            return compile(
                "Root",
                inputValue,
                JSON.stringify({
                    output_mode: "typescript",
                })
            );
        } catch (e) {
            return e.toString();
        }
    }, []);
    
    useEffect(() => {
        transformer({ inputValue }).then(setResult);
        console.log(result);
    }, [inputValue]);
    
    const CopyVal = () => {
        navigator.clipboard.writeText(result);
        setCopyState("Copied!");
        setTimeout(() => setCopyState("Copy"), 1500);
    };

    return (
        <>
            <Head>
                <title>JSON to Type Object</title>
            </Head>
            <PageWrapper>
                <Container>
                    <TextArea placeholder="Paste JSON here..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    <Col>
                        <Result>{result.includes("export") ? result : "Waiting for JSON..."}</Result>
                        <Copy whileHover={{color: "#fff", cursor: "pointer", scale: 0.9}} transition={{duration: 0.15, ease: "easeInOut"}} onClick={CopyVal}>{copyState}</Copy>
                    </Col>
                </Container>
            </PageWrapper>
        </>
    );
}

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    inset: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: top;
    justify-content: center;
    padding: 2rem;
`

const TextArea = styled.textarea`
    width: 35%;
    height: 80%;
    min-height: 70%;
    background: #1a1a1a;
    font-family: 'Roboto Mono', monospace;
    padding: 1.5rem;
    margin: 1.5rem;
    resize: vertical;
    border: solid 1px #555;
    border-radius: 0.5rem;
    color: #cfe8ff;
    background: #000;
    scrollbar-width: thin;

    font-size: 1rem;
`

const Col = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1.5rem;
    margin: 0 1.5rem;
    width: 35%;
    align-items: center;
`

const Result = styled.pre`
    width: 100%;
    min-height: 70%;
    height: 80%;
    background: #1a1a1a;
    font-family: 'Roboto Mono', monospace;
    padding: 1.5rem;
    margin: 1.5rem;
    border: solid 1px #555;
    border-radius: 0.5rem;
    color: #cfe8ff;
    background: #000;
    overflow-y: scroll;
    scrollbar-width: thin;
    font-size: 1rem;
`

const Copy = styled(motion.button)`
    width: 6rem;
    height: 2.5rem;
    font-size: 1.2rem;
    color: #bbb;
    background: rgba(150, 150, 150, 0.2);
    border: none;
    border-radius: 0.5rem;
`
