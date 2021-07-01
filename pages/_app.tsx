import {AppProps} from 'next/app'
import '@styles/main.css'

const Application = ({Component, pageProps}: AppProps) => (
  <Component {...pageProps} />
)

export default Application
