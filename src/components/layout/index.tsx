const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
	return (
		<div className="flex flex-col justify-between h-[100lvh] overflow-hidden">
			{children}
		</div>
	);
};

export { Layout };
