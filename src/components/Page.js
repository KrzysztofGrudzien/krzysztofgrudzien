import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../pages/Main';
import Skills from '../pages/Skills';
import ITRoadMap from '../pages/ITRoadMap';
import Works from '../pages/Works';
import Lab from '../pages/Lab';
import Events from '../pages/Events';
import Contact from '../pages/Contact';
import ErrorPage from '../pages/ErrorPage';
const Page = () => {
    return (
        <>
            <Switch>
                <Route path='/' exact component={Main} />
                <Route path='/skills' component={Skills} />
                <Route path='/roadmap' component={ITRoadMap} />
                <Route path='/works' component={Works} />
                <Route path='/lab' component={Lab} />
                <Route path='/events' component={Events} />
                <Route path='/contact' component={Contact} />
                <Route component={ErrorPage} />
            </Switch>
        </>
    )
}

export default Page;