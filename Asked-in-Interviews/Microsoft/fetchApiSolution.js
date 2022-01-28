function solution() {
  const commentsBlock = document.getElementsByClassName('comment-list');

  for (let comment of commentsBlock) {
    setLoading(comment);

    const count = parseInt(comment.getAttribute('data-count'), 10);

    const options = {
      method: 'GET',
    };

    fetch(`https://www.example.com/comments?count=${count}`, options)
      .then((res) => res.json())
      .then((data) => {
        clearLoading(comment);
        for (let obj of data) {
          console.log('html' + getCommentElement(obj));
          comment.append(getCommentElement(obj));
        }
      })
      .catch((err) => {
        clearLoading(comment);
      });
  }
}

const setLoading = (comment) => {
  comment.textContent = 'Loading...';
};

const clearLoading = (comment) => {
  comment.textContent = '';
};

const getCommentElement = (obj) => {
  const [username, message] = obj;
  console.log(username, message);

  const divElement = document.createElement('div');
  divElement.classList.add('comment-item');

  const usernameElement = document.createElement('div');
  usernameElement.classList.add('comment-item__username');
  usernameElement.textContent = username;

  const messageElement = document.createElement('div');
  messageElement.classList.add('comment-item__message');
  messageElement.textContent = message;

  divElement.append(usernameElement);
  divElement.append(messageElement);

  return divElement;
};
