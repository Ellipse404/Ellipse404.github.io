import React from 'react';
import bioHazard2 from '../../assets/icons8-biohazard-100.png'
import GoogleIcon from '../../assets/googleIcon.png'

export function BioHazard({ className, title }) {
  return (
    <img src={bioHazard2} alt="icon" />
  )
}

export function GoogleLogo({ className, title }) {
  return (
    <img src={GoogleIcon} alt="icon" />
  )
}