 id="u7y2de"
const history = [];

function addHistory(action) {

  history.unshift({
    id: Date.now().toString(),
    time: new Date().toISOString(),
    ...action
  });

  if (history.length > 500) {
    history.pop();
  }

}

function getHistory() {
  return history;
}

module.exports = {
  addHistory,
  getHistory
};

