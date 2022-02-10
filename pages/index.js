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
				<header className="h-10 bg-white">
					<p className="text-3xl font-bold underline text-primary">
						Header Text
					</p>
				</header>
				<main className="mb-auto h-10 bg-white0">
					<p className="text-3xl font-bold underline text-primary">
						Main Content
					</p>
				</main>
				<footer className="h-10 bg-white">
					<p className="text-3xl font-bold underline text-secondary">
						Footer Content
					</p>
				</footer>
			</div>
		</>
	)
}
