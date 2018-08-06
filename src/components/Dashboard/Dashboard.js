import React, { Component } from 'react'
import axios from "axios";
import {Link} from "react-router-dom";

export default class Dashboard extends Component {
state={
    search:'',
    posts:[]
}

handleSearch=(event)=>{
    this.setState({
        search:event
    })
}
componentDidMount=()=>{
    axios.get('/api/posts').then(res=>{
        this.setState({posts:res.data})
    })
}


// resetSearch=()=>{
//     if(this.state.search.length > 0){
//         axios.get(`/api/post/?title=${this.state.search}`).then(res=>{
//            this.setState({posts:res.data});
            
//         })
//     }
//     else{
//     axios.get('/api/posts').then(res=>{
//         this.setState({posts:res.data})
//     })
// }
//  this.setState({search:''})
// }

    render() {
        let posts=this.state.posts.map((post,i)=>{
            return (<Link to={`/post/${post.id}`} key={i}><div>{post.title} {post.username} {post.content} {post.profile_pic}</div></Link>)
        })
    
        return (
            <div className='Dashboard'>
                <input placeholder="search" onChange={
                    event=>this.handleSearch (event.target.value)} type='text'/>
                <button onClick={()=>this.resetSearch}>Search</button>
                {posts}
            </div>
        )
    }

}