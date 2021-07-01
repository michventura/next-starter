import * as React from 'react'

type HeaderProps = {
  titulo: string
}

const Header = ({titulo}: HeaderProps) => (
  <header className="grid place-content-center">
    <h1 className="text-4xl">{titulo}</h1>
  </header>
)

export default Header
