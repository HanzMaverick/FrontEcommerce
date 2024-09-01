import './globals.css';
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap")
};
import "../style/index.scss";
import AppProvider from '@/contextApi/AppProvider';
import ReduxProvider from '@/redux/provider';
import { ToastContainer } from 'react-toastify';

export const metadata = {
  title: 'Zomata - React Next.js Organic Food Template',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en">
        <head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="description" content="Generated by create next app" />
          <meta name="robots" content="noindex, follow" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,700,900" rel="stylesheet"></link>
        </head>

        <body suppressHydrationWarning={true}>
          <ReduxProvider>
            <AppProvider>
              {children}
            </AppProvider>
            <ToastContainer />
          </ReduxProvider>
        </body>
      </html>
    </>
  )
}
