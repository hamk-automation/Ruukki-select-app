import React from 'react'
import Radium from 'radium'
import Edit from './edit_user_dialogue.js'
import { connect } from 'react-redux';
import AppList from './appList.js'

const styles = {
    'cardWidth': {
        width: '18rem',
        height: '400px'
        // ':hover': {
        //     cursor: 'pointer',
        //     backgroundColor: '#f33a20',
        //     color: 'white'
        // }
    },
    'app-col':{
        padding: '0px',
        borderRadius: '10px'
    }
}
class Items extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            selectedContent: 0,
            content: null
        }
        this.onClickAppLink = this.onClickAppLink.bind(this);
        this.onClickEditCard = this.onClickEditCard.bind(this);

    }
    onClickAppLink() {
        window.open(this.props.url)
    }
    onClickEditCard(id) {
        let data = this.props.content.data.find((array) => (array.id == id))
        this.setState({ selectedContent: id,  content: data.content })
    }
    
    renderEditUserModal() {
        return (
            <div id="edit-user-modal" className="modal fade" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document" style={{ maxWidth: '1000px' }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Editor note</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body container">
                            <Edit id={this.state.selectedContent}
                                  content={this.state.content} 
                                  />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    render() {
        let img= AppList.find((array)=> array.id== this.props.title).icon;

        return (
            <div key={this.props.key}  className="col-xl-3 col-lg-4 col-md-6 mt-3 mb-3" style={styles['app-row']}>
                    <div className="card" style={styles['cardWidth']} >
                    <img className="card-img-top" src={img} style={{ height: '180px' }} alt="Card image cap"></img>
                        <div className="card-body d-flex flex-column">
                        <div className="card-text" dangerouslySetInnerHTML={{ __html: this.props.contents }}></div>
                        <div className="row mt-auto">
                        <button type="button" className="btn btn-sm btn-outline-danger col" onClick = {(e) => this.onClickAppLink(this.props.url)}>Go to site</button>
                        <p className="col text-right mt-2"><a href="javascript:;"
                            data-toggle="modal"
                            data-target="#edit-user-modal"
                            onClick={() => {
                                this.onClickEditCard(this.props.id)
                            }}
                        >Edit</a></p>
                        </div>
                        </div>
                    </div>
                    {this.renderEditUserModal()}
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
)(Radium(Items))
// onClick = {(e) => this.onClickAppLink(this.props.URL)}