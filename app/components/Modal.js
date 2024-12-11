// components/Modal.js
export default function Modal({ isOpen, onClose, children, className }) {
  if (!isOpen) return null;

  return (
    <div className={className}>
      <div className="bg-white rounded-lg shadow-lg  w-full h-full relative">
        <button
          className="absolute top-2 text-lg right-2 text-white hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
