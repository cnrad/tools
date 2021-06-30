//thanks again github.com/alii @ uwu.red

import styled from 'styled-components';
import { useState } from "react";
import Head from 'next/head';
import PageWrapper from "../src/components/PageWrapper";

export default function JsonFormat() {

    const [inputValue, setInputValue] = useState("");

    function Value(props: { value: string }) {
        if (props.value === "") {
          return <Result>No Content</Result>;
        }
      
        try {
          return <Result>{JSON.stringify(JSON.parse(props.value), null, 4)}</Result>;
        } catch (e) {
          return (
            <>
              <Result>Invalid JSON:<br/>{e.message}</Result>
            </>
          );
        }
    }
    

    return (
        <>
            <Head>
                <title>JSON Formatter</title>
            </Head>
            <PageWrapper>
                <Container>
                    <TextArea placeholder="Paste JSON here..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    <Col>
                        <Value value={inputValue} />
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
`
