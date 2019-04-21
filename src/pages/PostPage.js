import React, { Component } from 'react';
import PostCard from "./PostCard";

const PostImages = [
    "https://images.unsplash.com/photo-1555817128-342e1c8b3101?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1555654286-78bd0a52e90c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1555793140-507591dcf55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1497729873038-8a30b0cf4fa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1943&q=80",
    "https://images.unsplash.com/photo-1495695911455-19054a55f92f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1555817128-342e1c8b3101?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1555654286-78bd0a52e90c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1555793140-507591dcf55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1497729873038-8a30b0cf4fa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1943&q=80",
    "https://images.unsplash.com/photo-1495695911455-19054a55f92f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1555817128-342e1c8b3101?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1555654286-78bd0a52e90c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1555793140-507591dcf55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1497729873038-8a30b0cf4fa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1943&q=80",
    "https://images.unsplash.com/photo-1495695911455-19054a55f92f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1555817128-342e1c8b3101?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1555654286-78bd0a52e90c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1555793140-507591dcf55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1497729873038-8a30b0cf4fa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1943&q=80",
    "https://images.unsplash.com/photo-1495695911455-19054a55f92f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
]

class PostPage extends Component {
  render() {
    return (
        <div className="PostPage">
           <div className="container">
               {
                   PostImages.map((img, i) => <PostCard image = {img}/>)
               }
           </div>
        </div>
    );
  }
}

export default PostPage;
