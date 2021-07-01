import * as React from 'react'

type FooterProps = {
  copyright: string
}

const Footer = ({copyright}: FooterProps) => (
  <footer className="text-center text-sm">{copyright}</footer>
)

export default Footer
