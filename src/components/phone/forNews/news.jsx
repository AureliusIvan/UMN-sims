import { Box, Image, Text, Button, Flex } from '@chakra-ui/react';

import React from 'react';
import axios from 'axios';

class News extends React.Component {
	state = {
		datas: [],
		isLoading: true,
		errors: null
	};

	Databerita() {
    axios
	.get(
        'https://newsapi.org/v2/top-headlines?country=id&apiKey=420fe909db2c44c8b9cead0dc4947087'
	)

	.then(response =>
        response.data.articles.map(
			newsdata => ({
            name: `${newsdata.source.name}`,
            title: `${newsdata.title}`,
            description: `${newsdata.description}`,
            content: `${newsdata.content}`,
            image: `${newsdata.urlToImage}`,
            create: `${newsdata.publishedAt}`,
			src:`${newsdata.url}`
			})
        )
	)

	.then(datas => {
        this.setState({
            datas,
            isLoading: false
		},);
	})

	.catch(error => this.setState({ error, isLoading: false }));
	}

	componentDidMount() {
		this.Databerita();
	}

	render() {
		const { isLoading, datas } = this.state;
		return (
			<React.Fragment>	
				{!isLoading ? (
					datas.map(data => {
						const {
							name,
							title,
							description,
							image,
							content,
							create,
							src
						} = data;
					
					return (
						<Box key={data.title}>
							<Box>
								<Text>{title}</Text>
								<Image className='Image-fluid' src={image} alt='images' />
								<Text>{create}</Text>
								<Text>{description}</Text>
								<Text>{name}</Text>
								<Text>{content}</Text>
								<Flex justify='center'>
									<Button size='sm' fontWeight='light' a={src}>Read More</Button>
								</Flex>
							</Box>
						</Box>
					);
					})
				) : 

				(
					<Box>
						<Text 
							align='center'
							my='auto'
						>News Loading...</Text>
					</Box>
				)
			}
			</React.Fragment>
		);
	}
}

export default News;