import { Wrap, Button, WrapItem, useToast } from "@chakra-ui/react"

function Toast() {
    const toast = useToast()

    return (
		<Wrap>
			<WrapItem>
				<Button
				onClick={() =>
					toast({
						title: "toast",
						status: "warning",
						position : "bottom-start",
						// default durationnya 5 detik
						isClosable: true,
					})
				}
				>
					Tes Roti Panggang
				</Button>
			</WrapItem>
		</Wrap>
    )
}

export default Toast