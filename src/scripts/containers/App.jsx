
// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import {addItem, removeItem} from "./../actions/Todo";


// class App extends Component {

//     addItem = () => {
//         this.props.dispatch(addItem({
//             id: Math.random().toString(36).substring(7),
//             title: this.todoInput.value
//         }))
//         this.todoInput.value = "";
//     }

//     removeItem = (id) => {
//         this.props.dispatch(removeItem({id}));
//     }

//     initRef = (input) => {
//         this.todoInput = input;
//     }

//     render() {
//         let {todo} = this.props;
//         return(
//             <div>
//                 <header>Todo list</header>
//                 <input type="text" ref={this.initRef} placeholder="Write a task" />
//                 <button onClick={this.addItem}>Add</button>
//                 <section>
//                     <ul>
//                         {
//                             todo.map((task, index) => 
//                                 <li key={index}>{task.title}
//                                     <button onClick={this.removeItem.bind(this, task.id)}>
//                                         Del
//                                     </button>
//                                 </li>
//                             )
//                     }                        
//                     </ul>
//                 </section>
//             </div>

//         );
//     }
// }

// App.propTypes = {
//     todo: PropTypes.array,
//     dispatch: PropTypes.func
// }

// export default connect(({todo}) => todo)(App);
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import User from '../components/User';
import Page from '../components/Page';
import * as pageActions from '../actions/PageActions';


class App extends Component {
    render() {
        const { user, page } = this.props
        const { setYear } = this.props.pageActions
        return (
            <div>
                <User name={ user.name } />
                <Page photos={ page.photos } year={ page.year } setYear={setYear} />
            </div>
        )
    }
}
function mapStateToProps (state) {
    return{
        user: state.user,
        page: state.page
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
