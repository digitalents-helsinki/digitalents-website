import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/Layout/layout'
import PortfolioSliderPhoto from '../../images/PortfolioSliderPhoto.png'
import TestImg from '../../images/annie-spratt-qckxruozjrg-unsplash.jpg'
import softdev from '../../images/pexels-photo-2.jpeg'
import media from '../../images/Media_kuva.png'
import ict from '../../images/ICT_kuva.png'
import dev from '../../images/Softdev_kuva.png'


export default class PortfolioSlider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      teamVisible: 'media',
      imageVisible: null
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleImageClick = this.handleImageClick.bind(this)
  }

  handleClick(team) {
    this.setState(state => ({
      teamVisible: team
    }))
  }

  handleImageClick(image) {
    this.setState(state => ({
      imageVisible: image
    }))
  }

  render() {
    return (
      <Layout>
        <StyleWrapper>
        <div className="Container">
          <p>Inspiroidu töistämme. Jokainen tekemämme tilaustyö on tarkoin toteutettu asiakkaan toiveiden mukaisesti.</p>      
        </div> 
      <div className= 'Container_Imgallery'>
        <button class="Container_Img_Images squeeze mediaback" onClick={(e) => this.handleClick('media', e)}>Media</button>
        <button class="Container_Img_Images squeeze softback" onClick={(e) => this.handleClick('softdev', e)}>SoftDev</button>
        <button class="Container_Img_Images squeeze ictback" onClick={(e) => this.handleClick('ict', e)}>ICT</button>
      </div>       
        {this.state.teamVisible === 'media' ? 
        <div className= 'Container_Imgallery'>
          
          {this.state.imageVisible === 'media1' ?          
            <div className="modal" onClick={(e) => this.handleImageClick(null)}>
              <div className="defaultImg modal-content">
              </div>
            </div>
            :
            <div onClick={(e) => this.handleImageClick('media1', e)} className="Container_Img_Images defaultImg">
            </div>
          }

          {this.state.imageVisible === 'media2' ?          
            <div className="modal" onClick={(e) => this.handleImageClick(null)}>
              <div className="defaultImg modal-content">
              </div>
            </div>
            :
            <div onClick={(e) => this.handleImageClick('media2', e)} className="Container_Img_Images defaultImg">
            </div>
          }

          {this.state.imageVisible === 'media3' ?          
            <div className="modal" onClick={(e) => this.handleImageClick(null)}>
              <div className="defaultImg modal-content">
              </div>
            </div>
            :
            <div onClick={(e) => this.handleImageClick('media3', e)} className="Container_Img_Images defaultImg">
            </div>
          }

          {this.state.imageVisible === 'media4' ?          
            <div className="modal" onClick={(e) => this.handleImageClick(null)}>
              <div className="defaultImg modal-content">
              </div>
            </div>
            :
            <div onClick={(e) => this.handleImageClick('media4', e)} className="Container_Img_Images defaultImg">
            </div>
          }

          {this.state.imageVisible === 'media5' ?          
            <div className="modal" onClick={(e) => this.handleImageClick(null)}>
              <div className="defaultImg modal-content">
              </div>
            </div>
            :
            <div onClick={(e) => this.handleImageClick('media5', e)} className="Container_Img_Images defaultImg">
            </div>
          }

          {this.state.imageVisible === 'media6' ?          
            <div className="modal" onClick={(e) => this.handleImageClick(null)}>
              <div className="defaultImg modal-content">
              </div>
            </div>
            :
            <div onClick={(e) => this.handleImageClick('media6', e)} className="Container_Img_Images defaultImg">
            </div>
          }

          {this.state.imageVisible === 'media7' ?          
            <div className="modal" onClick={(e) => this.handleImageClick(null)}>
              <div className="defaultImg modal-content">
              </div>
            </div>
            :
            <div onClick={(e) => this.handleImageClick('media7', e)} className="Container_Img_Images defaultImg">
            </div>
          }

          {this.state.imageVisible === 'media8' ?          
            <div className="modal" onClick={(e) => this.handleImageClick(null)}>
              <div className="defaultImg modal-content">
              </div>
            </div>
            :
            <div onClick={(e) => this.handleImageClick('media8', e)} className="Container_Img_Images defaultImg">
            </div>
          }

          {this.state.imageVisible === 'media9' ?          
            <div className="modal" onClick={(e) => this.handleImageClick(null)}>
              <div className="defaultImg modal-content">
              </div>
            </div>
            :
            <div onClick={(e) => this.handleImageClick('media9', e)} className="Container_Img_Images defaultImg">
            </div>
          }
         
        </div>
        : null }
        
        {this.state.teamVisible === 'softdev' ? 
        <div className='Container_Imgallery'>

          {this.state.imageVisible === 'softdev1' ?          
            <div className="modal" onClick={(e) => this.handleImageClick(null)}>
              <div className="softdevImg modal-content">
              </div>
            </div>
            :
            <div onClick={(e) => this.handleImageClick('softdev1', e)} className="Container_Img_Images softdevImg">
            </div>
          }


          {this.state.imageVisible === 'softdev2' ?          
            <div className="modal" onClick={(e) => this.handleImageClick(null)}>
              <div className="softdevImg modal-content">
              </div>
            </div>
            :
            <div onClick={(e) => this.handleImageClick('softdev2', e)} className="Container_Img_Images softdevImg">
            </div>
          }


          {this.state.imageVisible === 'softdev3' ?          
            <div className="modal" onClick={(e) => this.handleImageClick(null)}>
              <div className="softdevImg modal-content">
              </div>
            </div>
            :
            <div onClick={(e) => this.handleImageClick('softdev3', e)} className="Container_Img_Images softdevImg">
            </div>
          }


          {this.state.imageVisible === 'softdev4' ?          
            <div className="modal" onClick={(e) => this.handleImageClick(null)}>
              <div className="softdevImg modal-content">
              </div>
            </div>
            :
            <div onClick={(e) => this.handleImageClick('softdev4', e)} className="Container_Img_Images softdevImg">
            </div>
          }


          {this.state.imageVisible === 'softdev5' ?          
            <div className="modal" onClick={(e) => this.handleImageClick(null)}>
              <div className="softdevImg modal-content">
              </div>
            </div>
            :
            <div onClick={(e) => this.handleImageClick('softdev5', e)} className="Container_Img_Images softdevImg">
            </div>
          }


          {this.state.imageVisible === 'softdev6' ?          
            <div className="modal" onClick={(e) => this.handleImageClick(null)}>
              <div className="softdevImg modal-content">
              </div>
            </div>
            :
            <div onClick={(e) => this.handleImageClick('softdev6', e)} className="Container_Img_Images softdevImg">
            </div>
          }


          {this.state.imageVisible === 'softdev7' ?          
            <div className="modal" onClick={(e) => this.handleImageClick(null)}>
              <div className="softdevImg modal-content">
              </div>
            </div>
            :
            <div onClick={(e) => this.handleImageClick('softdev7', e)} className="Container_Img_Images softdevImg">
            </div>
          }


          {this.state.imageVisible === 'softdev8' ?          
            <div className="modal" onClick={(e) => this.handleImageClick(null)}>
              <div className="softdevImg modal-content">
              </div>
            </div>
            :
            <div onClick={(e) => this.handleImageClick('softdev8', e)} className="Container_Img_Images softdevImg">
            </div>
          }


        {this.state.imageVisible === 'softdev9' ?          
          <div className="modal" onClick={(e) => this.handleImageClick(null)}>
            <div className="softdevImg modal-content">
            </div>
          </div>
          :
          <div onClick={(e) => this.handleImageClick('softdev9', e)} className="Container_Img_Images softdevImg">
          </div>
        }
        </div>
        : null }

        {this.state.teamVisible === 'ict' ? 
        <div className='Container_Imgallery'>

            {this.state.imageVisible === 'ict1' ?          
              <div className="modal" onClick={(e) => this.handleImageClick(null)}>
                <div className="ictImg modal-content">
                </div>
              </div>
              :
              <div onClick={(e) => this.handleImageClick('ict1', e)} className="Container_Img_Images ictImg">
              </div>
            }
  
  
            {this.state.imageVisible === 'ict2' ?          
              <div className="modal" onClick={(e) => this.handleImageClick(null)}>
                <div className="ictImg modal-content">
             
                </div>
                <div>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam consequuntur at natus fugiat placeat voluptates, aut nemo facere voluptate architecto eaque non quibusdam iste dolorem nihil repudiandae. Ab, provident reiciendis.</p>
                </div>
              </div>
              :
              <div onClick={(e) => this.handleImageClick('ict2', e)} className="Container_Img_Images ictImg">
              </div>
            }
  
  
            {this.state.imageVisible === 'ict3' ?          
              <div className="modal" onClick={(e) => this.handleImageClick(null)}>
                <div className="ictImg modal-content">
                </div>
              </div>
              :
              <div onClick={(e) => this.handleImageClick('ict3', e)} className="Container_Img_Images ictImg">
              </div>
            }
  
  
            {this.state.imageVisible === 'ict4' ?          
              <div className="modal" onClick={(e) => this.handleImageClick(null)}>
                <div className="ictImg modal-content">
                </div>
              </div>
              :
              <div onClick={(e) => this.handleImageClick('ict4', e)} className="Container_Img_Images ictImg">
              </div>
            }
  
  
            {this.state.imageVisible === 'ict5' ?          
              <div className="modal" onClick={(e) => this.handleImageClick(null)}>
                <div className="ictImg modal-content">
                </div>
              </div>
              :
              <div onClick={(e) => this.handleImageClick('ict5', e)} className="Container_Img_Images ictImg">
              </div>
            }
  
  
            {this.state.imageVisible === 'ict6' ?          
              <div className="modal" onClick={(e) => this.handleImageClick(null)}>
                <div className="ictImg modal-content">
                </div>
              </div>
              :
              <div onClick={(e) => this.handleImageClick('ict6', e)} className="Container_Img_Images ictImg">
              </div>
            }
  
  
            {this.state.imageVisible === 'ict7' ?          
              <div className="modal" onClick={(e) => this.handleImageClick(null)}>
                <div className="ictImg modal-content">
                </div>
              </div>
              :
              <div onClick={(e) => this.handleImageClick('ict7', e)} className="Container_Img_Images ictImg">
              </div>
            }
  
  
            {this.state.imageVisible === 'ict8' ?          
              <div className="modal" onClick={(e) => this.handleImageClick(null)}>
                <div className="ictImg modal-content">
                </div>
              </div>
              :
              <div onClick={(e) => this.handleImageClick('ict8', e)} className="Container_Img_Images ictImg">
              </div>
            }
  
  
          {this.state.imageVisible === 'ict9' ?          
            <div className="modal" onClick={(e) => this.handleImageClick(null)}>
              <div className="ictImg modal-content">
              </div>
            </div>
            :
            <div onClick={(e) => this.handleImageClick('ict9', e)} className="Container_Img_Images ictImg">
            </div>
          }
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

    .ictback {
      background-image: url(${ict});
    }

    .defaultImg {
      background-image: url(${PortfolioSliderPhoto});
    }

    .mediaback {
      background-image: url(${media});
    }

    .softdevImg {
      background-image: url(${softdev})
    }

    .softback {
      background-image: url(${dev})
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

    .modal {
      position: fixed; /* Stay in place */
      z-index: 1; /* Sit on top */
      padding-top: 15vh; /* Location of the box */
      left: 0;
      top: 0;
      margin: auto;
      width: 100%; /* Full width */
      height: 100vh; /* Full height */
      overflow: auto; /* Enable scroll if needed */
      background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
    
    }

    .modal-content {
      z-index: 3; /* Sit on top */
      margin: 5rem auto;
      display: block;
      width: 45rem;
      height: 65vh;
      background-size: cover;
    }

        .Container_Imgallery{
          display: flex;         
  	      flex-direction: row;
  	      flex-wrap: wrap;
          width: 60vw;
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
            height: 30vh;
            width: 17vw;
            background-size: cover;
            object-fit: cover;
	          transition: transform 200ms ease-out;
            box-shadow: 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4);
            font-size: 3rem;
            font-weight: 800;
            color:white;
            
            @media screen and (max-width: 1000px) {
              height: 20vh;
              width: 30vw;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              
            }
          }

          .squeeze {
            height: 10vh;
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
