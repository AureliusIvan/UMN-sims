import { Box } from "@chakra-ui/react";
import { useState } from "react";
import Btn from './tempButton'
import Pop from './tempPopUp'

function Test1 () {
    const [pop, setPop] = useState(false);

    return (
        <Box>
            <Btn 
                content="C"
                function={() => setPop (!pop)}
            />
            {pop?
            <Pop 
                title="Ini test"
                content="content dari test"
                function={() => setPop(false)}
            /> : "" }
        </Box>
    )
}

export default Test1;