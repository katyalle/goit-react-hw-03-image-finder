
import styles from "./PostsSearcList.module.css"


const PostsSearchList = ({ items }) => {
    const { posts, loading, error } = this.state;
        const elements = posts.map(({ id, title, body }) => <li key={id} className={styles.item}>
                                                            <h3>{title}</h3>
                                                            <p>{body}</p>
        </li>);
    
    return (
        <>
            <ul className={styles.list}> 
                {elements}
            </ul> 
        </>
        
         
         
    )
}
export default PostsSearchList;