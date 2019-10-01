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
        <a href="/fi/jobs">
        <button>Työpaikat <img src={rightArrow} alt="" className="arrow" /></button>
        </a>
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
    
    width: 22rem;
    height: 10rem;
    background: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: -10rem;
    position: relative;
    z-index: 1;
    @media screen and (max-width: 1200px) {
      margin-left: auto;
      justify-content: center;
      align-items: center;
      margin-top: 2rem;
      margin-bottom: -2rem;
      width: 15rem;
      height: 6rem;
      padding: 0px;
      margin-top: 4rem;
      
    }
    
    

    h2 {
      color: #FFFFFF;
      font-weight: 700;
      font-family: futura-pt-bold;
      font-size: 2rem;
      line-height: 43px;
    }
  }

  .jobs-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 50%;
    background: white;
    margin: auto;
    margin-top: -4rem;
    @media screen and (max-width: 1200px) {
      justify-content: center;
      align-items: center;
      margin-top: -3rem;
      margin-bottom: 3rem;
      width: 70vw;
      padding: 10vw;
      padding-bottom: 6rem;
    }

    h3 {
      font-family: futura-pt-bold;
      font-size: 1.6rem;
      line-heigth: 150%;
      font-weight: 700;
      margin-top: 8rem;
      margin-bottom: 5rem;
    }

    span {
      font-family: Asap;
      font-size: 1rem;
      line-height: 150%;
      margin: auto 2rem;
    }
    
    button {
      background: #ffffff;
      border: 1px solid #000000;
      width: 15rem;
      height: 4rem;
      font-size: 1rem;
      line-height: 24px;
      font-weight: 700;
      display: flex;
      padding:10px;
      justify-content: space-around;
      align-items: center;
      margin-bottom:3rem;
      margin-top:6rem;
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