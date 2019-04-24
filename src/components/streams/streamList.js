import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { Link } from 'react-router-dom';

class streamList extends React.Component {

    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdmin(stream) {
        if (stream.userId === this.props.currentUserId) {
            return (
                <div className="row mt-2">
                    <div className="col-md-6 col-sm-12">
                        <button className="w-100 btn btn-sm btn-primary">Edit</button>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <button className="w-100 btn btn-sm btn-danger">Delete</button>
                    </div>
                </div>
            );
        }
    }

    renderButtonCreate() {
        if (this.props.isSignedIn) {
            return <Link to="streams/new" className="btn btn-info"><i className="fas fa-plus"></i> Adicionar Stream</Link>
        }
    }

    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div className="col-sm-4 col-md-3" key={stream.id}>
                    <div className="card card-hover mb-4">
                        <div className="card-header text-center py-4">
                            <div className="box-cam">
                                <i className="fas fa-camera"></i>
                            </div>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{stream.title}</h5>
                            <div className="card-text">{stream.description}</div>
                            {this.renderAdmin(stream)}
                        </div>
                    </div>
                </div>
            );
        })
    }

    render() {
        return (
            <div id="stream-list">
                <div className="my-5 d-flex justify-content-between align-items-center">
                <div>
                    <h2>Streams</h2>
                    <div className="divisor"></div>
                </div>

                    {this.renderButtonCreate()}

                </div>
                <div className="mt-3 row">
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { fetchStreams })(streamList);