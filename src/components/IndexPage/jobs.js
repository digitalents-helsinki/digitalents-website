import React from 'react'
import styled from 'styled-components'
import rightArrow from '../../images/right-arrow.svg'
import TopImg from '../../images/annie-spratt-qckxruozjrg-unsplash.jpg'

const Jobs = () => {
  return (
    <JobsWrapper>
      <img src={TopImg} alt="" className="top-img" />
      <div className="jobs-heading">
        <h2>Työpaikat</h2>
      </div>
      <div className="jobs-content">
        <h3>Hae meille töihin</h3>
        <span>Rekrytoimme 18–29-vuotiaita nuoria ympäri vuoden, joten kannattaa laittaa hakemus tulemaan.</span>
        <button>Työpaikat <img src={rightArrow} alt="" className="arrow" /></button>
      </div>
    </JobsWrapper>
  )
}

const JobsWrapper = styled.div`
  height: 120vh;
 


  

  .top-img {
    
    height: 40vh;
    width: 49.5vw;
    overflow: hidden;
    z-index: -1;
    position: relative;
    margin: auto;
    margin-top: 8rem;
    display: block;
    object-fit: cover;
    @media screen and (max-width: 1200px) {
      display:none;
    }
  }

  .jobs-heading {
    
    width: 350px;
    height: 150px;
    background: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: -4rem;
    position: relative;
    z-index: 1;
    @media screen and (max-width: 1200px) {
      margin-top: 4rem;
    }
    
    

    h2 {
      color: #FFFFFF;
      font-size: 32px;
      font-weight: 700;
      font-family: futura-pt-bold;
      font-size: 32px;
      line-height: 43px;
    }
  }

  .jobs-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50%;
    width: 50%;
    background: white;
    margin: auto;
    margin-top: -4rem;
    @media screen and (max-width: 1200px) {
      justify-content: center;
      align-items: center;
      margin-top: -4rem;
      margin-bottom: 3rem;
      width: 70vw;
      padding: 3rem;
      padding-bottom: 6rem;
    }

    h3 {
      font-family: futura-pt-bold;
      font-size: 32px;
      line-heigth: 150%;
      font-weight: 700;
      margin-top: 8rem;
      margin-bottom: 5rem;
    }

    span {
      font-family: Asap;
      font-size: 16px;
      line-height: 150%;
    }
    
    button {
      margin-top: 4rem;
      background: #ffffff;
      border: 1px solid #000000;
      width: 180px;
      height: 50px;
      font-size: 18px;
      line-height: 24px;
      font-weight: 700;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }

  .arrow {
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
`

export default Jobs