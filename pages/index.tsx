import * as React from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Meta from '@components/Meta'
import {AppConfig} from '@utils/AppConfig'

const IndexPage = () => (
  <>
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <main className="max-w-[900px] mx-auto">
      <Header titulo="Bienvenido" />
      <p className="text-center">¡¡¡Funcionaaa!!! 😃</p>
    </main>
    <Footer copyright="&copy; 2021" />
  </>
)

export default IndexPage
