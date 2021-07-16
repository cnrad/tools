import styled from 'styled-components';
import Head from 'next/head';
import PageWrapper from "../src/components/PageWrapper";

export default function SnowflakeDate() {

    return (
        <>
            <Head>
                <title>🛠️ Snowflake to Date</title>
            </Head>
            <PageWrapper overflowY="scroll">
                <Text>
                    Snowflake to Date (discord and unix)
                </Text>
            </PageWrapper>
        </>
    );
}

const Text = styled.div`
    position: relative;
    width: 70%;
    height: 100%;
    top: 10%;

    padding: 10rem;
    font-family: Times New Roman;
    line-height: 1.75rem;
    letter-spacing: 0.02rem;

    font-size: 1.25rem;
    color: #fff;
`