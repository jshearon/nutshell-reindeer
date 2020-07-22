import './cardFactoryStaff.scss';

// create card domstrings here

const makeCollectionCard = (collection) => {
  const isTrueSet = (collection.kidnap === 'true');
  let backgroundColor;
  if (isTrueSet) {
    backgroundColor = 'red';
  }
  let domString = `<div class="card staff-card align-items-center m-3" style="width: 18rem; background-color: ${backgroundColor};" id="${collection.id}">
  <img src="${collection.staffImgUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${collection.staffName}</h5>
    <p class="card-text">${collection.staffTitle}</p>`;
  if (isTrueSet) {
    domString += '<p class="card-text">kidnapped: <i class="fas fa-ghost" style="color:black;"></i></p>';
  } else {
    domString += '<p class="card-text">kidnapped: <i class="fab fa-angellist" style="color:green;"></i></p>';
  }
  domString += `
    <div class="links card-text text-center">
    <a href="#" class="editCard mr-4 card-link hide"><i class="fas fa-pen"></i></a>
    <a href="#" class="viewCard m-4 card-link"><i class="fas fa-search"></i></a>
    <a href="#" class="deleteCard ml-4 card-link hide"><i class="far fa-trash-alt"></i></a>
    </div>
  </div>
</div>`;
  return domString;
};

export default { makeCollectionCard };