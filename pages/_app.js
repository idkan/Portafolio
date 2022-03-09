import "../styles/globals.css";
import Head from 'next/head';
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>ABSE dev</title>
                <meta name="description" content="Abraham SWE Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ThemeProvider enableSystem={true} attribute="class">
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}

export default MyApp;
