import { Box
} from "@chakra-ui/react";
import { CreatePop } from "../PopUp/CardPop";
import Btn from "./Btn";

export function CreateBtn(x){
    return(
        <Box>
            <Btn
                function = {x.function}
                id = {x.id}
                content={x.content}
            />
        </Box>
    );
}

export function PauseBtn(x){
    return(
        <Box>
            <Btn
                function = {<CreatePop></CreatePop>}
                id = {x.id}
                content={x.content}
            />
        </Box>
    );
}
