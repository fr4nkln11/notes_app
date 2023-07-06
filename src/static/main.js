function deleteNote(noteId) {
  fetch("/delete-note", {
    method: "POST",
    body: JSON.stringify({ noteId: noteId })
  }).then((_res) => {
    window.location.href = "/";
  });
}

function noteModal(noteId) {
  let modalElement = document.querySelector("#noteViewModal")
  let modalContent = document.querySelector("#noteViewModalContent")
  let noteContent = document.querySelector(`#noteContent${noteId}`)
  let deleteNote_btn = document.querySelector("#deleteNote-btn")
  deleteNote_btn.onclick = function() {
    deleteNote(noteId)
  }
  modalContent.textContent = noteContent.textContent
  var noteModal = new bootstrap.Modal(modalElement, {
    backdrop: true
  })
  noteModal.show()
}
