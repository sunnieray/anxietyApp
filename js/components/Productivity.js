import productivityImg from '/images/productivity.png';

export default function Productivity() {
  return `
    <figure class="figure">
        <img src="${productivityImg}">
        <figcaption class="figure-caption">A caption for the above image.</figcaption>
    </figure>
    `;
}