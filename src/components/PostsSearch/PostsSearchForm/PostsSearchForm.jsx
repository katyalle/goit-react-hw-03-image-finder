import { Component } from "react";

import styles from "./PostsSearchForm.module.css"


class PostsSearchForm extends Component{
    state = {
        search: "",
        
    }
    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.prevntDefault();
        this.props.onsubmit({ ...this.state });
        this.setState({
            search:""
        })
    }
 
    render() {
        const { handleChange, handleSubmit } = this;
        const { search } = this.state;

        return (
            <form onSubmit={handleChange} className={styles.form}>

                <div className={styles.field}>
                  <input value={search} onChange={handleChange} type="text" name="search" placeholder="Enter search phrase" />
                </div>
                <button type="submit">Search</button>
            </form>
    )
     }
      }










export default PostsSearchForm;