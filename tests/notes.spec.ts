import { expect } from 'chai';
import 'mocha';
import { Notes } from '../src/notes';


describe('Notes methods tests', () => {
  describe('Notes instance getter function tests', () => {
    it('Notes.getNotesInstance() should be an object', () => {
      expect(Notes.getNotesInstance()).to.be.an('object');
    });
    it('Notes instance should be already initialized', () => {
      expect(Notes.getNotesInstance()).to.be.an('object');
    });
  });

  const noteInstance = Notes.getNotesInstance();

  describe('Adding a new note methods tests', () => {
    it('addNote should return \'New note added!\'', () => {
      expect(noteInstance.addNote('brito', 'Red note',
        'Content of the red note, by brito',
        'Red')).to.equal('New note added!');
    });
    noteInstance.removeNote('brito', 'Red note');
  });
});
