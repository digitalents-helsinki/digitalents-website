import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout/layout'
import gray from '../images/Rectangle.png'
import rightArrow from '../images/right-arrow.svg'

const teamTemplate = (props) => {
  const { teamTitle, teamDescription, teamImage} = props.data.contentfulPageTemplate

  const language = props.pageContext.node_locale === 'en-US' ? 'en' : 'fi'
  const pagePrefix = props.pageContext.node_locale === 'en-US' ? '/en/' : '/fi/'

  return (
    <Layout language={language} pagePrefix={pagePrefix}>
      <StyleWrapper image={teamImage.file.url}>
      <h1>{teamTitle}</h1>
        <div className="container">         
          <div className="description" dangerouslySetInnerHTML={{__html: teamDescription.childMarkdownRemark.html}} />
          <div className="container_ImgBtn">
            <div className="container_Img">
          </div>
          <div className="container_Btn">
            <p>Katso missä olemme olleet mukana</p>
            <button>Töitämme sivu <img className="arrow" src={rightArrow} alt="" /></button>
          </div>
        </div>
      </div>
      </StyleWrapper>
    </Layout>
  )
}

const StyleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${props => props.image});
  background-size: cover;
  background-attachment: fixed;
  text-align: center;

  h1 {
    margin-top: 15rem;
    font-size: 3rem;
    font-family: futura-pt-bold;
    padding-bottom: 5rem;
    color:white;
    @media screen and (max-width: 600px) {
      font-size: 2.5rem;     
    }
  }

  .container {
    margin-top: 8rem;
    padding: 12rem 0;
    background: white;
    width: 100vw;
    @media screen and (max-width: 600px) {
      text-align:left;     
    }


    h1 {
      margin-top: 5rem;
      font-size: 3rem;
      font-family: futura-pt-bold;
      padding-bottom: 5rem;
    }

    .description {
      width: 60vw;
      margin: 3rem auto;
      font-size: 2rem;
      padding: 8rem auto;
      @media screen and (max-width: 600px) {
        font-size: 1.2rem;
        width: 80vw;
        
      }
    }
  }
  
  .container_ImgBtn{
    display: flex;
    justify-content: flex-start;
    width: 60%;
    margin: 12rem auto 1rem;
    @media screen and (max-width: 1000px) {
        width: 90%;
        flex-direction: column;
        height: auto;
    }
    .container_Img{
      display: flex;
      width: 50%;
      height: 26rem;
      background-size: cover;
      margin: 1rem 1rem;
      background-image: url(${gray});
      @media screen and (max-width: 1000px) {
         align-items: center;
         margin: 1rem auto;
         width: 80vw;
      }
    }
    .container_Btn{
      display: flex;
      width: 50%;
      margin: auto;
      flex-direction: column;
      align-items: center;
      p{
        display:flex;
        font-size: 1.3rem;
        font-weight: bold;
        font-family: futura-pt-bold;
        text-align: center;
        margin: 3rem;
         @media screen and (max-width: 600px) {
          width: 80vw;
          
         }
      }
      button {
        margin-top: .9rem;
        border: 1px solid black;
        background: #ffffff;
        width: 200px;
        height: 50px;
        font-size: 18px;
        line-height: 24px;
        font-weight: 700;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .arrow{
          height: 15px;
          animation: floating-hor-arrow 1.6s infinite ease-in-out 0s;

          @keyframes floating-hor-arrow {
            0% {
              transform: translateX(0);
            }
            65% {
              transform: translateX(11px);
            }
            100% {
              transform: translateX(0);
            }
          }
        }
      }
    }
  }

`

export const pageQuery = graphql`
  query teamTemplateQuery($slug: String! $node_locale: String!){
    contentfulPageTemplate(teamSlug: {eq: $slug} node_locale: {eq: $node_locale}) {
      teamTitle
      showPageTitle
      teamSlogan
      teamDescription {
        childMarkdownRemark {
          html
        }
      }
      teamImage {
        file {
          url
        }
      }
      teamMaskImage {
        file {
          url
        }
      }
    }
  }
`

export default teamTemplate
