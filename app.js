const commentList = document.getElementById("comment-list");
const commentForm = document.getElementById("comment-form");

commentForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const commentInput = document.getElementById("comment");

  const comment = document.createElement("li");
  comment.classList.add("comment");

  const commentName = document.createElement("div");
  commentName.classList.add("comment-name");
  commentName.textContent = nameInput.value;

  const commentText = document.createElement("div");
  commentText.classList.add("comment-text");
  commentText.textContent = commentInput.value;

  comment.appendChild(commentName);
  comment.appendChild(commentText);
  commentList.appendChild(comment);

  nameInput.value = "";
  commentInput.value = "";
});