import React from 'react'
import {Link} from "react-router-dom";
import {connect} from 'react-redux';

function Nav(props) {
    return (
        <div className="nav">
        <Link to = '/dashboard'><button>Home</button></Link>
        <Link to = '/new'><button>New Post</button></Link>
        <Link to = '/'><button>Logout</button></Link>
    
        
        </div>
    )
}
function mapStateToProps(state){
    return {
        username:state.username,
        profile_pic:state.profile_pic
    }
}

export default connect(mapStateToProps)(Nav);
