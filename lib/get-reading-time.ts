export function calculateReadingTime(blocks: any) {
  // Assuming an average reading speed of 225 words per minute
  const wordsPerMinute = 225;

  // Calculate the total word count in the blog
  const totalWords = blocks.reduce((count: any, block: any) => {
    if (
      block.type === "paragraph" &&
      block.content[0] &&
      block.content[0].text
    ) {
      const words = block.content[0].text.split(" ").length;
      return count + words;
    }
    return count;
  }, 0);

  // Calculate the reading time in minutes
  const readingTimeMinutes = totalWords / wordsPerMinute;

  // Round up to the nearest whole number
  const readingTime = Math.ceil(readingTimeMinutes);

  return readingTime;
}
