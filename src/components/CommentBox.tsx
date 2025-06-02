import React from "react";

interface CommentBoxProps {
  title?: string;
  isHomePage?: boolean;
}

const CommentBox: React.FC<CommentBoxProps> = ({
  title = "مرحبًا بك",
  isHomePage = false,
}) => {
  return (
    <div className="comment-box">
      <h2>{title}</h2>
      {isHomePage && (
        <p>لقد أصبحت منصات التواصل الإجتماعي مكانًا غير آمن للجميع</p>
      )}
      {!isHomePage && (
        <p>
          <a
            href="https://wa.me/+201207688761"
            className="whatsapp-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            واتساب
          </a>
          يمكنك إقتراح فيديوهات عن طريق
        </p>
      )}
    </div>
  );
};

export default CommentBox;
