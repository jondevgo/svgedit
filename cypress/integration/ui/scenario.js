import {
  visitAndApproveStorage
} from '../../support/ui-test-helper.js';

describe('use various parts of svg-edit', function () {
  before(() => {
    visitAndApproveStorage();
  });

  it('check tool_source', function () {
    cy.get('#tool_source').click();
    cy.get('#svg_source_textarea')
      .type('{selectall}', {force: true})
      .type(`<svg width="640" height="480" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
      <g class="layer">
       <title>Layer 1</title>
        <rect id="rect" fill="#FF0000" height="70" stroke="#000000" stroke-width="5" width="94" x="69.5" y="51.5"/>
       </g>
     </svg>`, {parseSpecialCharSequences: false});
    cy.get('#tool_source_save').click();
    cy.get('#svgcontent').toMatchSnapshot();
  });

  it('check tool_fhpath', function () {
    cy.get('#tool_fhpath')
      .click({force: true});
    cy.get('#svgcontent')
      .trigger('mousedown', 'center')
      .trigger('mousemove', {clientX: 200, clientY: 200, bubbles: true, cancelable: true})
      .trigger('mousemove', {clientX: 20, clientY: 20, bubbles: true, cancelable: true})
      .trigger('mouseup', {force: true});
    cy.get('#svgcontent').toMatchSnapshot();
  });
  it('check tool_text', function () {
    cy.get('#tool_text')
      .click({force: true});
    cy.get('#svgcontent')
      .trigger('mousedown', 'center');
    // svgedit use the #text text field to capture the text
    cy.get('#text').type('1234', {force: true});
    cy.get('#svgcontent').toMatchSnapshot();
  });
});