import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions'

class streamCreate extends React.Component {

    renderError({ touched, error }) {
        if (touched && error) {
            return <div className="invalid-feedback">{error}</div>
        }
    }

    renderInput = ({ input, type, placeholder, meta }) => {
        const classInput = `form-control ${meta.touched && meta.error ? 'is-invalid' : ''}`
        return (
            <div className="form-group">
                <input {...input} type={type} className={classInput} placeholder={placeholder} />
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit = formValues => {
        this.props.createStream(formValues)
    }

    render() {
        return (
            <div className="row">
                <div className="offset-sm-3 col-sm-6">
                    <div className="card p-3 mt-5">
                        <h1>Add Stream</h1>
                        <hr />
                        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                            <Field type="text" name="title" component={this.renderInput} placeholder="Título..." />
                            <Field type="text" name="description" component={this.renderInput} placeholder="Descrição..." />
                            <div className="d-flex justify-content-center">
                                <button type="submit" className="my-2 w-50 btn btn-lg btn-danger">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const validate = (formValues) => {
    const errors = {}
    if (!formValues.title) {
        errors.title = 'Digite o título, por favor!'
    }
    if (!formValues.description) {
        errors.description = 'Digite a descrição, por favor!'
    }
    return errors;
}

const formWrapped = reduxForm({
    form: 'streamCreate',
    validate
})(streamCreate);

export default connect(null, { createStream })(formWrapped);