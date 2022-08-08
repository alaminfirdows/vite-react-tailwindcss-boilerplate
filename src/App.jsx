function App() {
	return (
		<div className='bg-gray-50 grid w-screen h-screen place-content-center text-center'>
			<h2 className='text-2xl font-semibold mb-4'>Vite-React-Tailwind</h2>
			<p>
				Just another boilerplate for
				<a href='https://vitejs.dev/'>Vite.js</a>,
				<a href='https://reactjs.org/'>React.js</a> and
				<a href='https://tailwindcss.com/'>Tailwindcss</a>
			</p>

			<div className='bg-zinc-100 border-zinc-200 border rounded px-6 py-4 text-sm font-mono mt-14'>
				git@github.com:com:alaminfirdows/vite-react-tailwindcss-boilerplate.git
			</div>

			<div className='mt-6'>
				<button className='github'>
					<span className='font-semibold'>View on</span>
					<img
						src='https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png'
						className='h-4'
					/>
				</button>
			</div>
		</div>
	);
}

export default App;
