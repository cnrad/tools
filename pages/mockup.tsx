import styled from 'styled-components';
import Image from 'next/image';
import { useEffect } from 'react';
import PageWrapper from "../src/components/PageWrapper";

interface PasteEvent extends Event{
    clipboardData?: any;
}

export default function deviceMockups() {

    function readImg(event: any){
        document.getElementById('output')?.setAttribute("src", URL.createObjectURL(event.target.files[0]));
    }

    useEffect(() => {
        window.addEventListener('paste', (e: PasteEvent) => {
            if(e.clipboardData.files[0])
            return document.getElementById('output')?.setAttribute("src", URL.createObjectURL(e.clipboardData.files[0]));
        });
    });

    return (
        <PageWrapper>
            <UpperFlex>
                <Direction>Select an image below, or paste one</Direction>
                <ImgInput style={{zIndex: 100}} type='file' onChange={readImg} />
            </UpperFlex>
            

            <FrameContainer>
                <Frame src="/mockup/MacbookLight.png" />
                <Result src="" id="output" />
            </FrameContainer>
        </PageWrapper>
    );
}

const UpperFlex = styled.div`
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, 0%);
    font-family: -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif;

    width: 60%;
    height: auto;

    display: flex;
    flex-direction: column;
    flex-gap: 2rem;
    align-items: center;
    justify-content: center;
`
const Direction = styled.h1`
    color: #ccccdc;
    font-size: 2rem;
    text-align: center;
`

const ImgInput = styled.input`
    color: #fff;
`

const FrameContainer = styled.div`
    width: auto;
    height: auto;
`

const Frame = styled.img`
    position: absolute;
    top: calc(60% + 12px);
    left: 50%;
    transform: translate(-50%, -50%);

    width: 1001px;
    height: 570px;
`
const Result = styled.img`
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-bottom: 0;

    width: 770px;
    height: 478px;
`