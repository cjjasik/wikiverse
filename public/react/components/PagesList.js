import React, {useState, useEffect}  from 'react';
import { Page } from './Page';

export function PagesList({pages}) {
	const[currentPageTitle, setCurrentPageTitle] = useState('');

	return <>
		{
			pages.map((page, idx) => {
				return <Page 
					page={page} 
					key={idx} 
					currentPageTitle={currentPageTitle} 
					setCurrentPageTitle={setCurrentPageTitle}
				/>
			})
		}
	</>
} 
