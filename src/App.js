//tools
import {BrowserRouter as AllRoutes, Route, Switch} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
// import {ReactQueryDevtools} from 'react-query/devtools';

//pages
import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product';
import Cart from './Pages/Cart/Cart';
//components
import Navbar from './Components/Navbar/Navbar';

const client = new QueryClient()
const App = () => {
  return (
    <QueryClientProvider client={client}>
      <AllRoutes>
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/product/:id' component={Product} />
            <Route exact path='/cart' component={Cart} />
            <Route><Home/></Route>
          </Switch>
      </AllRoutes>
      {/* <ReactQueryDevtools initialIsOpen={true}/> */}
    </QueryClientProvider>
  );
}

export default App;
