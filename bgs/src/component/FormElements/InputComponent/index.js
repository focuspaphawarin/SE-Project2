export default function InputComponent({
  label,
  placeholder,
  onChange,
  value,
  type,
}) {
  return (
    <div className="relative">
      <p className="text-lg pt-0 pr-2 pb-0 pl-2 -mt-1 mr-0 mb-0 ml-0 font-medium text-gray-600 bg-white">
        {label}
      </p>
      <input
        placeholder={placeholder}
        type={type || "text"}
        value={value}
        onChange={onChange}
        className="bg-gray-200 rounded-full border border-gray-400 border-2 placeholder-gray-400 focus:outline-none focus:border-black focus:border-2 w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-black-500 rounded-md"
      />
    </div>
  );
}