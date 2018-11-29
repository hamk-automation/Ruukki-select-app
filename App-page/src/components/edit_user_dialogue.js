import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { renderEditor } from './forms/render_funcs.js'
import Axios from 'axios'

class EditUserDialogue extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: null
        }

        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(values) {
        // if (!values.memo) {
        //     values.memo = ""
        // } else {
        //     values.memo = encodeURI(values.memo)
        // }
        // console.log(values)
        let data= this.props.db.data.find((array)=> array.id == values.id)
        values= {
            id: data.id,
            title: data.title,
            content: values.content,
            url: data.url
        }
        console.log(values)

        // values = {
        //     memo: values.memo,
        //     containerType: values.containerType,
        //     gpsCodeInput: {
        //         deviceId: values.deviceId,
        //         serialNumber: values.serialNumber,
        //         archived: false
        //     },
        //     gpsId: values.gpsId,
        //     containerId: values.containerId
        // }
        // let processInfo = this.props.process.data.find((array) => (array.displayName == "ContainerDetails Modify"));
        Axios.put(`http://127.0.0.1:10001/loopback/api/application-pages`,
            values,
            {headers: { 'Access-Control-Allow-Origin': '*' }},
            {
                withCredentials: true
            }
        ).then(function (response) {
            location.reload(true);
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.content) {
            this.setState({
                id: nextProps.id,
            })
            if (nextProps.id != this.state.id) {
                nextProps.initialize({
                    id: nextProps.id,
                    content: nextProps.content
                })
            }
        }

    }


    render() {
        const { handleSubmit, pristine, submitting } = this.props
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <div className="row">
                    <div className="col-12">
                        <Field
                            name="content"
                            label="Content"
                            type="text"
                            component={renderEditor}
                            rows="4"
                        />
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col">
                        <button type="submit" className="btn btn-primary float-right ml-2" disabled={submitting}><i className="fas fa-save"></i> Save</button>
                    </div>
                </div>
            </form>
        )
    }
}


function mapStateToProps(state) {
    return {
        forms: state.form,
        db: state.content
    };
}
export default reduxForm({
    form: 'ContainerTypeEdit'
})(
    connect(
        mapStateToProps
    )(EditUserDialogue)
)