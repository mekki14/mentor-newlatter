
import { CheckIcon, SingleFeature } from './styledComponents';

const FeatureElement = ({ feature }: { feature: string }) => {
    return (
        <SingleFeature>
            <CheckIcon />
            {feature}
        </SingleFeature>
    )
}

export default FeatureElement