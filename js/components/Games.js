import gamesImg from '/images/games.png';

export default function Games() {
  return `
    <figure class="figure">
        <img src="${gamesImg}">
        <figcaption class="figure-caption">A caption for the above image.</figcaption>
    </figure>
    `;
}