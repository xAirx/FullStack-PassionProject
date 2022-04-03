import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

import { useGetPost } from './useRequest';

export default function PostTemplate() {
	const { id } = useParams();

	const { data, error, isLoading, isSuccess } = useGetPost(id);
	if (error) return <h1>Something went wrong!</h1>;
	if (isLoading) return <h1>Loading...</h1>;

	return (
		isSuccess && (
			<article className="Post">
				<h1>{data.title}</h1>
				<ReactMarkdown source={data.content} />
			</article>
		)
	);
}
