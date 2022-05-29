import React from 'react';
import { ScreenCapture } from 'react-screen-capture';
import { Flex, Center, Box } from '@chakra-ui/react';

class SS extends React.Component {
  state = {
    screenCapture: '',
  };

  handleScreenCapture = screenCapture => {
    this.setState({ screenCapture });
  };

  handleSave = () => {
    const screenCaptureSource = this.state.screenCapture;
    const downloadLink = document.createElement('a');
    const fileName = 'react-screen-capture.png';

    downloadLink.href = screenCaptureSource;
    downloadLink.download = fileName;
    downloadLink.click();
  };

  render() {
    const { screenCapture } = this.state;

    return (
      <ScreenCapture onEndCapture={this.handleScreenCapture}>
        {({ onStartCapture }) => (
          <div>
            <button onClick={onStartCapture}>Capture</button>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              distinctio exercitationem a tempore delectus ducimus
              necessitatibus dolor voluptatum aut est quaerat aspernatur, vero
              quod aperiam odio. Exercitationem distinctio in voluptates?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
              molestiae deserunt voluptas, labore a expedita error eligendi sunt
              fugit, nesciunt ullam corrupti quas natus, officia rerum? Officia
              cum amet quidem.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat,
              iusto repellat quae quos in rerum sunt obcaecati provident placeat
              hic saepe possimus eaque repellendus consequuntur quisquam nihil,
              sit ullam ratione.
            </p>
            <center>
              <img src={screenCapture} alt="react-screen-capture" />
              <p>
                {screenCapture && (
                  <button onClick={this.handleSave}>Download</button>
                )}
              </p>
            </center>
          </div>
        )}
      </ScreenCapture>
    );
  }
}

function ScrenShot() {

    
  return (
    <Box
      borderRadius={'10px'}
      padding={'10px'}
      position={'absolute'}
      left="0"
      right={'0'}
      margin={'auto'}
      transform="translateY(10px)"
      height={'100px'}
      width="270px"
      bgColor={'red.200'}
    >
      <Center>Profile</Center>
      <Flex>Nama : </Flex>
      <Flex>Jurusan : </Flex>
      <Flex>Playtime : </Flex>
    </Box>
  );
}

export default ScrenShot;
