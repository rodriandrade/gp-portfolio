import GlobalStyle from '../constants/globalStyle';
function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}
export default MyApp