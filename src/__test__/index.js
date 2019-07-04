import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';


export function renderComponent(comp) {

    const component = renderer.create(<Router>{comp}</Router>)
    return component

}