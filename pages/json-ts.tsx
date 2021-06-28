//thanks again github.com/alii @ uwu.red

import styled from 'styled-components';
import { useCallback, useEffect, useState } from "react";
import PageWrapper from "../src/components/PageWrapper";

function JsonTs() {

    const [inputValue, setInputValue] = useState("");
    const [result, setResult] = useState("");

    const transformer = useCallback(async ({ value }) => {
        const { run: compile } = await import("json_typegen_wasm");

        try {
            return compile(
               "Root",
                value,
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
                <Result>{result}</Result>
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
    align-items: center;
    justify-content: center;
    padding: 2rem;

`

const TextArea = styled.textarea`
    width: 45%;
    min-height: 70%;
    background: #1a1a1a;
    color: #fff;
    font-family: 'Roboto Mono', monospace;
    padding: 1rem;
    margin-right: 3rem;

    border: solid 1px #555;
    border-radius: 1rem;
`

const Result = styled.pre`
    width: 45%;
    min-height: 70%;
    background: #1a1a1a;
    color: #fff;
    font-family: 'Roboto Mono', monospace;
    padding: 1rem;
    border: solid 1px #555;
    border-radius: 1rem;
`

export default JsonTs;
