import "../styles/globals.css";
import Head from 'next/head';
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>idkan dev 👨‍💻 | Backend, Frontend, JavaScript, Algorithms , CSS</title>
                <meta name="description" content="Abraham SWE Portfolio" />
                <link rel="icon" href="/devicon.png" />
                <meta name="description" content="Web Development, JavaScript ☕️, CSS 🎨 and Algorithms ⚡️" />
                <meta property="og:url" content="https://idkan.dev/" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:title" content="idkan dev 👨‍💻 | Backend, Frontend, JavaScript, Algorithms , CSS" />
                <meta property="og:description" content="Web Development, JavaScript ☕️, CSS 🎨 and Algorithms ⚡️" />
                <meta property="og:site_name" content="idkan.dev" />
            </Head>
            <ThemeProvider enableSystem={true} attribute="class">
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}

export default MyApp;
