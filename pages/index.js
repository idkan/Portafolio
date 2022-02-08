import Head from 'next/head'

export default function Home() {
	return (
		<>
			<Head>
				<title>Abraham SWE</title>
				<meta name="description" content="Abraham SWE Portfolio" />
				<link rel="icon" href="/favicon.ico" />
				<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet" />
			</Head>
			<div className="flex flex-col h-screen justify-between">
				<header className="h-10 bg-red-500"></header>
				<main className="mb-auto h-10 bg-green-500">
					<h1 className="text-3xl font-bold underline">
						Hello world!
					</h1>
				</main>
				<footer className="h-10 bg-blue-500"></footer>
			</div>
		</>
	)
}
