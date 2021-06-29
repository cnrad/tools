import styled from 'styled-components';
// import { motion } from 'framer-motion'; USE DRAG CONSTRAINTS FOR COLOR
import PageWrapper from "../src/components/PageWrapper";
import { PhotoshopPicker } from 'react-color';
import { useState } from 'react';

export default function colorPicker() {

    const [hexState, setHexState] = useState("#ff0000");
    const [rgbaState, setRgbaState] = useState("255, 0, 0, 1");

    const handleChange = (color: any, event: any) => {
        setHexState(color.hex);
        setRgbaState(`${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a}`);
    }

    return (
        <PageWrapper>
            <PhotoshopPicker onChange={handleChange} />

            <Container>
                <ColorPrev color={hexState} />
                <Hex>{hexState}</Hex>
                <RGBA>rgba({rgbaState})</RGBA>
            </Container>
        </PageWrapper>
    );
}

const Container = styled.div`
    border: solid 1px #444;
    border-radius: 0.5rem;
    min-width: 45%;
    min-height: 35%;
    padding: 5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-family: Segoe UI;
    font-size: 1.75rem;
`

const ColorPrev = styled.div<{color: string}>`
    width: 7rem;
    height: 7rem;
    background: ${({color}) => color};
`

const Hex = styled.div`
    width: 40%;
    height: 4rem;
    border: solid 1px #444;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const RGBA = styled.div`
    width: 40%;
    height: 4rem;
    border: solid 1px #444;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
