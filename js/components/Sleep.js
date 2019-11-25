import sleepImg from '/images/sleep.png';

export default function Sleep() {
  return `
    <figure class="figure">
        <img src="${sleepImg}">
        <figcaption class="figure-caption">A caption for the above image.</figcaption>
    </figure>
    `;
}