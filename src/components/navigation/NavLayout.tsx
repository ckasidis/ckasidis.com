import { PropsWithChildren, useState } from 'react';
import { HiBars3 } from 'react-icons/hi2';
import DesktopSidebar from './DesktopSidebar';
import MobileSidebar from './MobileSidebar';

interface LayoutProps extends PropsWithChildren {
	current?: string;
}

const Layout: React.FC<LayoutProps> = ({ current, children }) => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<div>
			<MobileSidebar
				sidebarOpen={sidebarOpen}
				setSidebarOpen={setSidebarOpen}
				current={current}
			/>
			<DesktopSidebar current={current} />
			<div className="flex flex-1 flex-col md:pl-64">
				<div className="sticky top-0 z-10 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
					<button
						type="button"
						className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
						onClick={() => setSidebarOpen(true)}
					>
						<span className="sr-only">Open sidebar</span>
						<HiBars3 className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<main className="flex-1">
					<div className="py-6">
						<div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
							{children}
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default Layout;
