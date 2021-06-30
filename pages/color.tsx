import styled from 'styled-components';
import Head from 'next/head';
import PageWrapper from "../src/components/PageWrapper";
import { useState, useEffect } from 'react';
import { RgbaColorPicker } from "react-colorful";

export default function ColorPicker() {

    const [hexState, setHexState] = useState("#ff0000");
    const [rgbaState, setRgbaState] = useState({ r: 255, g: 0, b: 0, a: 1 });

    function hexify(color: number[]) {
        const zeroPad = (num:number, places:number) => num.toString(16).padStart(places, '0')

        if(color[3] === 1){
            return "#" +
            (zeroPad(color[0], 2)) +
            (zeroPad(color[1], 2)) +
            (zeroPad(color[2], 2));
        }

        return "#" +
          (zeroPad(color[0], 2)) +
          (zeroPad(color[1], 2)) +
          (zeroPad(color[2], 2)) +
          (zeroPad(Math.floor(color[3] * 255), 2));
    }

    useEffect(() => {
        setHexState(hexify([rgbaState.r, rgbaState.g, rgbaState.b, rgbaState.a]));
    }, [rgbaState])

    return (
        <>
            <Head>
                <title>JSON Formatter</title>
            </Head>
            <PageWrapper>
                <Container>
                    <ColorCont>
                        <RgbaPicker color={rgbaState} onChange={setRgbaState} />
                    </ColorCont>
                    
                    <Info>
                        <ColorPrev color={`rgba(${rgbaState.r}, ${rgbaState.g}, ${rgbaState.b}, ${rgbaState.a})`} />
                        <Hex>{hexState}</Hex>
                        <RGBA>rgba({`${rgbaState.r}, ${rgbaState.g}, ${rgbaState.b}, ${rgbaState.a}`})</RGBA>
                    </Info>
                </Container>
            </PageWrapper>
        </>
    );
}

const Container = styled.div`
    border: solid 1px #444;
    border-radius: 0.5rem;
    width: 45%;
    min-width: 35rem;
    min-height: 35%;
    padding: 3rem;
    background: #222;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-family: Segoe UI;
    font-size: 1.65rem;
`

const Info = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > * {
        margin-bottom: 20px;
    }
`

const ColorPrev = styled.div<{color: string}>`
    width: 80%;
    height: 7rem;
    background: ${({color}) => color};

    border-radius: 0.5rem;
`

const Hex = styled.div`
    width: 80%;
    height: 4rem;
    border: solid 1px #444;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #111;
`

const RGBA = styled.div`
    width: 80%;
    height: 4rem;
    border: solid 1px #444;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    background: #111;
    margin-bottom: 0;
`

const ColorCont = styled.div`
    width: 100%;
    height: 20rem;

    .react-colorful {
        width: 100%;
        height: 20.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        & > * {
            margin-bottom: 10px;
            border: solid 1px #555;
        }
    }
`

const RgbaPicker = styled(RgbaColorPicker)`

    .react-colorful__saturation {
        border-radius: 5px;
        width: 90%;
        height: 20rem;
    }
    
    .react-colorful__hue,
    .react-colorful__alpha {
        height: 40px;
        width: 90%;
        border-radius: 5px;
    }

    .react-colorful__hue-pointer { 
        width: 16px; 
        height: 35px;
        border-radius: 5px; 
    }
    .react-colorful__alpha-pointer { 
        width: 16px; 
        height: 35px;
        border-radius: 5px; 
    }
`
