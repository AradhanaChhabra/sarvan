const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
	return <div className="px-[25px] flex flex-col pt-[18px]">{children}</div>;
};

export { Layout };
