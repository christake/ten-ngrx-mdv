module.exports = {
  name: 'animals',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/animals',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
