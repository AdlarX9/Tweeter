import { useState, useEffect } from 'react';
import PostTweet from '../components/PostTweet';
import ZoneTweets from '../components/ZoneTweets';
import io from 'socket.io-client'



const Home = () => {
	const [tweets, setTweets] = useState(null);
	const [loading, setLoading] = useState(true);
	
	useEffect(() => {
		const getTweet = async () => {
			fetch(`${import.meta.env.VITE_API_URL}/tweets`)
			.then(response => {
				if (!response.ok) {
					throw new Error(`Erreur HTTP : ${response.status}`);
				}
				return response.json()
			})
			.then(data => {
				setTweets(data)
				setLoading(false);
			})
			.catch(err => {
				console.log(err);
			})
		};

		getTweet();
		
		const socket = io(import.meta.env.VITE_API_URL);
		socket.on('refreshTweet', () => getTweet());
	}, []);

	return (
		<>
			<PostTweet />
			{loading ? <p>Loading...</p> : <ZoneTweets tweets={tweets ?? []} />}
		</>
	);
};

export default Home;