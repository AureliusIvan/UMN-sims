import { Button } from '@chakra-ui/react'

function BtnTemplate(props) {
    return (
        <Button onClick={props.function} id={props.id}>
        {props.content}
        </Button>
    )
}

export default BtnTemplate;