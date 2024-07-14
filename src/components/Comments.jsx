import  { useEffect, useState } from 'react';
import { getCommentsByPostId } from '../services/api';

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const comments = await getCommentsByPostId(postId);
      setComments(comments);
    };

    fetchComments();
  }, [postId]);

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">Comments</h2>
      {comments.map(comment => (
        <div key={comment.id} className="mb-2 p-4 bg-gray-100 shadow rounded">
          <h3 className="font-bold">{comment.name}</h3>
          <p className="text-sm">{comment.body}</p>
          <p className="text-sm text-gray-500">- {comment.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
