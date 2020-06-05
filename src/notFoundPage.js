import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from './assets/images/404.png';
class NotFoundPage extends React.Component{
    render(){
        return <div>
            <img src={PageNotFound} className="img-responsive" alt='Page Not Found' />
            <p style={{textAlign:"center"}}>
              <Link to="/">Go to Home </Link>
            </p>
          </div>;
    }
}
export default NotFoundPage;