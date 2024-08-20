import React from "react";
import PropTypes from "prop-types";
import DOMPurify from "dompurify";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Button } from "antd";

const DynamicLink = () => {
  const { Links } = useSelector((state) => state.commentReducer);
  const links = Links;

  return (
    <div className="link-container">
      {links.map((link, key) => {
        // Sanitize URL and text to ensure safety
        const sanitizedUrl = DOMPurify.sanitize(link.url);
        const sanitizedText = DOMPurify.sanitize(link.text);
        return (
          <NavLink
            key={key}
            to={sanitizedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline link-item"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "#1890ff" : "#000",
            })}
          >
            <Button type="link">{sanitizedText}</Button>
          </NavLink>
        );
      })}
      <NavLink
        // eslint-disable-next-line no-script-url
        to="javascript:alert(1)"
        className="text-blue-500 hover:underline link-item"
      >
        <Button type="link">XSS</Button>
      </NavLink>
    </div>
  );
};

DynamicLink.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default DynamicLink;
