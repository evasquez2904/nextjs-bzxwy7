import Link from 'next/link';

export default function primerPost() {
  return (
    <div>
      <h1>Primer post</h1>
      <Link href="/">
        <a>Volver al inicio</a>
      </Link>
    </div>
  );
}
