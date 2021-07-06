import styled from 'styled-components';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import PageWrapper from "../src/components/PageWrapper";
import axios from 'axios';

interface PasteEvent extends Event {
    clipboardData?: any;
}

const MacbookMockup = () => {

    const [deviceColor, setDeviceColor] = useState("Light");

    function readImg(event: any){
        document.getElementById('output')?.setAttribute("src", URL.createObjectURL(event.target.files[0]));
    }

    function urlImg(e: any){
        return document.getElementById('output')?.setAttribute("src", e.target.value);
    }

    async function downloadBtn() {
        let src: string = document.getElementById('output')!.getAttribute("src") as string;
        if(src === "") return;

        try {
            let res = await axios.get(`/api/createMockupLaptop?color=${deviceColor}&url=${encodeURIComponent(src)}`);
            console.log(res);

            var a = document.createElement("a"); 
            a.href = res.data.url;
            a.download = "mockup.png"; 
            a.click(); 
        } catch (e) {
            console.log(e)
        }
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
                    <Direction>{/* Upload, paste, or */}Type the URL for an image below</Direction>
                    <URLInput type="text" onChange={urlImg} />
                    <ToggleColor onClick={() => deviceColor === "Light" ? setDeviceColor("Dark") : setDeviceColor("Light")}
                        whileHover={{scale: 0.9, backgroundColor: "rgba(80, 80, 80, 1)"}} 
                        whileTap={{scale: 0.85, backgroundColor: "rgba(30, 30, 30, 1)"}}
                        transition={{ease: "easeInOut", duration: 0.15}}
                    >{deviceColor}</ToggleColor>

                    <ImgInput id="imgInput" style={{zIndex: 100}} type='file' onChange={readImg} />
                    
                    <FrameContainer>
                        <Frame src={`/mockup/Macbook${deviceColor}.png`} />
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
    display: none;
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

const ToggleColor = styled(motion.div)`
    width: 4rem;
    height: 1.5rem;
    line-height: 1.25rem;
    font-size: 1.25rem;
    padding: 0.5rem;
    color: #fff;
    border: solid 1px #444;
    border-radius: 0.5rem;
    background-color: rgba(30, 30, 30, 1);
    text-align: center;
    user-select: none;

    &:hover {
        cursor: pointer;
    }
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

export default MacbookMockup;