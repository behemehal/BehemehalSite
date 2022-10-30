import { Head } from "$fresh/runtime.ts";


export interface HeaderProps {
    title: string;
    description: string;
    url: string;
}

export default function HeadCustom(props: HeaderProps) {
    return (
        <Head>
            <title>{props.title}</title>
            {/* Language */}
            <meta name="language" content="en" />

            {/* Primary Meta Tags */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={props.url} />
            <meta property="og:title" content={props.title} />
            <meta property="og:description" content={props.description} />
            <meta
                property="og:image"
                content="/img/pageimg.png"
            />

            {/* Temporary */}
            <meta name="yandex-verification" content="d8b98771e8b6a442" />


            {/* Twitter Meta Tags */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={props.url} />
            <meta property="twitter:title" content={props.title} />
            <meta property="twitter:description" content={props.description} />
            <meta
                property="twitter:image"
                content="/img/pageimg.png"
            />

            {/* Manifest */}
            <link rel="manifest" href="/manifest.json" />

            {/* Favicons */}
            <link rel="icon" type="image/png" sizes="32x32" href="/img/icons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/img/icons/favicon-16x16.png" />
            <link rel="shortcut icon" href="/img/icons/favicon.ico" type="image/x-icon" />
            <link rel="apple-touch-icon" href="/img/icons/apple-touch-icon.png" />
            <link rel="apple-touch-icon" sizes="57x57" href="/img/icons/apple-touch-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/img/icons/apple-touch-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/img/icons/apple-touch-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/img/icons/apple-touch-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/img/icons/apple-touch-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/img/icons/apple-touch-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/img/icons/apple-touch-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/img/icons/apple-touch-icon-180x180.png" />

            <meta name="msapplication-TileColor" content="#420004" />
            <meta name="theme-color" content="#420004" />

            <meta name="title" content={props.title} />
            <meta name="description" content={props.description} />
            <meta
                name="keywords"
                content="behemehal,safeen,,ellie,ellie programing language,program,programing language"
            />
            <meta name="robots" content="index, follow" />
            <meta name="copyright" content="Behemehal" />
            <meta name="language" content="English" />
            <meta name="distribution" content="global" />
            <meta name="revisit-after" content="5 days" />
            <meta name="author" content="Behemehal" />

            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <link href="https://fonts.gstatic.com" rel="preconnect" />
            <link href="https://fonts.googleapis.com" rel="preconnect" />
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
                rel="stylesheet"
            />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-GC9WXSW0YK"></script>
            <script>
                {
                    "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments)}gtag('js', new Date());gtag('config', 'G-GC9WXSW0YK');"
                }
            </script>
        </Head>
    );
}