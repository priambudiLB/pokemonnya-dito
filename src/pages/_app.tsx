// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app';
import {
	ApolloClient,
	ApolloProvider,
	InMemoryCache,
} from '@apollo/react-hooks';
import '../styles/globals.css';
import { PokemonProvider } from '../context/PokemonContext';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
	const client = new ApolloClient({
		uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
		cache: new InMemoryCache(),
	});

	return (
		<ApolloProvider client={client}>
			<PokemonProvider>
				<Head>
					<link
						rel='stylesheet'
						href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
					/>
					<link
						rel='stylesheet'
						href='https://fonts.googleapis.com/icon?family=Material+Icons'
					/>
				</Head>
				<Component {...pageProps} />
			</PokemonProvider>
		</ApolloProvider>
	);
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
