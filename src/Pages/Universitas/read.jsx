import Pop from '../../components/template/tempPopUp'
import GIF from '../../components/asset/gif/study.gif'

function reading() {
    return (
        <Pop 
			btnName="Read books"
            image={GIF}
            alt='reading'
        />
    )
}

export default reading