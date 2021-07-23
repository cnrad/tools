import styled from "styled-components";
import Head from "next/head";
import PageWrapper from "../src/components/PageWrapper";
import { useState, useEffect } from "react";
import moment from "moment";

export default function SnowflakeDate() {
    const [snowflakeType, setSnowflakeType] = useState("Unix");
    const [snowflake, setSnowflake] = useState("");
    const [creation, setCreation] = useState("Waiting for input...");
    useEffect(() => {
        convert(snowflake, snowflakeType);
    }, [snowflake, snowflakeType]);

    function convertIDtoUnix(id: string, type: string): number {
        var bin = (+id).toString(2);
        var unixbin = "";
        var m = 64 - bin.length;
        unixbin = bin.substring(0, 42 - m);

        let unix: number = parseInt(unixbin, 2);

        switch (type) {
            case "Discord":
                unix = parseInt(unixbin, 2) + 1420070400000;
                break;
            case "Twitter":
                unix = parseInt(unixbin, 2) + 1288834974657;
                break;
            case "Hiven/Giggl":
                unix = parseInt(unixbin, 2) + 1562544000000;
                break;
            case "Unix":
                unix;
                break;
        }

        return unix;
    }

    function convert(id: string, type: string) {
        var unix = convertIDtoUnix(id, type);
        let timestamp = moment.unix(unix / 1000);
        setCreation(timestamp.format("YYYY-MM-DD, HH:mm:ss"));
    }

    return (
        <>
            <Head>
                <title>🛠️ Snowflake to Date</title>
            </Head>
            <PageWrapper overflowY="scroll">
                <Main>
                    <Inputs>
                        <TextInput
                            maxLength={19}
                            type="text"
                            onChange={(e) => setSnowflake(e.target.value)}
                        />
                        <SelectType
                            onChange={(e) => setSnowflakeType(e.target.value)}
                        >
                            <option value="Unix">Unix</option>
                            <option value="Discord">Discord</option>
                            <option value="Twitter">Twitter</option>
                            <option value="Hiven/Giggl">Hiven/Giggl</option>
                        </SelectType>
                    </Inputs>
                    <Result>
                        ❄️ Created at: <br />
                        <Date>{creation}</Date>
                    </Result>
                </Main>
            </PageWrapper>
        </>
    );
}

const Main = styled.div`
    position: relative;
    width: 25rem;
    height: 16rem;
    top: 10%;

    padding: 10rem;
    font-family: Times New Roman;
    line-height: 1.75rem;
    letter-spacing: 0.02rem;

    font-size: 1.25rem;
    color: #fff;
    font-family: -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial,
        Noto Sans, sans-serif;
`;

const Inputs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 1rem;
`;

const TextInput = styled.input`
    width: 15rem;
    height: 2rem;
    font-size: 1.25rem;
    text-align: center;
    background: #000;
    color: #fff;
    border: solid 1px #555;
    border-radius: 5px;
    padding: 5px;
    margin-right: 10px;
`;

const SelectType = styled.select`
    width: 7rem;
    font-size: 1.1rem;
    text-align: center;
    background: #000;
    color: #fff;
    padding: 5px;
    border: solid 1px #555;
    border-radius: 5px;
`;

const Result = styled.div`
    width: 100%;
    height: auto;
    font-size: 1rem;
    text-align: center;
    background: #111;
    color: #bbb;
    border: solid 1px #555;
    border-radius: 5px;
    margin-right: 10px;
    padding: 15px 0px;
    font-family: "Roboto Mono", monospace;
`;

const Date = styled.span`
    font-size: 1.25rem;
    color: #fff;
`;
