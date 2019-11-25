import rainbowImg from '../../images/rainbow.png';

export default function Home() {
  return `
    <figure class="figure">
        <img src="${rainbowImg}">
        <figcaption class="figure-caption">A caption for the above image.</figcaption>
    </figure>
    `;
}
