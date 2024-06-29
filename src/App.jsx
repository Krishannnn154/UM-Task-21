import "./App.css";
import GradientCard from "./Components/GradientCard";

function App() {
  const cardsData = [
    {
      title: "Majestic Waterfall",
      description: "A powerful waterfall cascading down a lush mountainside.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1661963449031-c1ff2c8d2d99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWFqZXN0aWMlMjBXYXRlcmZhbGx8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Tranquil Beach Sunset",
      description:
        "A vibrant sunset paints the sky with colors as the waves gently lap the shore.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1663954865003-43333b9d5925?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VHJhbnF1aWwlMjBCZWFjaCUyMFN1bnNldHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Starry Night Sky",
      description:
        "A breathtaking view of the Milky Way galaxy, filled with countless stars.",
      imageUrl:
        "https://images.unsplash.com/photo-1464802686167-b939a6910659?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3RhcnJ5JTIwTmlnaHQlMjBTa3l8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Cozy Cabin in the Woods",
      description:
        "A rustic cabin nestled amongst tall trees, offering a peaceful escape.",
      imageUrl:
        "https://images.unsplash.com/photo-1631630259742-c0f0b17c6c10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q296eSUyMENhYmluJTIwaW4lMjB0aGUlMjBXb29kc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Colorful Cityscape",
      description:
        "A vibrant cityscape with towering skyscrapers and bustling streets.",
      imageUrl:
        "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q29sb3JmdWwlMjBDaXR5c2NhcGV8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Majestic Mountain Range",
      description:
        "A collection of snow-capped mountains reaching towards the clear blue sky.",
      imageUrl:
        "https://images.unsplash.com/photo-1416312189147-9a686b7fb250?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFqZXN0aWMlMjBNb3VudGFpbiUyMFJhbmdlfGVufDB8fDB8fHww",
    },
    {
      title: "Blooming Flower Field",
      description:
        "A vast field filled with colorful wildflowers in full bloom.",
      imageUrl:
        "https://images.unsplash.com/photo-1692699469826-c574f2cf0bd5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Qmxvb21pbmclMjBGbG93ZXIlMjBGaWVsZHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Ancient Ruins",
      description:
        "Explore the remnants of a bygone civilization, shrouded in mystery.",
      imageUrl:
        "https://images.unsplash.com/photo-1595168318069-217391d91943?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEFuY2llbnQlMjBSdWluc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Serene Desert Landscape",
      description:
        "Vast sand dunes stretching as far as the eye can see, under a clear blue sky.",
      imageUrl:
        "https://images.unsplash.com/photo-1718062455461-68041512ef3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U2VyZW5lJTIwRGVzZXJ0JTIwTGFuZHNjYXBlfGVufDB8fDB8fHww",
    },
    {
      title: "Lush Tropical Rainforest",
      description:
        "A dense jungle teeming with life, with vibrant plants and exotic animals.",
      imageUrl:
        "https://images.unsplash.com/photo-1530215078880-605aa750b7bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8THVzaCUyMFRyb3BpY2FsJTIwUmFpbmZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Aurora Borealis Display",
      description:
        "A breathtaking display of dancing lights across the night sky, in vibrant colors.",
      imageUrl:
        "https://images.unsplash.com/photo-1517928260182-5688aead3066?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QXVyb3JhJTIwQm9yZWFsaXMlMjBEaXNwbGF5fGVufDB8fDB8fHww",
    },
    {
      title: "Underwater Coral Reef",
      description:
        "A vibrant underwater world teeming with colorful fish and coral formations.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1661841439995-1706237c83dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VW5kZXJ3YXRlciUyMENvcmFsJTIwUmVlZnxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <>
      <h1>All the cards are here...</h1>
      <main>
        {cardsData.map((card) => (
          <GradientCard key={card.title} {...card} />
        ))}
      </main>
    </>
  );
}

export default App;
