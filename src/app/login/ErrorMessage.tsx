export default function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="text-red-700 px-4 py-3 rounded relative mb-4">
      <span className="block sm:inline"> {message}</span>
    </div>
  );
}
