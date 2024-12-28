import React from 'react';
import withRouter from '../HOC/withRouter';


class Card extends React.Component {

    state = {
        user: ''
    }

    componentDidMount(){   
        let user= this.props.router.params.user;  // Ahora lo obtenemos de router.params
        this.setState({user});
    }
    render(){
        const { user } = this.state;
        return(
            <div className='ui raised very padded text container segment'
            style={{marginTop: '80px'}}>
                <h3 className='ui header'>{user}</h3>
            </div>                
        );
    }
}

export default withRouter(Card);