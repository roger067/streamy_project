import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class streamList extends React.Component {

    componentDidMount(){
        this.props.fetchStreams();
    }

    render(){
        return (
            <div>streamList</div>
        );
    }
}

export default connect(null, { fetchStreams })(streamList);