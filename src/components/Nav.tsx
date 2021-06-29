import styled from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link';
import toolsList from "../../src/toolsList";

export default function Nav() {

    const hoverItem = {
        color: "#fff",
        x: 20,
        cursor: "pointer",
        transition: {
            duration: 0.15,
            ease: "easeInOut"
        }
    }

    return (
            <Container>
                <Header>
                    <Cnrad>cnrad</Cnrad> toolkit
                </Header>
                <ToolItems>

                    {toolsList.map((obj) => (
                        <ToolLink key={obj.url.toString()} href={obj.url.toString()}>
                            <Item whileHover={hoverItem}>
                                <Arrow /> {obj.name}
                            </Item>
                        </ToolLink>
                    ))}

                </ToolItems>
            </Container>
    );
}

const Container = styled(motion.div)`
    position: relative;
    left: 0;
    top: 0;
    padding: 0 2rem;
    width: 16rem;
    min-width: 16rem;
    height: 100%;

    background: #18181b;
    color: #fff;
    font-family: -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif;
    border-right: solid 0.1px #333;
`

const Header = styled(motion.div)`
    font-size: 2.5rem;
    font-weight: 400;
    margin: 2rem 0 2rem 0.25rem;
    user-select: none;
`

const Cnrad = styled(motion.span)`
    background: linear-gradient(270deg, #c700ff, #46a0ff);
    background-clip: text;
    -webkit-background-clip: text;
    color: rgba(0, 0, 0, 0);
    font-weight: 700;
    user-select: none;
`

const ToolItems = styled(motion.div)`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`

const ToolLink = styled(Link)`
    text-decoration: none;
    user-select: none;
`

const Item = styled(motion.div)`
    width: 90%;
    height: 2rem;
    padding: 0.25rem 1.5rem 0.25rem 0;
    color: #7b8290;
    font-size: 1.25rem;
    margin-left: -20px;
    user-select: none;

    white-space: nowrap;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    flex-wrap: nowrap;

    & > svg {
        transition: fill 0.15s ease-in-out;
        fill: rgba(255, 255, 255, 0);
        margin-right: 10px;
    }

    &:hover {
        & > svg {
            fill: rgba(255, 255, 255, 1);
        }
    }
`

const Arrow = () => {
    return(
        <motion.svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
            <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/>
        </motion.svg>
    )
}