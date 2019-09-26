import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/Layout/layout'
import PortfolioSliderPhoto from '../../images/PortfolioSliderPhoto.png'
import TestImg from '../../images/annie-spratt-qckxruozjrg-unsplash.jpg'
import softdev from '../../images/pexels-photo-2.jpeg'


export default class PortfolioSlider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      teamVisible: 'media'
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(team) {
    this.setState(state => ({
      teamVisible: team
    }))
  }

  render() {
    return (
      <Layout>
        <StyleWrapper>
        <div className="Container">
          <p>Inspiroidu töistämme. Jokainen tekemämme tilaustyö on tarkoin toteutettu asiakkaan toiveiden mukaisesti.</p>      
        </div>        

        <button class="btn" onClick={(e) => this.handleClick('media', e)}>Media</button>
        <button class="btn" onClick={(e) => this.handleClick('softdev', e)}>SoftDev</button>
        <button class="btn" onClick={(e) => this.handleClick('ict', e)}>ICT</button>
        {this.state.teamVisible === 'media' ? 
        <div className= 'Container_Imgallery'>         
          <div className="Container_Img_Images defaultImg">
          </div>
          <div className="Container_Img_Images defaultImg">
          </div>
          <div className="Container_Img_Images defaultImg">           
          </div>
          <div className="Container_Img_Images defaultImg">
          </div>
          <div className="Container_Img_Images defaultImg">
          </div>
          <div className="Container_Img_Images defaultImg">
          </div>
          <div className="Container_Img_Images defaultImg">
          </div>
          <div className="Container_Img_Images defaultImg">
          </div>
          <div className="Container_Img_Images defaultImg">
          </div>         
        </div>
        : null }
        {this.state.teamVisible === 'softdev' ? 
        <div className='Container_Imgallery'>
          <div className="Container_Img_Images softdevImg">
          </div>
          <div className="Container_Img_Images softdevImg">
          </div>
          <div className="Container_Img_Images softdevImg">
          </div>
          <div className="Container_Img_Images softdevImg">
          </div>
          <div className="Container_Img_Images softdevImg">
          </div>
          <div className="Container_Img_Images softdevImg">
          </div>
          <div className="Container_Img_Images softdevImg">
          </div>
          <div className="Container_Img_Images softdevImg">
          </div>
          <div className="Container_Img_Images softdevImg">
          </div>
        </div>
        : null }
        {this.state.teamVisible === 'ict' ? 
        <div className='Container_Imgallery'>
          <div className="Container_Img_Images ictImg">
          </div>
          <div className="Container_Img_Images ictImg">
          </div>
          <div className="Container_Img_Images ictImg">
          </div>
          <div className="Container_Img_Images ictImg">
          </div>
          <div className="Container_Img_Images ictImg">
          </div>
          <div className="Container_Img_Images ictImg">
          </div>
          <div className="Container_Img_Images ictImg">
          </div>
          <div className="Container_Img_Images ictImg">
          </div>
          <div className="Container_Img_Images ictImg">
          </div>
        </div>
        : null }
        <a href="/fi/contact">
          <div className="BottomText">
            <p className='BottomText_First'> Onko sinulla Idea?</p>
            <p className='BottomText_Second'>Suunnitellaan projekti</p>
          </div>
        </a>
        
        </StyleWrapper>
      </Layout>
    )
  }
}

const StyleWrapper = styled.div`
    height: auto;

    .ictImg {
      background-image: url(${TestImg});
    }

    .defaultImg {
      background-image: url(${PortfolioSliderPhoto});
    }

    .softdevImg {
      background-image: url(${softdev})
    }

    .Container{
      display: flex;
      width: 80%;
      margin: auto;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      padding: 25vh 0;
      p {
        text-align: center;
        font-size: 40px;
        font-weight: 400;
        width: 45%;
        @media screen and (max-width: 1000px) {
          width: 55%;
          padding-top: 1rem;
          text-align: center;
          margin: auto;          
          text-align: center;
          font-size: 1.5rem;
          font-weight: 400;
          width: 85%;
        }
      }
    }

    .btn {
      margin-left:20.2vw;
      font-size: 2rem;
      align-self: center;
      justify-content: center;
      border: none;
      outline: none;
      padding: 5rem 1rem;
      background-color: white;
      transition: transform 200ms ease-out;
      @media screen and (max-width: 1400px) {
        font-size: 1rem;
        margin-left:16.6vw;
        padding: 0rem 0rem 2rem;
      }
      @media screen and (max-width: 800px) {
        font-size: 1.5rem;
        margin-left:18.6vw;
        padding: 0rem 0rem 2rem;
      }

      
    }
    .btn:hover {
      transform: scale(1.1);
    }
        .Container_Imgallery{
          display: flex;         
  	      flex-direction: row;
  	      flex-wrap: wrap;
          width: 70vw;
          justify-content: center;
          margin: 0 auto;
          overflow: hidden;
          @media screen and (max-width: 1400px) {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin: auto;
            width: 90vw;
          }
          @media screen and (max-width: 1000px) {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin: auto;
            width: 100vw;
          }
          .Container_Img_Images{
            border: 0px solid white; 
            margin: 10px;         
            height: 40vh;
            width: 18vw;
            background-size: cover;
            object-fit: cover;
	          transition: transform 200ms ease-out;
            box-shadow: 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4);
            
            @media screen and (max-width: 1000px) {
              height: 20vh;
              width: 30vw;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              
            }
          }

          .Container_Img_Images:hover {
            transform: scale(1.02);
          }
        }
        .BottomText{
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 80%;
          margin: auto;
          padding: 15vh 0;
        }
        .BottomText_First{
          font-family: Asap;
          font-size: 16px;
          line-height: 150%;
        }
        .BottomText_Second{
          text-align: center;
          font-size: 40px;
          font-weight: 700;
          padding-top: 1.5rem;
        }
      }
`
