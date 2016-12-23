let HelpersFactory = () => {
  return {
    safeSubtract: (what, from) => {
      return what > from ? 0 : from - what;
    },

    shuffleArray: (array) => {
      let result = array.slice(0);

      // adapted from http://stackoverflow.com/a/6274381/6696238
      for (let i = result.length; i; i--) {
        // TODO: do not rely only on Math.random which can provide a few same results in a row
        let j = Math.floor(Math.random() * i);
        // elements swap
        [result[i - 1], result[j]] = [result[j], result[i - 1]];
      }

      return result;
    }
  };
};

export default HelpersFactory;
