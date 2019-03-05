import React, { Fragment } from 'react'
import SalmiakLayout from '../components/SalmiakLayout'

const data = [
  {
    title: 'ICT',
    description: 'Joku kiva description'
  },
  {
    title: 'Media',
    description: 'Joku kiva description'
  },
  {
    title: 'Software',
    description: 'Joku kiva description'
  }
]

export default () => {
  return (
    <Fragment>
      <SalmiakLayout data={data} />
    </Fragment>
  )
}

// import React, { useState } from 'react'
// import { Link } from 'gatsby'
// import styled, { createGlobalStyle } from 'styled-components'

// import Layout from '../components/layout'
// import Image from '../components/image'
// import SEO from '../components/seo'

// const myColor = 'blue'

// const GlobalStyle = createGlobalStyle`
//   html {
//     font-size: 20px;
//   }
//   body {
//     font-size: 1rem;
//     background-color: ${props => (props.theme === 'light' ? 'white' : 'black')};
//   }

// `

// const HeadingThing = styled.h1`
//   background-color: ${perse => perse.hellou};
//   font-size: 1rem;
//   color: white;

//   :hover {
//     background-color: purple;
//   }
// `

// const MyButton = styled.button`
//   background-color: blue;
//   color: white;
// `

// const IndexPage = () => {
//   const [theme, setTheme] = useState('light')

//   return (
//     <Layout>
//       <GlobalStyle theme={theme} />
//       <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
//       <HeadingThing hellou="green">Moi</HeadingThing>
//       <MyButton onClick={() => setTheme('dark')}>Klikkaa mua</MyButton>

//       <p>{theme}</p>
//       <p>Now go build something great.</p>
//       <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//         <Image />
//       </div>
//       <Link to="/page-2/">Go to page 2</Link>
//     </Layout>
//   )
// }

// export default IndexPage
