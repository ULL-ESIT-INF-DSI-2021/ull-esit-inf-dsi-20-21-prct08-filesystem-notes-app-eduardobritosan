// import { expect } from 'chai';
// import { execSync } from 'child_process';

// const testYargs = (args: string) => {
//   return execSync(`node dist/note-app.js ${args}`).toString();
// };

// describe('Note-app', () => {
//   it('should add notes correctly', () => {
//     expect(testYargs('add --user="edusegre" --title="Red note"' +
//       ' --body="This is a red note" --color="red"')).to.
//       equal('New note added!\n');
//   });
//   it('should list notes correctly', () => {
//     expect(testYargs('list --user="edusegre"')).to.
//       equal('Your notes\nRed note\n');
//   });
//   it('should read notes correctly', () => {
//     expect(testYargs('read --user="edusegre" --title="Red note"')).to.
//       equal('Red note\nThis is a red note\nRed note\nThis is a red note\n');
//   });
//   it('should remove notes correctly', () => {
//     expect(testYargs('remove --user="edusegre" --title="Red note"')).to.
//       equal('Note removed!\n');
//   });
// });
