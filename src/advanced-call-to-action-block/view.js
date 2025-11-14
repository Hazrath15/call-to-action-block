// @ts-ignore
import { createRoot } from 'react-dom/client';

import './style.scss';
import BlockName from './Components/Frontend/BlockMain';

document.addEventListener('DOMContentLoaded', () => {
	const blockNameEls = document.querySelectorAll('.wp-block-create-block-advanced-call-to-action-block');
    
	blockNameEls.forEach(blockNameEl => {
		const attributes = JSON.parse(blockNameEl.dataset.attributes);
        console.log({attributes});
		createRoot(blockNameEl).render(<>
			<BlockName attributes={attributes} />
		</>);

		blockNameEl?.removeAttribute('data-attributes');
	});
});