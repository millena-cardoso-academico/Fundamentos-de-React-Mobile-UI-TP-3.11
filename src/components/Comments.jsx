import PropTypes from 'prop-types';
import '../styles/Comments.css';

const Comments = ({ comments }) => {
  return (
    <div className="comments-section">
      <h3>Comentários dos Usuários</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <p><strong>{comment.name}</strong> - {comment.date}</p>
            <p>{comment.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

export default Comments;