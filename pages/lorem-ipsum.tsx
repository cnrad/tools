import styled from 'styled-components';
import Head from 'next/head';
import PageWrapper from "../src/components/PageWrapper";

export default function LoremIpsum() {

    return (
        <>
            <Head>
                <title>Lorem Ipsum Text</title>
            </Head>
            <PageWrapper overflowY="scroll">
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Ut sem viverra aliquet eget sit amet. Ullamcorper malesuada proin libero nunc consequat interdum. Scelerisque eu ultrices vitae auctor eu augue ut. Odio pellentesque diam volutpat commodo sed. Ultrices tincidunt arcu non sodales neque. Pellentesque dignissim enim sit amet. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in. Nibh sed pulvinar proin gravida hendrerit. At consectetur lorem donec massa sapien. Lobortis feugiat vivamus at augue. In dictum non consectetur a erat nam. Faucibus vitae aliquet nec ullamcorper sit. Ut aliquam purus sit amet. Ipsum suspendisse ultrices gravida dictum. Adipiscing elit duis tristique sollicitudin. Felis eget velit aliquet sagittis id. Tristique senectus et netus et malesuada fames.

                    <br/>&nbsp;<br/>Ultricies mi quis hendrerit dolor magna. Eu tincidunt tortor aliquam nulla facilisi cras. Augue neque gravida in fermentum et sollicitudin ac orci. Penatibus et magnis dis parturient montes. Laoreet id donec ultrices tincidunt arcu. Sit amet mattis vulputate enim. Convallis a cras semper auctor neque vitae. Risus sed vulputate odio ut enim blandit. Vestibulum lectus mauris ultrices eros. Lacus laoreet non curabitur gravida. Donec ac odio tempor orci dapibus. Sit amet mattis vulputate enim nulla aliquet. Nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus. Gravida in fermentum et sollicitudin ac. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Consequat semper viverra nam libero justo laoreet sit.

                    <br/>&nbsp;<br/>Amet justo donec enim diam. Condimentum lacinia quis vel eros donec ac odio tempor. Quisque sagittis purus sit amet volutpat consequat mauris nunc. Iaculis eu non diam phasellus vestibulum lorem sed. Tincidunt eget nullam non nisi est sit amet facilisis magna. Sed euismod nisi porta lorem mollis aliquam ut. Orci sagittis eu volutpat odio facilisis mauris sit amet. Libero enim sed faucibus turpis in eu mi bibendum neque. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. Augue eget arcu dictum varius duis at consectetur lorem donec. Egestas erat imperdiet sed euismod nisi porta lorem mollis.

                    <br/>&nbsp;<br/>Eu ultrices vitae auctor eu augue ut lectus. Pretium quam vulputate dignissim suspendisse in est. Vulputate ut pharetra sit amet aliquam id diam. Convallis aenean et tortor at risus viverra adipiscing at. Egestas maecenas pharetra convallis posuere morbi leo urna. Mi tempus imperdiet nulla malesuada. Quam id leo in vitae turpis massa sed elementum. Aenean vel elit scelerisque mauris pellentesque pulvinar. Nascetur ridiculus mus mauris vitae ultricies leo. Mauris vitae ultricies leo integer malesuada nunc vel risus. Sit amet massa vitae tortor condimentum. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Porttitor lacus luctus accumsan tortor posuere ac ut.

                    <br/>&nbsp;<br/>Arcu bibendum at varius vel pharetra vel turpis. Ipsum nunc aliquet bibendum enim. Neque sodales ut etiam sit amet nisl purus in. Mattis pellentesque id nibh tortor. Vestibulum sed arcu non odio euismod. Congue nisi vitae suscipit tellus mauris. Fermentum et sollicitudin ac orci. Quisque non tellus orci ac auctor. Fames ac turpis egestas maecenas. In arcu cursus euismod quis viverra nibh cras. Quisque id diam vel quam elementum. Dictum sit amet justo donec enim. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Sed euismod nisi porta lorem.
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