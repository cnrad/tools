import styled from 'styled-components';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import PageWrapper from "../src/components/PageWrapper";
import axios, { AxiosResponse } from 'axios';

interface PasteEvent extends Event{
    clipboardData?: any;
}

export default function DeviceMockups() {

    function readImg(event: any){
        document.getElementById('output')?.setAttribute("src", URL.createObjectURL(event.target.files[0]));
    }

    function urlImg(e: any){
        return document.getElementById('output')?.setAttribute("src", e.target.value);
    }

    async function downloadBtn() {
        let src = document.getElementById('output')!.getAttribute("src");
        if(src === "") return;

        let res = await axios.get(`https://localhost:3000/api/createLaptopMockup?url=${src}`);

    }

    useEffect(() => {
        window.addEventListener('paste', (e: PasteEvent) => {
            if(e.clipboardData.files[0])
            return document.getElementById('output')?.setAttribute("src", URL.createObjectURL(e.clipboardData.files[0]));
        });
    });

    return (
        <>
            <Head>
                <title>Design Mockups</title>
            </Head>
            <PageWrapper overflowY="scroll">
                <UpperFlex>
                    <Direction>Upload, paste, or type the URL for an image below</Direction>
                    <URLInput type="text" onChange={urlImg} />
                    <ImgInput id="imgInput" style={{zIndex: 100}} type='file' onChange={readImg} />
                    
                    <FrameContainer>
                        <Frame src="/mockup/MacbookLight.png" />
                        <Result src="" id="output" />
                    </FrameContainer>

                    <DownloadBtn 
                        onClick={downloadBtn} 
                        whileHover={{scale: 0.9, backgroundColor: "rgba(80, 80, 80, 1)"}} 
                        transition={{ease: "easeInOut", duration: 0.15}}
                    >
                        Download Mockup
                    </DownloadBtn>
                </UpperFlex>
            </PageWrapper>
        </>
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
    align-items: center;
    justify-content: center;

    & > * {
        margin-bottom: 1rem;
    }
`
const Direction = styled.h1`
    color: #ccccdc;
    font-size: 2rem;
    text-align: center;
`

const ImgInput = styled.input`
    color: #fff;
`

const URLInput = styled.input`
    color: #fff;
    width: 50%;
    min-width: 15rem;
    height: 2rem;
    background: #18181b;
    border: solid 1px #444;
    border-radius: 0.25rem;
`

const FrameContainer = styled.div`
    position: relative;
    width: auto;
    height: auto;
    width: 1001px;
    height: 570px;
    margin-bottom: 5rem;
`

const Frame = styled.img`
    position: absolute;
    top: calc(50% + 12px);
    left: 50%;
    transform: translate(-50%, -50%);

    width: 1001px;
    height: 570px;
`
const Result = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-bottom: 0;

    width: 770px;
    height: 478px;
`

const DownloadBtn = styled(motion.div)`
    background: #333;
    color: #fff;
    border-radius: 0.5rem;
    padding: 1rem;
    font-size: 1.1rem;
    line-height: 1.1rem;
    background-color: rgba(30, 30, 30, 1);
    margin-bottom: 4rem;

    &:hover {
        cursor: pointer;
    }
`