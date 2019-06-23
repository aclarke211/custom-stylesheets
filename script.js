const testBtn = document.getElementsByClassName('cs-test-btn')[0];

testBtn.addEventListener('click', () => {
  console.log('Adding stylesheets.');

  var sheet = document.createElement('style')
  sheet.innerHTML = `
    .cs-test-btn {
      background-color: blue !important;
    }
  `;
  sheet.classList.add('external-stylesheet');
  document.body.appendChild(sheet);
});
