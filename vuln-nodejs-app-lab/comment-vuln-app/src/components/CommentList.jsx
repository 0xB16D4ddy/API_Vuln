import { List } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const CommentList = () => {
  // Adjust the selector according to your state structure
  const { Comments } = useSelector((state) => state.commentReducer);
  const comments = Comments;

  return (
    <div className="p-4">
      <List
        header={<div>Comments</div>}
        bordered
        dataSource={comments}
        renderItem={(comment) => (
          <List.Item key={comment.id}>
            <div>
              <p>
                <strong>{comment.author}</strong> - 
                <em>{" "+comment.created_at}</em>
              </p>
              <p dangerouslySetInnerHTML={{ __html: comment.content }} />
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default CommentList;
