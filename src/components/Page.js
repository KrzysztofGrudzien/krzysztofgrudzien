import React from 'react';
import { Route } from 'react-router-dom';
import Main from '../pages/Main';
import Skills from '../pages/Skills';
import ITRoadMap from '../pages/ITRoadMap';
import Works from '../pages/Works';
import Lab from '../pages/Lab';
import Events from '../pages/Events';
import Contact from '../pages/Contact';
const Page = () => {
    return (
        <>
            <Route path='/' exact component={Main} />
            <Route path='/skills' component={Skills} />
            <Route path='/roadmap' component={ITRoadMap} />
            <Route path='/works' component={Works} />
            <Route path='/lab' component={Lab} />
            <Route path='/events' component={Events} />
            <Route path='/contact' component={Contact} />
        </>
    )
}

export default Page;