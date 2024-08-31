import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Hej14aug2010.JPG/800px-Hej14aug2010.JPG"
        alt="hej Logo"
        priority
        width={200}
        height={200}
      />
    </main>
  );
}
