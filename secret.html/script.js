// Get the notepad form and note container
const notepadForm = document.querySelector('#notepad-form');
const noteContainer = document.querySelector('#note-container');

// Load saved notes from local storage and display them
const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];

for (let note of savedNotes) {
  const noteCard = createNoteCard(note.title, note.content);
  noteContainer.appendChild(noteCard);
}

// Handle form submission
notepadForm.addEventListener('submit', function(e) {
  e.preventDefault();

  // Get form values
  const title = document.querySelector('#title').value;
  const content = document.querySelector('#content').value;

  // Create note card and add it to the container
  const noteCard = createNoteCard(title, content);
  noteContainer.appendChild(noteCard);

  // Save note to local storage
  const newNote = { title, content };
  savedNotes.push(newNote);
  localStorage.setItem('notes', JSON.stringify(savedNotes));

  // Clear the form
  notepadForm.reset();
});

// Helper function to create a note card
function createNoteCard(title, content) {
  // Create note card elements
  const noteCard = document.createElement('div');
  const noteTitle = document.createElement('h3');
  const noteContent = document.createElement('p');

  // Set note card text and class
  noteTitle.textContent = title;
  noteContent.textContent = content;
  noteCard.classList.add('note-card');

  // Add note card elements to the card
  noteCard.appendChild(noteTitle);
  noteCard.appendChild(noteContent);

  return noteCard;
}


// Load saved notes from local storage and display them
var notes = JSON.parse(localStorage.getItem("notes"));
if (notes) {
    var noteContainer = document.getElementById("note-container");
    for (var i = 0; i < notes.length; i++) {
        var note = notes[i];
        var noteDiv = document.createElement("div");
        noteDiv.classList.add("note");
        noteDiv.style.backgroundColor = note.color;
        var title = document.createElement("h3");
        title.textContent = note.title;
        var content = document.createElement("p");
        content.textContent = note.content;
        noteDiv.appendChild(title);
        noteDiv.appendChild(content);
        noteContainer.appendChild(noteDiv);
    }
}
