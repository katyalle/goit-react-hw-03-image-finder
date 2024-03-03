import { Component } from "react";
import { getAllPosts } from "api/posts";
import PostsSearchList from "components/PostsSearch/PostsSearchList/PostsSearchList";
import axios from "axios";
import styles from "./posts.module.css";
import PostsSearch from "components/PostsSearch/PostsSearch";

class Posts extends Component {
    state = {
        posts: [],
        loading: false,
        error: null,
    }
    componentDidMount() {
this.setState({loading: true})

        getAllPosts()
            .then(({ data }) => {
                this.setState({
                    loading: false,
                    posts: data?.length ? data: []
                })
            })
            .catch(error => {
                this.setState({
                    loading: false,
                    error: error.message,
            })
        })
}


    render() {
       
        const { posts, loading, error } = this.state;
        <PostsSearchList />
        
        const elements = posts.map(({ id, title, body }) => <li key={id} className={styles.item}>
                                                            <h3>{title}</h3>
                                                            <p>{body}</p>
                                                            </li> );
                                                                
        
        
        return (

            <>
                {error && <p className={styles.error}>{error}</p>}
                {loading && <p>...Loading</p>}

                <PostsSearch/> 
             <ul className={styles.list}>
                {elements}
            </ul>
            </>

           
        )
    }
}

export default Posts;