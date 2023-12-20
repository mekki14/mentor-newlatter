import React from 'react'
import { CheckIcon, ContentWrapper, H1, MessageContainer, Para } from '../components/styledComponents'
import { messageData } from '../data'
import CustomButton from '../components/CustomButton'

const SuccessMessage = () => {
    return (
        <MessageContainer>
            <ContentWrapper>
                <CheckIcon size={58} />

                <H1>{messageData.title}</H1>
                <Para>
                    A confirmation email has been sent to <strong>ash@loremcompany.com.</strong>
                    Please open it and click the button inside to confirm your subscription.

                </Para>
            </ContentWrapper>
            <CustomButton title={messageData.button} onClick={() => null} />
        </MessageContainer>
    )
}

export default SuccessMessage