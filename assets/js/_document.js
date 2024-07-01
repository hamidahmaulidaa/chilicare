import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
        <Head>
            {/* Google Analytics */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-KYX3EGN6CN"></script>
            <script
            dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-KYX3EGN6CN');
                `,
            }}
            />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
        </Html>
    );
    }
