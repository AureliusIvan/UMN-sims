import React, { useContext } from "react";
import { Box, Skeleton, Stack } from "@chakra-ui/react";
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
			: (
			<Stack>
				<Skeleton height="44px" />
				<Skeleton height="44px" />
				<Skeleton height="44px" />
				<Skeleton height="44px" />
				<Skeleton height="44px" />
				<Skeleton height="44px" />
			</Stack>
			)
        }
      </Box>
    </Box>
  );
}

export default News;