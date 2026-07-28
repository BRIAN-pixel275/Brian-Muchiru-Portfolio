const Footer = () => {
	return (
		<footer className="mt-20 w-full text-center text-sm text-slate-400">
			<div className="mx-auto max-w-7xl px-6 py-8">
				© {new Date().getFullYear()} Brian Muchiru — Built with React & Tailwind CSS
			</div>
		</footer>
	);
};

export default Footer;
