import { styled } from '@mui/material'
import React from 'react'

interface IProps {
    children: React.ReactNode,
    color?: string
}
const ButtonStyled = styled('div')(({color}) => ({
    border: `1px solid ${color ? 'blue' : '#ebebeb'}`,
    color: `${color ? '#fff' : '#666'}`,
    minWidth: '50px',
    textTransform: 'none',
    padding: '5px 10px',
    display: "inline-block",
    borderRadius: "5px",
    textAlign: "center",
    lineHeight: "1.5",
    fontSize: ".875rem",
    backgroundColor: `${color ? 'blue' : ''}`,
    cursor: "pointer",
    transition: 'all 0.3s ease',
    "&:hover" : {
        border: `1px solid ${color ? 'blue' : '#000'}`,
        backgroundColor: `${color ? 'transparent' : "inherit"}`,
        color: `${color ? 'blue' : '#666'}`,
    }
}));

const IButton = (props: IProps) => {
  return (
    <ButtonStyled
        {...props}
    >
        {props.children}
    </ButtonStyled>
  )
}

export default IButton
