import React from 'react'
import Radium from 'radium'
import Items from './card.js'
import { connect } from 'react-redux';

class Body extends React.Component {
    constructor() {
        super()
        this.state={
            URL: '',
            appRows:[]
            }
    }

    render() {
        const listItems = this.props.content.data.map((app) =>
            <Items key={app.id} img= {app.icon} url= {app.url} title={app.title} id={app.id} contents={app.content}/>
        );
        return (
            <div className="container-fluid">
                <div className="row">
                    {listItems}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        content: state.content,
    };
}
export default connect(
    mapStateToProps
) (Radium(Body))
