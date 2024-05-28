import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <h1>Shopping List</h1>
      <div>
        <p>Daljot Kaur</p>
        {/* Replace 'daljotkaur' with your actual GitHub username */}
        <Link href="https://github.com/Daljotkaur">
          Link to GitHub Repository
        </Link>
      </div>
    </main>
  );
}
