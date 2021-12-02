import './scss/style.scss';
import  Home from './pages/Home';
import  { About } from './pages/about';
import { Route, Switch } from 'react-router';
import { Gallery } from './pages/galleru';
import { Contact } from './pages/contact';
import { Blog } from './pages/blog';
import { BlogOne } from './pages/blog-one';

const App = () => {
  return (
    <div className='wrapper'>
      <Switch>
        <Route path='/about' component={About}/>
        <Route path='/gallery' component={Gallery}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/blog' component={Blog}/>
        <Route path='/blog-one' component={BlogOne}/>
        <Route path='/' component={Home}/>
      </Switch>
      
    </div>
  );
}

export default App;
