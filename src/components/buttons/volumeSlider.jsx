import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, Box } from "@chakra-ui/react";
import heart from '../asset/icon/Heart.png'

// kl pop upnya ditutup volumenya jadi 30% lagi
function VolSlider () {
    return (
        <Slider aria-label='slider-ex-4' defaultValue={30} my={3} width='60%' size='md'>
            <SliderTrack bg='red.100'>
                <SliderFilledTrack bg='tomato' />
            </SliderTrack>
            <SliderThumb boxSize={4}>
                <Box color='tomato' src={heart} />
            </SliderThumb>
        </Slider>
    )
}

export default VolSlider;