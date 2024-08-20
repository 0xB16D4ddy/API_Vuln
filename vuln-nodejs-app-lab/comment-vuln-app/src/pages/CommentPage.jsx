import React, { Component } from "react";
import CommentForm from "../components/CommentForm";
import CommentList from "../components/CommentList";
import { Divider } from "antd";

export class CommentPage extends Component {
  render() {
    return (
      <>
        <div className="container mx-auto max-w-xl">
          <h1 className="text-center text-2xl font-bold my-4">
            Comment Section
          </h1>
          <Divider />
        </div>

        <CommentForm />
        <CommentList />
      </>
    );
  }
}

export default CommentPage;
