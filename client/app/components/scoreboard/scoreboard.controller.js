const DUMMY_ENTRIES = [
  {
    playerName: 'John Doe',
    score: 456
  },
  {
    playerName: 'John Doe',
    score: 12
  },
  {
    playerName: 'John Doe',
    score: 15066
  }
];

class ScoreboardController {
  constructor() {
    this.entries = DUMMY_ENTRIES;

  }
}

export default ScoreboardController;
