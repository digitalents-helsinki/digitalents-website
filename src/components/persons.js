import React from 'react'
import styled from 'styled-components'

const personData = {
  persons: [
    {
      name: 'Vesa Jaakola',
      title: 'Project Manager',
      email: 'vesa.jaakola@hel.fi',
      phone: '040 7179121',
    },
    {
      name: 'Karoliina Leisti',
      title: 'Head of Ad Agency',
      email: 'karoliina.leisti@digitalentshelsinki.fi',
      phone: '040 522 4296',
    },
    {
      name: 'Ari Huotari',
      title: 'Planning Officer',
      email: 'ari.huotari@digitalentshelsinki.fi',
      phone: 'puhelin',
    },
    {
      name: 'Seppo Rouhiainen',
      title: 'Head of ICT',
      email: 'seppo.rouhiainen@digitalentshelsinki.fi',
      phone: '040 4871644',
    },
    {
      name: 'Veikko Hiiri',
      title: 'Projektikoordinaattori<br>6Aika Digipore',
      email: 'sähköposti',
      phone: 'puhelin',
    },
    {
      name: 'Tarja Kurvinen',
      title: 'Projektikoordinaattori<br>6Aika Digipore',
      email: 'tarja.kurvinen@hel.fi',
      phone: '040 669 2530'
    }
  ]
}

const Persons = () => {
  const personItems = personData.persons.map((n, index) => (
    <PersonWrapper>
      <h2>{n.name}</h2>
      <p>{n.title}</p>
      <p>{n.email}</p>
      <p>{n.phone}</p>
    </PersonWrapper>
  ))

  return (
    <PersonsWrapper>
      {personItems}
    </PersonsWrapper>
  )
}

const PersonsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  background-color: #f4f4f4;
`

const PersonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
`

export default Persons