import { useState } from 'react';
import HorizontalDrawer from '../../components/widgets/HorizontalDrawer';

const Library: React.FC = () => {
	const [contentSize, setContentSize] = useState<'default' | 'compact' | 'full'>('default');
	return (
		<div className="bg-accent">
			<HorizontalDrawer size={contentSize} title="Library" position="left" onClick={() => {}}>
				<div className="flex flex-col gap-4">
					<button onClick={() => setContentSize('default')} className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition">
						Default
					</button>
					<button onClick={() => setContentSize('compact')} className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition">
						Compact
					</button>
					<button onClick={() => setContentSize('full')} className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition">
						Full
					</button>
				</div>
			</HorizontalDrawer>
		</div>
	);
};

export default Library;
