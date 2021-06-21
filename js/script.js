const allNamesDomCollections = document.querySelectorAll('.name');
const searchInput = document.getElementById('searchInput');
let names = [];
// Push actual name from each node into the names array:
allNamesDomCollections.forEach(node => names.push(node.innerText));

searchInput.addEventListener('keyup', e => {
  let searchStr = e.target.value.toLowerCase();
  // Create dynamic array of matches between user entry and names array:
  let matchedNames = names.filter(name =>
    name.toLowerCase().includes(searchStr)
  );
  render(matchedNames);
});

const render = matchedNames => {
  // Manipulate DOM via comparison of NodeList and matchedNames:
  allNamesDomCollections.forEach(name => {
    matchedNames.includes(name.innerText)
      ? (name.style.display = 'block')
      : (name.style.display = 'none');
  });
};
