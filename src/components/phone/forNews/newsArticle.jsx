import React from "react";
import { Box, Text, Flex, Image, Button } from "@chakra-ui/react"

function NewsArticle({ data }) {
  return (
    <Box>
        <Text>{data.title}</Text>
        <Image src={data.urlToImage} alt='images' />
        <Text>{data.author}</Text>
        <Text>{data.publishedAt}</Text>
        <Text>{data.description}</Text>
        <Text>{data.source.name}</Text>
        <Text>{data.content}</Text>
        <Flex justify='center'>
            <Button size='sm' fontWeight='light' href={data.url}>Read More</Button>
        </Flex>
    </Box>
  );
}

export default NewsArticle

// export default NewsArticle;
//     <div className="news">
//       <h1 className="news__title">{data.title}</h1>
//       <p className="news__desc">{data.description}</p>
//       <span className="news__author">{data.author}</span> <br />
//       <span className="news__published">{data.publishedAt}</span>
//       <span className="news__source">{data.source.name}</span>
//     </div>