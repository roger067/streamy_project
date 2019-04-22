import React from 'react';
import { Field, reduxForm } from 'redux-form';

class streamCreate extends React.Component {

    renderError({ touched, error }) {
        if(touched && error){
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

    onSubmit(formValues) {
        console.log(formValues)
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field type="text" name="title" component={this.renderInput} placeholder="Título..." />
                <Field type="text" name="description" component={this.renderInput} placeholder="Descrição..." />
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
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

export default reduxForm({
    form: 'streamCreate',
    validate
})(streamCreate);