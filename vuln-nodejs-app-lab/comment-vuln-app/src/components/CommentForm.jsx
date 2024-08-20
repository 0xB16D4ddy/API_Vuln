import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../redux/reducer/commentReducer";
import { Input, Button } from "antd";
import DOMPurify from "dompurify";

const CommentForm = () => {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (content.trim() && author.trim()) {
      // Sanitize the input before dispatching
      // const sanitizedContent = DOMPurify.sanitize(content);
      // const comment = { author: sanitizedAuthor, sanitizedComment };
      const sanitizedAuthor = DOMPurify.sanitize(author);
      const comment = { author: sanitizedAuthor, content };
      dispatch(addComment(comment));
      setAuthor("");
      setContent("");
    }
  };
  return (
    <div className="p-4">
      <Input
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Your name"
        className="mb-2"
      />
      <Input.TextArea
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your comment here"
        className="mb-2"
      />
      <Button type="primary" onClick={handleSubmit}>
        Submit Comment
      </Button>
    </div>
  );
};

export default CommentForm;
