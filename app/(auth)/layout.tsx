const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex min-h-screen bg-dotted-pattern w-full bg-cover bg-fixed bg-center justify-center items-center bg-primary-50">
			{children}
		</div>
	)
}

export default Layout
