import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { CheckIcon, SingleFeature } from './styledComponents';

const FeatureElement = ({ feature }) => {
    return (
        <SingleFeature>
            <CheckIcon />
            {feature}
        </SingleFeature>
    )
}

export default FeatureElement