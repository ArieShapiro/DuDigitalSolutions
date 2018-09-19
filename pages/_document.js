import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render () {
		return (
			<html>
			<Head>
				<link href="https://fonts.googleapis.com/css?family=Barlow:300,400,700|Open+Sans:300,400,700"
				      rel="stylesheet"/>
				<link rel="stylesheet" href="/_next/static/style.css"/>
				<link rel="icon" href="https://www.du-agentur.at/favicon.ico" type="image/x-icon"/>
			</Head>
			<body>
				<Main/>
				<NextScript/>
			</body>
			</html>
		);
	}
}
