const quotes = [
  '每天进步 1%，一年后会很不一样。',
  '先完成，再完美。',
  '把想法写成代码，就是你最好的名片。',
  '没有白走的路，每一次调试都算数。',
];

const quoteEl = document.getElementById('quote');
const quoteBtn = document.getElementById('quote-btn');

function pickQuote() {
  const idx = Math.floor(Math.random() * quotes.length);
  quoteEl.textContent = `“${quotes[idx]}”`;
}

quoteBtn.addEventListener('click', pickQuote);
pickQuote();
