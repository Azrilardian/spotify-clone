const sliceWords = (words: string, maxWords: number) =>
  words.length <= maxWords ? words : `${words.slice(0, maxWords)}...`

export default sliceWords
