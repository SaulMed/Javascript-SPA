import Home from "../controllers/home.controller";
import Posts from "../controllers/posts.controller";
import notFound from "../controllers/404.controller";

const pages = {
    home: Home,
    posts: Posts,
    notFound: notFound
}

export {pages}