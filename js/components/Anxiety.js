import anxietyImg from '/images/anxiety.png';

export default function Anxiety() {
  return `
    <figure class="figure">
        <img src="${anxietyImg}">
        <figcaption class="figure-caption">A caption for the above image.</figcaption>
    </figure>
    `;
}