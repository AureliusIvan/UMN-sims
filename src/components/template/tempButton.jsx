import { Button } from '@chakra-ui/react'

function BtnTemplate(props) {
    return (
        <Button onClick={props.function}>
        {props.btnName}
        </Button>
    )
}

export default BtnTemplate;