import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MainDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return initialProps;
    }

    render() {
        return (
            <Html lang="fr">
                <Head>
                    {process.env.NODE_ENV === 'development' && <meta name="robots" content="noindex, nofollow" />}
                    <link rel="shortcut icon" type="image/icon" href="/favicon.ico" />
                    <link
                        rel="preload"
                        href="/fonts/inter-var-latin.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin="anonymous"
                    />
                    <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
                    <meta content="#ffffff" name="theme-color" />
                    <meta content="#ffffff" name="msapplication-TileColor" />
                </Head>
                <body className="bg-white dark:bg-black text-white dark:text-black">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MainDocument;