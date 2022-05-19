import Pop from '../../components/template/tempPopUp'
import GIF from '../../components/asset/gif/study.gif'

function studying() {
    return (
        <Pop 
			btnName="Study"
            image={GIF}
            alt='study'
        />
    )
}

export default studying