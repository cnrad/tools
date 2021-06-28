//thanks again github.com/alii @ uwu.red

import styled from 'styled-components';
import { useCallback, useEffect, useState } from "react";
import PageWrapper from "../src/components/PageWrapper";

function JsonTs() {

    const [inputValue, setInputValue] = useState("");
    const [result, setResult] = useState("");

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
    
    const copy = () => {
        void navigator.clipboard.writeText(result);
    };

    return (
        <PageWrapper>
            <Container>
                <TextArea placeholder="Paste JSON here..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <Result>{result.includes("export") ? result : "Waiting for JSON..."}</Result>
            </Container>
        </PageWrapper>
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
    overflow: scroll;
`

const TextArea = styled.textarea`
    width: 35%;
    height: 70%;
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
`

const Result = styled.pre`
    width: 35%;
    min-height: 70%;
    height: auto;
    background: #1a1a1a;
    font-family: 'Roboto Mono', monospace;
    padding: 1.5rem;
    margin: 1.5rem;
    border: solid 1px #555;
    border-radius: 0.5rem;
    color: #cfe8ff;
    background: #000;
`

export default JsonTs;
