interface propTypes {
  children?: React.ReactNode
}

const MainContainer = ({ children }: propTypes) => {
  return <main className="container mx-auto">{children}</main>
}

export default MainContainer
