import HomeContainer from '@components/Home/containers/HomeContainer';
import React, { useEffect, useState } from 'react';
import {
	BrowserRouter as Router,
	useLocation,
	Route,
	Routes,
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './styles/rootnavigation.style.css';
// /* eslint no-restricted-globals: ["off"] */

const RootNavigation = () => {
	const location = useLocation();
	return (
		<Routes location={location}>
			<Route path='/' element={<HomeContainer />} />
		</Routes>
	);
};

export default RootNavigation;
