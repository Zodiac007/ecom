export default function CustomButton({ text }) {
  return (
    <div className="flex justify-center my-12 fixed bottom-10 left-6 right-6 z-50">
      <div className="bg-[#8688be] text-white text-center py-3 w-full lg:w-1/2 rounded-md">
        {text}
      </div>
    </div>
  );
}
