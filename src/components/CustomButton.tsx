import React from 'react'
import { Button, Para } from './styledComponents'

const CustomButton = ({ title, onClick }) => {
    return (
        <Button onClick={onClick}>
            <Para>{title}
            </Para>
        </Button>
    )
}

export default CustomButton