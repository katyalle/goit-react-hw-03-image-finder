import { Component } from "react";
import { getAllPosts, searchPosts } from "api/posts";

import Modal from "components/Modal/Modal";
import Button from "components/Button/Button";
import PostsSearchForm from "./PostsSearchForm/PostsSearchForm";
import PostsSearchList from "./PostsSearchList/PostsSearchList";
import styles from "./posts-search.module.css"


class PostsSearch extends Component {
    state = {
        search:"",
        posts: [],
        loading: false,
        error: null,
        page: 1,
        modalOpen: false,
        postsDetails: {},
        
    }
   async componentDidUpdate(prevProps, prevState) {
        const { search, page } = this.state;
       if (search && (search !== prevState.search || page !== prevState.page)) {
           this.fetchPosts();
          
        }
    }

    async fetchPosts() {
        const { search, page } = this.state;
         try {
               this.setState({
               loading: true,
           });
               const { data } = await searchPosts(search, page);
               this.setState(({ posts }) => ({
                   posts: data?.length ? [...posts, ...data] : posts,
               }))
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
    
    handleSearch = ({ search }) => {
        this.setState.state({
            search,
            posts: [],
            page: 1,
    })}


      loadMore = () => {
        this.setState(({ page }) => ({ page: page + 1 }));
        
    }

    showModal = (title, body) => {
        this.setState({
            showModal: true,
            postsDetails: {
                title,
                body,
            }
    })
}

    clodeModal = () => {
        this.setState({
            modalOpen: false,
            postsDetails:{}
        })
    }
    
    render() {
        const { handleSearch, loadMore, showModal } = this;
        const { posts, loading, error,modalOpen,postsDetails } = this.state;
        const isPosts = Boolean(posts.length);
        
        
        return (

            <> 
                <PostsSearchForm onSubmit={handleSearch}/>
                 {error && <p className={styles.error}>{error}</p>} 
                {loading && <p>...Loading</p>}
                {/* {isPosts && <PostsSearchList showModal={showModal} items={props} />} */}
                {Boolean(posts.length) && <div className={styles.loadMoreWrapper}>
                 <Button onClick={loadMore} type="button">Load more</Button>   
             </div>
                }
                {modalOpen && <Modal close={this.clodeModal}>
                    <h2>{postsDetails.title}</h2>
                    <p>{postsDetails.body}</p>
                             </Modal>
                }
           
            </>
           
        )
    }
 }

export default PostsSearch;
//  return (
//         <>
//             <PostsSearchForm onSubmit={handleSearch} />
//             {error && <p className={styles.error}>{error}</p>}
//             {loading && <p>...Loading</p>}
//             {isPosts && <PostsSearchList items={posts} />}
//             {isPosts && <div className={styles.loadMoreWrapper}>
//                 <Button onClick={loadMore} type="button">Load more</Button>
//             </div>}
//         </>
//     )