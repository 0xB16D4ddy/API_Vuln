import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
const Links = [
  { url: "https://example.com", text: "Example" },
  { url: "https://google.com", text: "Google" },
  { url: "https://reactjs.org", text: "React" },
];
let timestamp =new Date().toISOString();

timestamp = moment(timestamp).fromNow();


const Comments = [
  {
    id: uuidv4(),
    author: "John",
    content: "some content",
    created_at: timestamp,
    // imgUrl: "http://test.com",
  },
  {
    id: uuidv4(),
    author: "Lisa",
    content: "some content",
    created_at: timestamp,
  },
  {
    id: uuidv4(),
    author: "Anonymous",
    content: "some content",
    created_at: timestamp,
  },
];

const initialState = {
  Comments,
  Links,
};

const commentReducer = createSlice({
  name: "commentReducer",
  initialState,
  reducers: {
    addComment: (state, action) => {
      const newComment = {
        id: uuidv4(), // Generates a unique ID based on the current timestamp
        author: action.payload.author,
        content: action.payload.content,
        created_at: timestamp,
      };
      state.Comments.push(newComment);
    },
  },
});

export const { addComment } = commentReducer.actions;

export default commentReducer.reducer;
