import { Button, Para } from './styledComponents'

const CustomButton = ({ title, onClick }: { title: string, onClick: () => void }) => {
    return (
        <Button onClick={onClick}>
            <Para>{title}
            </Para>
        </Button>
    )
}

export default CustomButton