import { Component } from "react";
import { getAllPosts, searchPosts } from "api/posts";
import axios from "axios";
import PostsSearchForm from "./PostsSearchForm/PostsSearchForm";
import PostsSearchList from "./PostsSearchList/PostsSearchList";
import styles from "./posts-search.module.css"


class PostsSearch extends Component {
    state = {
        search:"",
        posts: [],
        loading: false,
        error: null,
    }
   async componentDidUpdate(prevProps, prevState) {
        const { search } = this.state;
       if (search && search !== prevState.search) {
           this.setState({
                loading: true,
            })
           try {
               const { data } = await searchPosts(search);
               this.setState({
                   posts: data?.length ? data : []
               })
           }
           catch (error) {
               this.setState({
                   error: error.message
               })
           }
           finally {
               this.setState({
                   loading: false,
               })
           }
        }
 }
    handleSearch = ({ search }) => {
        this.setState.state({
        search,
    })
    }
    

    render() {
        const { handleSearch } = this;
        const { posts, loading, error } = this.state;
        
        return (

            <> 
                <PostsSearchForm onSubmit={handleSearch}/>
                 {error && <p className={styles.error}>{error}</p>} 
                {loading && <p>...Loading</p>}
           
            </>/* <PostsSearchList /> */
           
        )
    }
 }

export default PostsSearch;