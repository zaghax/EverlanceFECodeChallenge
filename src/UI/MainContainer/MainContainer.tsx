interface propTypes {
  children?: React.ReactNode
}

const MainContainer = ({ children }: propTypes) => {
  return <main>{children}</main>
}

export default MainContainer
