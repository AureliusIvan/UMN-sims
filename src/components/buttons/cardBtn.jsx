import { Box
} from "@chakra-ui/react";
import Btn from "./Btn";

export function CreateBtn(x){
    return(
        <Box>
            <Btn
                id = {x.id}
                content={x.content}
            />
        </Box>
    );
}
