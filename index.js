
//create dynamic html 
const speakers = [
  {
    name: 'Vitalik Buterin',
    title: 'Co-founder of Ethereum',
    image: 'https://vz.cnwimg.com/wp-content/uploads/2021/05/Vitalik-Buterin-1.jpg', 
    description: 'Vitalik Buterin is the co-founder of Ethereum, the leading blockchain platform for decentralized applications and smart contracts, with a vision to create a decentralized web.'
  },
  {
    name: 'Gavin Wood',
    title: 'Co-founder of Ethereum and Polkadot',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.netcoins.com%2Fwp-content%2Fuploads%2F2021%2F03%2Fgavin-wood.jpeg&f=1&nofb=1&ipt=6d371b3de98d6c3a336a02dd7cb68c9b91f9dd47d2647b68828db9c384ca956e&ipo=images', 
    description: 'Gavin Wood is the co-founder of Ethereum and the creator of Polkadot, focusing on interoperability and scalability in blockchain technology, with a strong commitment to decentralization.'
  }
];

// Function to create speaker elements dynamically
function createSpeakersSection() {
  const container = document.querySelector('.featured-speakers-section');

  const header = document.createElement('h1');
  header.textContent = "Featured Speakers";
  header.classList.add('featured-speakers-header');
  container.appendChild(header);

  speakers.forEach(speaker => {
    const speakerCard = document.createElement('div');
    speakerCard.classList.add('speaker-card');

    const img = document.createElement('img');
    img.src = speaker.image;
    img.alt = 'speaker-image';
    img.classList.add('speaker-image');

   
    const cardText = document.createElement('div');
    cardText.classList.add('card-text');

    const name = document.createElement('h1');
    name.textContent = speaker.name;
    name.classList.add('speaker-name');

    const title = document.createElement('h2');
    title.textContent = speaker.title;
    title.classList.add('speaker-title');

    const description = document.createElement('p');
    description.textContent = speaker.description;
    description.classList.add('speaker-description');

    cardText.appendChild(name);
    cardText.appendChild(title);
    cardText.appendChild(description);

    speakerCard.appendChild(img);
    speakerCard.appendChild(cardText);

    container.appendChild(speakerCard);
  });
  const moreButton = document.createElement('button');
  moreButton.textContent = 'More';
  moreButton.classList.add('more-button'); 
  container.appendChild(moreButton); 
}

window.onload = createSpeakersSection;
