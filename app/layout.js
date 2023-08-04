import '@/styles/globals.css';
import Head from './head';

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <Head title='Personal Portfolio Site' icons='./favicon.ico' />

      <body>

        {children}
        
      </body>
    </html>
  )
}
