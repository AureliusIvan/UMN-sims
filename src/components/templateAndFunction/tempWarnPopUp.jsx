import { Wrap, WrapItem, Button, useToast } from "@chakra-ui/react"
import lala from "../asset/gif/eat.gif"

function Toast(props) {
    const toast = useToast()

    return (
		<Wrap>
			<WrapItem>
				<Button
				onClick={() =>
					toast({
						description: `${props.content}`,
						status: "warning",
						position : "bottom-start",
						// default durationnya 5 detik
						isClosable: true,
					})
				}
				>
					{props.title}
				</Button>
			</WrapItem>
		</Wrap>
    )
}

export default Toast