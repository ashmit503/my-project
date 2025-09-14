NAME- Ashmit Thakur
SECTION- 23AML-7
UID- 23BAI70503

AIM- The React code implements a simple interactive Library Management interface that demonstrates key React concepts such as state management, event handling, dynamic rendering, and component structure.

CODE EXPLANATION AND FEATURES-


1. The entire interface is contained in a single functional React component (e.g., Library).
2. The UI displays a list of books, each with a title and author.
3. Search books dynamically by title or author.
4. Add new books by entering title and author.
5. Remove books from the existing list.
6. React State Used
7. Books Array State:
8. Maintains the list of all book objects currently in the library.
9. Initially contains a few predefined books to showcase functionality.

Search Input State:

10. Tracks the user’s input in the search box.
11. Used to filter and display only books matching the search query.
12. New Book Title and Author States:
13. Manage input values for adding new books.
14. Controlled inputs enable React to keep track of form values.

Displaying Books:

15. Books are rendered dynamically from the state array.
16. Each book is shown with its title and author in a styled container.
17. Each book has an adjacent "Remove" button to delete it.

Searching Books:

18. The search input filters books in real-time, meaning the visible list updates as the user types.
19. The filtering checks both the title and author fields with case-insensitive matching.

Adding Books:

20. Users can enter a new book title and author in input fields.
21. Clicking the "Add Book" button adds the new book to the existing state array.
22. The input fields are cleared after adding, ready for new entries.

Removing Books:

23. Clicking the "Remove" button next to a book deletes it.
24. This updates the books array by filtering out the removed book by its index.
25. UI immediately reflects this change without page reload.

UI Structure and Styling:

26. The component is wrapped inside a centered container with white background, subtle border, padding, and rounded corners to improve visual appeal.
27. Inputs and buttons are styled for clarity, ease of use, and responsiveness.
28. Proper margins and spacing separate the search bar, add-book form, and the listing of books.
29. Book items appear inside bordered boxes with distinct spacing for readability.
30. React and Frontend Concepts Demonstrated

Functional Component with Hooks:

31. Uses useState hook to handle multiple local states for books data and input fields.

Controlled Components:

32. Input fields' values are tied to state, enabling controlled forms.

Event Handling:

33. Handles onChange events on inputs to dynamically update state.
34. Handles onClick events on buttons to add or remove books.
 
Dynamic Rendering:

35. The JSX renders the filtered list of books based on current state.
36. Removing or adding books causes re-rendering with updated data instantly.
 
Array Manipulation:

37. Uses array methods like filter and spread syntax to create updated book lists.

User Experience:

38. Clearing input fields after adding a book improves usability.
39. Real-time search provides instant feedback.

LEARNING OUTCOMES- 

Helps newcomers understand how React state works in a practical scenario.
Demonstrates how user interactions can update UI dynamically without page reloads.
Shows clean separation of concerns by keeping UI, data, and logic in a single component but structured clearly
