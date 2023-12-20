import FeatureElement from './featureElement'
import { FeaturesContainer } from './styledComponents'

const FeaturesList = ({ features }: { features: string[] }) => {
    return (
        <FeaturesContainer>
            {
                features.map((feature) => <FeatureElement key={feature} feature={feature} />)
            }
        </FeaturesContainer>
    )
}

export default FeaturesList