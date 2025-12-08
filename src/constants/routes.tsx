import Home from '../(pages)/home';
import About from '../(pages)/about';
import Contact from '../(pages)/contact';
import Projects from '../(pages)/projects';
import Tools from '../(pages)/tools';
//@ts-ignore
export const routes: Record<string, () => JSX.Element> = {
    '/': Home,
    '/about': About,
    '/contact': Contact,
    '/projects': Projects,
    '/tools': Tools,
};