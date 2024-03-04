import axios from "axios";



const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
//     baseURL: "https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

// "
})

export const getAllPosts = () => {
    return instance.get("/")
}

export const searchPosts = (q, _page = 1) => {
    return instance.get(`/?q=${q}&_limit=6&_page=${_page}`)
}