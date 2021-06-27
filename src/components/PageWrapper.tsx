import { motion } from "framer-motion";
import styled from 'styled-components';

const PageWrapper = (props: any) => {

    const pageTransition = {
        type: "tween",
        ease: "anticipate",
        duration: 0.3,
      };

    return (
        <Wrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={pageTransition}
        >
            {props.children}
        </Wrapper>
    );
}

const Wrapper = styled(motion.div)`
    position: relative;
    inset: 0;
    width: 80%;
    height: 100%;
    background: #18181b;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default PageWrapper;