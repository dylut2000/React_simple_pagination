import React from "react";

const Posts = ({posts, loading}) => {
    // shows when posts are not ready
    // (you can use a spinner or anything else you want)
    if (loading) {
        return <h2>Loading</h2>;
    }

    return (
        <ul className='list-group mb-4'>
            {
                posts.map((post) => (
                    <li key={post.id} className='list-group-item mb-3'>
                        {post.title}
                    </li>
                ))
            }
        </ul>
    );
};

export default Posts;