import React, { useContext } from "react";
import { Box, Text } from "@chakra-ui/react";
import { NewsContext } from "./newsContext";
import NewsArticle from "./newsArticle";

function News() {
	const { data } = useContext(NewsContext);
	console.log(data);
	return (
    <Box>
		<Box>
        {data
			? 	data.articles.map((news) => (
					<Box>
						<NewsArticle data={news} key={news.url} />
					</Box>
				))

			// () => {
			// 	setInterval(() => {
					
			// 	}, 2000);
			// 	clearInterval();
			// }
				
			: (
			<Text align='center' my='auto'>
				News Loading...
			</Text>
			)
        }
      </Box>
    </Box>
  );
}

export default News;