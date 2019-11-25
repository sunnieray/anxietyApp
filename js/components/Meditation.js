import meditationImg from '/images/meditation.png';

export default function Meditation() {
  return `
    <figure class="figure">
        <img src="${meditationImg}">
        <figcaption class="figure-caption">A caption for the above image.</figcaption>
    </figure>
    `;
}