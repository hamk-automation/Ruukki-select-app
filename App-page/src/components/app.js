import React from 'react'
import '../css/styles.css'
import Header from './header.js'
import Footer from './footer.js'
import Body from './body.js'
import {
  getContent
} from '../redux/actions'
import { connect } from 'react-redux';

class Application extends React.Component {
    constructor(props) {
      super(props);
    }
    componentWillMount(){
      this.props.getContent();
    }
    render() {
      let body= null;
      if(this.props.content.data){
        body= <Body />
      }
      return (
        <div>
          <div className="container-fluid">
            <Header />
          </div>
          {body}
          <div className="container-fluid">
            <hr />
            <Footer />
          </div>
        </div>
      )
    }
  }

function mapStateToProps(state) {
  return {
    content: state.content
  }
}
export default connect(mapStateToProps,{
  getContent
}
)(Application)
  